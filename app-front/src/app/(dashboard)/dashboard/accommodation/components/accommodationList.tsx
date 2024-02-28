"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/accommodation/create/page";
import EditPage from "@/app/(dashboard)/dashboard/accommodation/edit/[id]/page";
import axios from "axios";
import { useAccommodations } from "../hooks/useAccommodations";
import { IAccommodation } from "@/type/accommodation";

// async function deleteAccommodation(id: number) {
//   const response = await axios.delete(
//     `http://localhost:3001/api/accommodation/${id}`
//   );
//   return response.data;
// }

interface AccommodationListProps {
  getAll?: (
    page?: number,
    filter?: string
  ) => Promise<{
    data: IAccommodation[];
    rowsCount: number;
  }>;
  getById?: (id: number) => Promise<IAccommodation | null>;

  onDelete?: (id: number) => void;
}

export default function AccommodationList({
  getById,
  getAll,
  onDelete,
}: AccommodationListProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [accommodationName, setAccommodationName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  // const [accommodation, setAccommodation] = useState<IAccommodation>();

  const {
    accommodations,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useAccommodations();

  const openDeleteConfirm = async (id: number) => {
    const accommodation = getById && (await getById(id));
    setAccommodationName(accommodation?.title ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    // const accommodation = getById && (await getById(id));
    // accommodation && setAccommodation(accommodation);
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    // selectedId && deleteAccommodation.mutate(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setAccommodationName("");
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
        name={accommodationName}
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
      {accommodations && (
        <Table
          loading={isLoading}
          heads={["نام نوع اقامت"]}
          data={accommodations.data}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/accommodation",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {accommodations && accommodations.rowsCount > 1 && (
        <Pagination
          className="w-full"
          page={currentPage}
          total={accommodations.rowsCount}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></Pagination>
      )}
    </>
  );
}
