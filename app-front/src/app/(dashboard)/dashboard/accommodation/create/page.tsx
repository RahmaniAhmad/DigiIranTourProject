"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";

import { useForm, FieldValues } from "react-hook-form";
import { ICreateAccommodation } from "@/type/accommodation";
import { useCreateAccommodation } from "../hooks/useCreateAccommodation";
import { useProvinces } from "../../province/hooks/useProvinces";
import { IProvince } from "@/type/province";
import { useAccommodationTypes } from "../../accommodationType/hooks/useAccommodationTypes";
import { IAccommodationType } from "@/type/accommodationType";
import { useCities } from "../../../../../hooks/city/useCities";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createAccommodation } = useCreateAccommodation({ onSuccess });
  const { provinces } = useProvinces();
  const { cities } = useCities();
  const { accommodationTypes } = useAccommodationTypes();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as ICreateAccommodation;
    try {
      console.log(data);
      // createAccommodation.mutate(data);
      onSuccess && onSuccess();
    } catch (error) {
      console.error(error);
    }

    onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-neutral-100">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          عنوان
        </label>
        <Input {...register("title", { required: true })} />
        {errors.title && (
          <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          استان
        </label>
        <Select {...register("provinceId")}>
          {provinces &&
            provinces.data.map((province: IProvince) => (
              <SelectItem key={province.id} value={province.id}>
                {province.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          شهر
        </label>
        <Select {...register("cityId")}>
          {cities &&
            cities.data.map((city: IProvince) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          نوع اقامت
        </label>
        <Select {...register("accommodationTypeId")}>
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
      <div className=" grid md:grid-cols-2 place-items-center gap-2 mt-4">
        <Button
          isDisabled={!isValid}
          type="submit"
          color="primary"
          className="w-full mb-2"
        >
          درج نوع اقامت جدید
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
