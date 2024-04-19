"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/province/create/page";
import EditPage from "@/app/(dashboard)/dashboard/province/edit/[id]/page";
import { useProvinces } from "@/hooks/province/useProvinces";
import { useDeleteProvince } from "@/hooks/province/useDeleteProvince";

export default function ProvinceList() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [provinceName, setProvinceName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const {
    provinces,
    count,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useProvinces();

  const { deleteProvince } = useDeleteProvince({ onSuccess: refetch });

  const openDeleteConfirm = async (id: number) => {
    const province = provinces.find((f: any) => f.id == id);
    setProvinceName(province?.name ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    selectedId && deleteProvince.mutate(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setProvinceName("");
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
        title="ایجاد استان جدید"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <CreatePage
          onSuccess={() => refetch()}
          onClose={() => setShowCreateModal(false)}
        />
      </CustomModal>
      <CustomModal
        title="ویرایش استان"
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
        title={`حذف استان ${provinceName}`}
        name={provinceName}
        openModal={showDeleteConfirm}
        onCloseModal={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteConfirmed}
      />
      <Button onClick={() => setShowCreateModal(true)} color="primary">
        ایجاد استان جدید
      </Button>
      <Input
        size="lg"
        isClearable
        placeholder="Search..."
        name="filter"
        value={filter}
        onChange={handleSearch}
        onClear={handleClearSearch}
      />
      {provinces && (
        <Table
          loading={isLoading}
          heads={["استان"]}
          data={provinces}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/province",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {provinces && count > 1 && (
        <Pagination
          dir="ltr"
          className="w-full"
          page={currentPage}
          total={Math.ceil(count / 10)}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></Pagination>
      )}
    </>
  );
}
