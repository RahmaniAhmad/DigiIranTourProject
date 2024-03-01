"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, Pagination } from "@nextui-org/react";
import { ConfirmModal, CustomModal } from "@/components/UI";
import Table from "@/components/UI/table";
import CreatePage from "@/app/(dashboard)/dashboard/city/create/page";
import EditPage from "@/app/(dashboard)/dashboard/city/edit/[id]/page";
import { useCities } from "../../hooks/city/useCities";
import { CityViewModel } from "@/models/city/cityViewModel";
import { useDeleteCity } from "@/hooks/city/useDeleteCity";

interface CityListProps {
  getAll?: (
    page?: number,
    filter?: string
  ) => Promise<{
    data: CityViewModel[];
    rowsCount: number;
  }>;
  getById?: (id: number) => Promise<CityViewModel | null>;

  onDelete?: (id: number) => void;
}

export default function CityList({ getById, getAll, onDelete }: CityListProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [provinceName, setCityName] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  // const [province, setCity] = useState<ICity>();

  const {
    cities,
    rowsCount,
    refetch,
    isLoading,
    currentPage,
    setCurrentPage,
    filter,
    setFilter,
  } = useCities();
  const { deleteCity } = useDeleteCity({
    onSuccess: refetch,
  });

  const openDeleteConfirm = async (id: number) => {
    const province = getById && (await getById(id));
    setCityName(province?.name ?? "");
    setSelectedId(id);
    setShowDeleteConfirm(true);
  };

  const openEditModal = async (id: number) => {
    // const province = getById && (await getById(id));
    // province && setCity(province);
    setSelectedId(id);
    setShowEditModal(true);
  };

  const handleDeleteConfirmed = () => {
    selectedId && deleteCity.mutate(selectedId);
    setShowDeleteConfirm(false);
    setSelectedId(undefined);
    setCityName("");
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
      {cities && (
        <Table
          loading={isLoading}
          heads={["نام استان", "نام شهر"]}
          data={cities}
          actions={{
            showEdit: true,
            showDelete: true,
            baseActionURL: "/dashboard/province",
          }}
          onDelete={openDeleteConfirm}
          onEdit={openEditModal}
        ></Table>
      )}
      {cities && rowsCount > 1 && (
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
