"use client";

import CustomPagination from "@/components/shared/customPagination";
import { ConfirmModal, CustomModal } from "@/components/UI";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { ChangeEvent, useCallback, useState } from "react";
// import { useAccommodations } from "@/hooks/accommodation/useAccommodations";
// import { useDeleteAccommodation } from "@/hooks/accommodation/useDeleteAccommodation";
import CreatePage from "./create/page";
import EditPage from "./edit/[id]/page";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAccommodationMutation } from "@/hooks/mutations";
import { useAccommodations } from "@/hooks/queries";
import { AccommodationListModel } from "@/interfaces";

const Page = () => {
  const router = useRouter();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [accommodationName, setAccommodationName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const columns = [
    { name: "استان", uid: "province" },
    { name: "شهر", uid: "city" },
    { name: "نوع اقامتگاه", uid: "type" },
    { name: "عنوان", uid: "title" },
    { name: "آدرس", uid: "address" },
    { name: "تعداد اتاق", uid: "bedroomsCount" },
    { name: "", uid: "actions" },
  ];

  const renderCell = useCallback(
    (accommodation: AccommodationListModel, columnKey: React.Key) => {
      const cellValue =
        accommodation[columnKey as keyof AccommodationListModel];
      if (columnKey == "actions") {
        return (
          <div className="relative flex items-center gap-8">
            <Tooltip content="مشاهده اتاق">
              <span
                onClick={() => {
                  router.push(
                    `/dashboard/accommodation/${accommodation.id}/accommodationRoom`
                  );
                }}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                اتاق ها
              </span>
            </Tooltip>
            <Tooltip content="ویرایش اقامتگاه">
              <span className="text-lg text-success-400 cursor-pointer active:opacity-50">
                <FaEdit
                  onClick={() =>
                    accommodation.id && openEditModal(accommodation.id)
                  }
                />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="حذف اقامتگاه">
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
      return cellValue;
    },
    []
  );

  const {
    accommodations,
    count,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useAccommodations();

  const { deleteAccommodation } = useAccommodationMutation({
    onSuccess: refetch,
  });

  const openDeleteConfirm = async (id: number) => {
    const accommodation = accommodations?.find((f: any) => f.id == id);
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
      deleteAccommodation.mutate(selectedId, {
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

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage && setCurrentPage(1);
    setFilter && setFilter(event.target.value);
  };
  const handleClearSearch = () => {
    setFilter && setFilter("");
  };
  return (
    <>
      <CustomModal
        title="ایجاد نوع اقامت جدید"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <CreatePage
          onSuccess={() => refetch && refetch()}
          onError={(error: string) => {
            toast.warning(error);
          }}
          onClose={() => setShowCreateModal(false)}
        />
      </CustomModal>
      <CustomModal
        title="ویرایش نوع اقامت"
        openModal={showEditModal}
        onCloseModal={() => setShowEditModal(false)}
      >
        <EditPage
          id={selectedId ?? 0}
          onSuccess={() => refetch && refetch()}
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
        اقامتگاه جدید
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
        <TableBody items={accommodations}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {accommodations && count > 10 && (
        <CustomPagination
          page={currentPage}
          total={Math.ceil(count / 10)}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></CustomPagination>
      )}
    </>
  );
};

export default Page;
