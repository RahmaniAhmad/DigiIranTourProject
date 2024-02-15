"use client";

import { useEffect, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { IProvince } from "@/type/province";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/province/create/page";
import EditPage from "@/app/(dashboard)/dashboard/province/edit/[id]/page";
import axios from "axios";

async function deleteProvince(id: number) {
  const response = await axios.delete(
    `http://localhost:3001/api/province/${id}`
  );
  return response.data;
}

interface ProvinceListProps {
  getAll: (
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
  const [loading, setLoading] = useState(false);
  const [provinceName, setProvinceName] = useState("");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [province, setProvince] = useState<IProvince>();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsCount, setRowsCount] = useState(0);

  const fetchProvinces = async () => {
    setLoading(true);
    const data =
      search !== ""
        ? await getAll(currentPage, search)
        : await getAll(currentPage);
    setLoading(false);
    setProvinces(data.data);
    setRowsCount(data.rowsCount);
  };

  useEffect(() => {
    fetchProvinces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search]);

  const openDeleteConfirm = async (id: number) => {
    const province = getById && (await getById(id));
    setProvinceName(province?.name ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    const province = getById && (await getById(id));
    province && setProvince(province);
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    selectedId && deleteProvince(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setProvinceName("");
    fetchProvinces();
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearch(event.target.value);
  };
  const handleClearSearch = () => {
    setSearch("");
  };
  return (
    <>
      <CustomModal
        title="ایجاد استان جدید"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <CreatePage
          onSuccess={() => fetchProvinces()}
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
          onSuccess={() => fetchProvinces()}
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
        value={search}
        onChange={handleSearch}
        onClear={handleClearSearch}
      />
      <Table
        loading={loading}
        heads={["نام استان"]}
        data={provinces}
        actions={{
          showEdit: true,
          showDelete: true,
          baseActionURL: "/dashboard/province",
        }}
        onDelete={openDeleteConfirm}
        onEdit={openEditModal}
      ></Table>
      {rowsCount > 1 && (
        <Pagination
          className="w-full"
          total={rowsCount}
          siblings={5}
          initialPage={1}
          showControls
          onChange={handlePageChange}
        ></Pagination>
      )}
    </>
  );
}
