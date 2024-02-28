"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";

import { useForm, FieldValues } from "react-hook-form";
import { ICreateAccommodation } from "@/type/accommodation";
import { useCreateAccommodation } from "../hooks/useCreateAccommodation";
import { useProvinces } from "../../province/hooks/useProvinces";
import { IProvince } from "@/type/province";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createAccommodation } = useCreateAccommodation({ onSuccess });
  const { provinces } = useProvinces();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as ICreateAccommodation;
    try {
      createAccommodation.mutate(data);
      onSuccess && onSuccess();
    } catch (error) {
      console.error(error);
    }

    onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-neutral-100">
      <label className="text-default-600" htmlFor="title">
        اقامت
      </label>
      <Input {...register("title", { required: true })} />
      {errors.title && (
        <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
      )}

      <br />
      <Select label="استان" className="max-w-xs">
        {provinces &&
          provinces.data.map((province: IProvince) => (
            <SelectItem key={province.id} value={province.id}>
              {province.name}
            </SelectItem>
          ))}
      </Select>
      <br />
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
