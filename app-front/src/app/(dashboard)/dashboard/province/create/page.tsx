"use client";
import { Input, Button } from "@nextui-org/react";

import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ICreateProvince } from "@/type/province";
import axios from "axios";
import { useCreateProvince } from "../hooks/useCreateProvince";

// async function createProvince(data: ICreateProvince) {
//   const response = await axios.post("http://localhost:3001/api/province", data);
//   return response.data;
//}

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createProvince } = useCreateProvince({ onSuccess });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as ICreateProvince;
    try {
      createProvince.mutate(data);
      onSuccess && onSuccess();
    } catch (error) {
      console.error(error);
    }

    onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label className="text-default-600" htmlFor="name">
        نام استان
      </label>
      <Input {...register("name", { required: true })} />
      {errors.name && (
        <p className="text-danger-600">نام استان اجباری می باشد</p>
      )}

      <br />
      <div className=" grid md:grid-cols-2 place-items-center gap-2 mt-4">
        <Button
          isDisabled={!isValid}
          type="submit"
          color="primary"
          className="w-full mb-2"
        >
          درج استان جدید
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
