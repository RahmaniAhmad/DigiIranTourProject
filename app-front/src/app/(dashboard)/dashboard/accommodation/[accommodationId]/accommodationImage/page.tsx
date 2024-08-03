"use client";

import { useCallback, useState } from "react";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import CreatePage from "@/app/(dashboard)/dashboard/accommodation/[accommodationId]/accommodationImage/create/page";
import EditPage from "@/app/(dashboard)/dashboard/accommodation/[accommodationId]/accommodationImage/edit/[accommodationImageId]/page";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAccommodationImages } from "@/hooks/queries/accommodationImage/useAccommodationImages";
import { AccommodationImageListModel } from "@/interfaces";
import { useAccommodationImageMutation } from "@/hooks/mutations/useAccommodationImageMutation";

export default function Page({
  params,
}: {
  params: { accommodationId: string };
}) {
  const { accommodationImages, refetch, isLoading } = useAccommodationImages(
    Number(params.accommodationId)
  );

  const columns = [
    { name: "عنوان", uid: "title" },
    { name: "", uid: "url" },
    { name: "", uid: "actions" },
  ];

  const renderCell = useCallback(
    (accommodation: AccommodationImageListModel, columnKey: React.Key) => {
      const cellValue =
        accommodation[columnKey as keyof AccommodationImageListModel];
      if (columnKey == "actions") {
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="ویرایش اتاق">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEdit
                  onClick={() =>
                    accommodation.id && openEditModal(accommodation.id)
                  }
                />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف اتاق">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <FaTrash
                  onClick={() =>
                    accommodation.id && openDeleteConfirm(accommodation.id)
                  }
                />
              </span>
            </Tooltip>
          </div>
        );
      }
      if (columnKey === "url") {
        return typeof cellValue === "string" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://localhost:44390/uploads/${cellValue}`}
            alt={accommodation.title}
            style={{ width: "100px", height: "100px" }}
          />
        ) : null;
      }
      return cellValue;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [accommodationName, setAccommodationName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const { deleteAccommodationImage } = useAccommodationImageMutation({
    onSuccess: refetch,
  });

  const openDeleteConfirm = async (id: number) => {
    const accommodation = accommodationImages.find((f: any) => f.id == id);
    setAccommodationName(accommodation?.title ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    selectedId &&
      deleteAccommodationImage.mutate(selectedId, {
        onSuccess: () => {
          toast.success("success");
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setAccommodationName("");
  };

  return (
    <>
      <CustomModal
        title="ایجاد نوع اقامت جدید"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <CreatePage
          accommodationId={params.accommodationId}
          onSuccess={() => refetch()}
          onClose={() => setShowCreateModal(false)}
        />
      </CustomModal>
      <CustomModal
        title="ویرایش نوع اقامت"
        openModal={showEditModal}
        onCloseModal={() => setShowEditModal(false)}
      >
        <EditPage
          accommodationImageId={selectedId ?? 0}
          onSuccess={() => refetch()}
          onClose={() => setShowEditModal(false)}
        />
      </CustomModal>
      <ConfirmModal
        title="حذف نوع اقامت"
        name={accommodationName}
        openModal={showDeleteConfirm}
        onCloseModal={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteConfirmed}
      />
      <Button onClick={() => setShowCreateModal(true)} color="primary">
        ایجاد نوع اقامت جدید
      </Button>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={accommodationImages}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
