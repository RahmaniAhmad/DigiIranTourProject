"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/accommodation/create/page";
import EditPage from "@/app/(dashboard)/dashboard/accommodation/edit/[id]/page";
import { useAccommodations } from "@/hooks/accommodation/useAccommodations";
import { toast } from "react-toastify";
import { useDeleteAccommodation } from "@/hooks/accommodation/useDeleteAccommodation";

export default function AccommodationList() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [accommodationName, setAccommodationName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const {
    accommodations,
    rowsCount,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useAccommodations();
  const { deleteAccommodation } = useDeleteAccommodation({
    onSuccess: refetch,
  });
  const openDeleteConfirm = async (id: number) => {
    const accommodation = accommodations.find((f) => f.id == id);
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
          toast.error(error.response.data.message);
        },
      });
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
          heads={["نوع اقامت", "عنوان اقامتگاه"]}
          data={accommodations}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/accommodation",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {accommodations && rowsCount > 1 && (
        <Pagination
          className="w-full"
          page={currentPage}
          total={rowsCount}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></Pagination>
      )}
    </>
  );
}
