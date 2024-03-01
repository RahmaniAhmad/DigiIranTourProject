"use client";

import { IUpdateCity } from "@/type/city";
import { Button, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useCity } from "../../hooks/useCity";
import { useUpdateCity } from "../../hooks/useUpdateCity";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { city, isLoading } = useCity(id);
  const { updateCity } = useUpdateCity({ id, onSuccess });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ defaultValues: city });

  useEffect(() => {
    setValue("name", city?.name || "");
  }, [city, setValue]);

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IUpdateCity;
    data.id = id;
    updateCity.mutate(data);
    onClose && onClose();
  };
  if (isLoading) {
    //TODO
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-neutral-100">
      <label className="text-default-600" htmlFor="Name">
        نام شهر
      </label>
      <Input
        defaultValue={city?.name}
        {...register("name", { required: true })}
      />
      {errors.name && <p className="text-danger-600">نام شهر اجباری می باشد</p>}
      <br />
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
