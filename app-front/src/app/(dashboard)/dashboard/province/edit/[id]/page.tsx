"use client";

import { IUpdateProvince } from "@/type/province";
import { Button, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useProvince } from "../../hooks/useProvince";
import { useUpdateProvince } from "../../hooks/useUpdateProvince";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { province, isLoading } = useProvince(id);
  const { updateProvince } = useUpdateProvince({ id, onSuccess });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ defaultValues: province });

  useEffect(() => {
    setValue("name", province?.name || "");
  }, [province, setValue]);

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as IUpdateProvince;
    data.id = id;
    updateProvince.mutate(data);
    onClose && onClose();
  };
  if (isLoading) {
    //TODO
    return <p>Loading...</p>;
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <label className="text-default-600" htmlFor="Name">
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
