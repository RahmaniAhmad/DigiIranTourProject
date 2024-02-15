"use client";

import { useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { IProvince } from "@/type/province";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/province/create/page";
import EditPage from "@/app/(dashboard)/dashboard/province/edit/[id]/page";
import axios from "axios";
import { useData } from "../useData";

// async function deleteProvince(id: number) {
//   const response = await axios.delete(
//     `http://localhost:3001/api/province/${id}`
//   );
//   return response.data;
// }

interface ProvinceListProps {
  getAll?: (
    page?: number,
    filter?: string
  ) => Promise<{
    data: IProvince[];
    rowsCount: number;
  }>;
  getById?: (id: number) => Promise<IProvince | null>;

  onDelete?: (id: number) => void;
}

export default function ProvinceList({
  getById,
  getAll,
  onDelete,
}: ProvinceListProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [provinceName, setProvinceName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  // const [province, setProvince] = useState<IProvince>();

  const {
    provinces,
    province,
    refetch,
    deleteProvince,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useData(selectedId);

  const openDeleteConfirm = async (id: number) => {
    const province = getById && (await getById(id));
    setProvinceName(province?.name ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    // const province = getById && (await getById(id));
    // province && setProvince(province);
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
          province={province}
          id={selectedId ?? 0}
          onSuccess={() => refetch()}
          onClose={() => setShowEditModal(false)}
        />
      </CustomModal>
      <ConfirmModal
        title="حذف استان"
        name={provinceName}
        openModal={showDeleteConfirm}
        onCloseModal={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteConfirmed}
      />
      <Button onClick={() => setShowCreateModal(true)} color="primary">
        ایجاد استان جدید
      </Button>
      <Input
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
          heads={["نام استان"]}
          data={provinces.data}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/province",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {provinces && provinces.rowsCount > 1 && (
        <Pagination
          className="w-full"
          page={currentPage}
          total={provinces.rowsCount}
          siblings={5}
          initialPage={1}
          showControls
          onChange={setCurrentPage}
        ></Pagination>
      )}
    </>
  );
}
