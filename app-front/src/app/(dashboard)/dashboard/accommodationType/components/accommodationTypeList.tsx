"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/accommodationType/create/page";
import EditPage from "@/app/(dashboard)/dashboard/accommodationType/edit/[id]/page";
import axios from "axios";
import { useAccommodationTypes } from "../hooks/useAccommodationTypes";
import { IAccommodationType } from "@/type/accommodationType";
import { useDeleteAccommodationType } from "../hooks/useDeleteAccommodationType";

// async function deleteAccommodationType(id: number) {
//   const response = await axios.delete(
//     `http://localhost:3001/api/accommodationType/${id}`
//   );
//   return response.data;
// }

interface AccommodationTypeListProps {
  getAll?: (
    page?: number,
    filter?: string
  ) => Promise<{
    data: IAccommodationType[];
    rowsCount: number;
  }>;
  getById?: (id: number) => Promise<IAccommodationType | null>;

  onDelete?: (id: number) => void;
}

export default function AccommodationTypeList({
  getById,
  getAll,
  onDelete,
}: AccommodationTypeListProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [accommodationTypeName, setAccommodationTypeName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  // const [accommodationType, setAccommodationType] = useState<IAccommodationType>();

  const {
    accommodationTypes,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useAccommodationTypes();
  const { deleteAccommodationType } = useDeleteAccommodationType({
    onSuccess: refetch,
  });

  const openDeleteConfirm = async (id: number) => {
    const accommodationType = getById && (await getById(id));
    setAccommodationTypeName(accommodationType?.title ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    // const accommodationType = getById && (await getById(id));
    // accommodationType && setAccommodationType(accommodationType);
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    selectedId && deleteAccommodationType.mutate(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setAccommodationTypeName("");
  };

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setFilter(event.target.value);
  };
  const handleClearSearch = () => {
    setFilter("");
  };
  return (
    <>
      <CustomModal
        title="ایجاد نوع اقامت جدید"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <CreatePage
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
          id={selectedId ?? 0}
          onSuccess={() => refetch()}
          onClose={() => setShowEditModal(false)}
        />
      </CustomModal>
      <ConfirmModal
        title="حذف نوع اقامت"
        name={accommodationTypeName}
        openModal={showDeleteConfirm}
        onCloseModal={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteConfirmed}
      />
      <Button onClick={() => setShowCreateModal(true)} color="primary">
        ایجاد نوع اقامت جدید
      </Button>
      <Input
        isClearable
        placeholder="Search..."
        name="filter"
        value={filter}
        onChange={handleSearch}
        onClear={handleClearSearch}
      />
      {accommodationTypes && (
        <Table
          loading={isLoading}
          heads={["نام نوع اقامت"]}
          data={accommodationTypes.data}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/accommodationType",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {accommodationTypes && accommodationTypes.rowsCount > 1 && (
        <Pagination
          className="w-full"
          page={currentPage}
          total={accommodationTypes.rowsCount}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></Pagination>
      )}
    </>
  );
}
