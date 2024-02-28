"use client";

import { IUpdateAccommodation } from "@/type/accommodation";
import { Button, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAccommodation } from "../../hooks/useAccommodation";
import { useUpdateAccommodation } from "../../hooks/useUpdateAccommodation";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { accommodation, isLoading } = useAccommodation(id);
  const { updateAccommodation } = useUpdateAccommodation({
    id,
    onSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ defaultValues: accommodation });

  useEffect(() => {
    setValue("title", accommodation?.title || "");
  }, [accommodation, setValue]);

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IUpdateAccommodation;
    data.id = id;
    updateAccommodation.mutate(data);
    onClose && onClose();
  };
  if (isLoading) {
    //TODO
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-neutral-100">
      <label className="text-default-600" htmlFor="Name">
        نوع محل اقامت
      </label>
      <Input
        defaultValue={accommodation?.title}
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
