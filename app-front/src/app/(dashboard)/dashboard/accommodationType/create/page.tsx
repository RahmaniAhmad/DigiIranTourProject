"use client";
import { Input, Button } from "@nextui-org/react";

import { useForm, FieldValues } from "react-hook-form";
import { ICreateAccommodationType } from "@/type/IAccommodationType";
import { useCreateAccommodationType } from "../../../../../hooks/accommodationType/useCreateAccommodationType";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createAccommodationType } = useCreateAccommodationType({ onSuccess });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as ICreateAccommodationType;
    try {
      createAccommodationType.mutate(data);
      onSuccess && onSuccess();
    } catch (error) {
      console.error(error);
    }

    onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label className="text-default-600" htmlFor="name">
        نوع اقامت
      </label>
      <Input size="lg" {...register("name", { required: true })} />
      {errors.name && (
        <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
      )}

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
