"use client";

import { useAccommodation } from "@/hooks/accommodation/useAccommodation";
import { useUpdateAccommodation } from "@/hooks/accommodation/useUpdateAccommodation";
import { IUpdateAccommodation } from "@/type/IAccommodation";
import { IAccommodationType } from "@/type/IAccommodationType";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAccommodationTypes } from "../../../accommodationType/hooks/useAccommodationTypes";
import { toast } from "react-toastify";
import { useCities } from "@/hooks/city/useCities";
import { ICity } from "@/type/ICity";
import { AccommodationViewModel } from "@/viewModels/accommodation/accommodationViewModel";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { accommodation, isLoading } = useAccommodation(id);
  const { updateAccommodation } = useUpdateAccommodation({
    onSuccess,
  });
  const { accommodationTypes } = useAccommodationTypes();
  const { cities } = useCities();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IUpdateAccommodation;
    data.id = id;
    updateAccommodation.mutate(
      { id, data },
      {
        onSuccess: () => {
          toast.success("success");
        },
        onError: (error: any) => {
          toast.error(error.response.data.message);
        },
      }
    );
    onClose && onClose();
  };
  if (isLoading) {
    //TODO
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          نوع اقامت
        </label>
        <Select
          {...register("accommodationTypeId")}
          defaultSelectedKeys={accommodation?.accommodationTypeId.toString()}
        >
          {accommodationTypes &&
            accommodationTypes.data.map(
              (accommodationType: IAccommodationType) => (
                <SelectItem
                  key={accommodationType.id}
                  value={accommodationType.id}
                >
                  {accommodationType.title}
                </SelectItem>
              )
            )}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          شهر
        </label>
        <Select
          {...register("cityId")}
          defaultSelectedKeys={accommodation?.cityId.toString()}
        >
          {cities &&
            cities.map((city: ICity) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          عنوان
        </label>
        <Input
          {...register("title", { required: true })}
          defaultValue={accommodation?.title}
        />
        {errors.title && (
          <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          آدرس
        </label>
        <Input
          {...register("address", { required: true })}
          defaultValue={accommodation?.address}
        />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد اتاق
        </label>
        <Input {...register("bedroomsCount", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد تخت
        </label>
        <Input {...register("bedsCount", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          ظرفیت
        </label>
        <Input {...register("capacity", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className=" grid md:grid-cols-2 place-items-center gap-2 mt-4">
        <Button
          isDisabled={!isValid}
          type="submit"
          color="primary"
          className="w-full mb-2"
        >
          ویرایش نوع محل اقامت
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
