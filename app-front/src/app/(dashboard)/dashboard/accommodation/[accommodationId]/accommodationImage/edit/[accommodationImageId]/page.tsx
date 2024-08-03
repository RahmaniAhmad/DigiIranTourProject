"use client";

import { useAccommodationImageMutation } from "@/hooks/mutations/useAccommodationImageMutation";
import { useMyAccommodationImage } from "@/hooks/queries/accommodationImage/useMyAccommodationImage";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IPageProps {
  accommodationImageId: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

const Page = ({ accommodationImageId, onClose, onSuccess }: IPageProps) => {
  const { accommodationImage, isLoading } =
    useMyAccommodationImage(accommodationImageId);
  const { updateAccommodationImage } = useAccommodationImageMutation({
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
    data.id = accommodationImageId;
    updateAccommodationImage.mutate(
      {
        id: accommodationImageId,
        data: {
          id: data.id,
          title: data.title,
          accommodationImage: filedValues.accommodationImage[0],
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
    <form onSubmit={handleSubmit(formSubmit)} encType="multipart/form-data">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          عنوان
        </label>
        <Input
          {...register("title", { required: true })}
          defaultValue={accommodationImage?.title}
        />
        {errors.title && (
          <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
        )}
      </div>
      <div className="mb-4">
        {accommodationImage?.url && (
          <Image
            src={`https://localhost:44390/uploads/${accommodationImage.url}`}
            alt={accommodationImage?.title ?? "image"}
            loader={({ src, width, quality }) => {
              const url = new URL(
                `https://localhost:44390/uploads/${accommodationImage.url}`
              );
              url.searchParams.append("src", src);
              url.searchParams.append("w", width + "");
              url.searchParams.append("q", quality + "");
              return url.toString();
            }}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تصویر
        </label>
        <input type="file" {...register("accommodationImage")} />
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
