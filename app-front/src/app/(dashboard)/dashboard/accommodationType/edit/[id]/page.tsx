"use client";

import { IUpdateAccommodationType } from "@/type/IAccommodationType";
import { Button, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAccommodationType } from "../../hooks/useAccommodationType";
import { useUpdateAccommodationType } from "../../hooks/useUpdateAccommodationType";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { accommodationType, isLoading } = useAccommodationType(id);
  const { updateAccommodationType } = useUpdateAccommodationType({
    id,
    onSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ defaultValues: accommodationType });

  useEffect(() => {
    setValue("title", accommodationType?.title || "");
  }, [accommodationType, setValue]);

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IUpdateAccommodationType;
    data.id = id;
    updateAccommodationType.mutate(data);
    onClose && onClose();
  };
  if (isLoading) {
    //TODO
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label className="text-default-600" htmlFor="Name">
        نوع محل اقامت
      </label>
      <Input
        defaultValue={accommodationType?.title}
        {...register("title", { required: true })}
      />
      {errors.title && (
        <p className="text-danger-600">نوع محل اقامت اجباری می باشد</p>
      )}
      <br />
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
