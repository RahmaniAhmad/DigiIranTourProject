"use client";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FieldValues, useForm } from "react-hook-form";
import { useCity } from "../../../../../../hooks/city/useCity";
import { useUpdateCity } from "../../../../../../hooks/city/useUpdateCity";
import { useProvinces } from "../../../province/hooks/useProvinces";
import { toast } from "react-toastify";
import { IProvince } from "@/type/province";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { city, isLoading } = useCity(id);
  const { updateCity } = useUpdateCity({ onSuccess });
  const { provinces } = useProvinces();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues;
    data.id = id;
    updateCity.mutate(
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
          استان
        </label>
        <Select
          {...register("provinceId")}
          defaultSelectedKeys={city?.provinceId.toString()}
        >
          {provinces &&
            provinces.data.map((province: IProvince) => (
              <SelectItem key={province.id} value={province.name}>
                {province.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="text-default-600" htmlFor="name">
          نام شهر
        </label>
        <Input
          defaultValue={city?.name}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-danger-600">نام شهر اجباری می باشد</p>
        )}
      </div>
      <div className=" grid md:grid-cols-2 place-items-center gap-2 mt-4">
        <Button
          isDisabled={!isValid}
          type="submit"
          color="primary"
          className="w-full mb-2"
        >
          ویرایش شهر
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
