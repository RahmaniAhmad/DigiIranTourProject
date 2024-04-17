"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useForm, FieldValues } from "react-hook-form";
import { useCreateCity } from "../../../../../hooks/city/useCreateCity";
import { useProvinces } from "../../../../../hooks/province/useProvinces";
import { IProvince } from "@/type/province";
import { toast } from "react-toastify";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createCity } = useCreateCity({ onSuccess });
  const { provinces } = useProvinces();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as { name: string; provinceId: string };
    try {
      createCity.mutate(
        {
          name: data.name,
          provinceId: Number(data.provinceId),
        },
        {
          onSuccess: () => {
            toast.success("success");
          },
          onError: (error: any) => {
            toast.error(error.response.data.message);
          },
        }
      );
      onSuccess && onSuccess();
    } catch (error) {
      console.error(error);
    }

    onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
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
        <label className="text-default-600" htmlFor="name">
          نام شهر
        </label>
        <Input {...register("name", { required: true })} />
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
          درج شهر جدید
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
