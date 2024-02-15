"use client";

import { IEditProvince } from "@/type/province";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

async function editProvince(data: IEditProvince) {
  const response = await axios.put("http://localhost:3001/api/province", data);
  return response.data;
}
async function getProvince(id: number) {
  const response = await axios.get(`http://localhost:3001/api/province/${id}`);
  return response.data;
}
interface IPageProps {
  province?: IEditProvince;
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ province, id, onClose, onSuccess }: IPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IEditProvince;
    data.id = id;
    await editProvince(data);
    onClose && onClose();
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-neutral-100">
      <label className="text-default-600" htmlFor="name">
        نام استان
      </label>
      <Input
        defaultValue={province?.name}
        {...register("name", { required: true })}
      />
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
          ویرایش استان
        </Button>
        <Button onClick={onClose} color="default" className="w-full mb-2">
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Page;
