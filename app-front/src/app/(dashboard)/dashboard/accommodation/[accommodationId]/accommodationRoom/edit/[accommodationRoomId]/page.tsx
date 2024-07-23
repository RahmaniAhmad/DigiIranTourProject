"use client";

import { useMyAccommodation } from "@/hooks/accommodationRoom/useMyAccommodationRoom";
import { useUpdateAccommodation } from "@/hooks/accommodation/useUpdateAccommodation";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IPageProps {
  id: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ id, onClose, onSuccess }: IPageProps) => {
  const { accommodation, isLoading } = useMyAccommodation(id);
  const { updateAccommodation } = useUpdateAccommodation({
    onSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as any;
    data.id = id;
    updateAccommodation.mutate(
      {
        id,
        data: {
          accommodationTypeId: Number(data.accommodationTypeId),
          cityId: Number(data.cityId),
          title: data.title,
          address: data.address,
          bedroomsCount: data.bedroomsCount,
          rule: data.rule,
        },
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
          عنوان
        </label>
        <Input {...register("title", { required: true })} />
        {errors.title && (
          <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد تخت
        </label>
        <Input {...register("bedsCount", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="rule">
          ظرفیت
        </label>
        <Input {...register("capacity")} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="rule">
          قیمت
        </label>
        <Input {...register("price")} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="rule">
          توضیحات
        </label>
        <Input {...register("description")} />
      </div>
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
