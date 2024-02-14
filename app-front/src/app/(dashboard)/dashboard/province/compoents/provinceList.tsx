"use client";

import { useEffect, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { IProvince } from "@/type/province";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";

interface ProvinceListProps {
  getAll: () => any;
  //   getAll: (
  //     filter?: string,
  //     page?: number
  //   ) => Promise<{
  //     data: IProvince[];
  //     total: number;
  //   }>;
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
  const [provinces, setProvinces] = useState<IProvince[]>();
  const [province, setProvince] = useState<IProvince>();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchProvinces = async () => {
    setLoading(true);
    const data = await getAll();
    //   search !== ""
    //     ? await getAll(search, currentPage)
    //     : await getAll(undefined, currentPage);
    setLoading(false);
    setProvinces(data);
    // setTotal(data.total);
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

  const handleConfirm = () => {
    onDelete && selectedId && onDelete(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setProvinceName("");
    fetchProvinces();
  };
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearch(event.target.value);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleClearSearch = () => {
    setSearch("");
  };
  return (
    <>
      <CustomModal
        title="Create Province"
        openModal={showCreateModal}
        onCloseModal={() => setShowCreateModal(false)}
      >
        <h1>create</h1>
        {/* <CreatePage
          onSuccess={() => fetchProvinces()}
          onClose={() => setShowCreateModal(false)}
        /> */}
      </CustomModal>
      <CustomModal
        title="Edit Province"
        openModal={showEditModal}
        onCloseModal={() => setShowEditModal(false)}
      >
        <h1>edit</h1>
        {/* <EditPage
          province={province}
          id={selectedId ?? 0}
          onSuccess={() => fetchProvinces()}
          onClose={() => setShowEditModal(false)}
        /> */}
      </CustomModal>
      <ConfirmModal
        title="Delete"
        name={provinceName}
        openModal={showDeleteConfirm}
        onCloseModal={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirm}
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
      {total > 1 && (
        <Pagination
          className="w-full"
          total={total}
          siblings={5}
          initialPage={1}
          showControls
          onChange={handlePageChange}
        ></Pagination>
      )}
    </>
  );
}
