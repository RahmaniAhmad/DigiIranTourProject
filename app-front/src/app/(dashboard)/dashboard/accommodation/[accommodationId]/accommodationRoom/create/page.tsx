"use client";
import { useAccommodationRoomMutation } from "@/hooks/mutations";
import { Input, Button } from "@nextui-org/react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

interface IPageProps {
  accommodationId: string;
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ accommodationId, onSuccess, onClose }: IPageProps) => {
  const { createAccommodationRoom } = useAccommodationRoomMutation({
    onSuccess,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as any;

    createAccommodationRoom.mutate(
      {
        accommodationId: accommodationId,
        title: data.title,
        bedsCount: data.bedsCount,
        capacity: data.capacity,
        price: data.price,
        description: data.description,
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
  return (
    <form onSubmit={handleSubmit(formSubmit)} encType="multipart/form-data">
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
