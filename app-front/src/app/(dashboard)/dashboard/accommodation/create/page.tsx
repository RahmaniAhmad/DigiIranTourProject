"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useForm, FieldValues } from "react-hook-form";
import { useProvinces } from "../../province/hooks/useProvinces";
import { useAccommodationTypes } from "../../accommodationType/hooks/useAccommodationTypes";
import { useCities } from "../../../../../hooks/city/useCities";
import { useCreateAccommodation } from "@/hooks/accommodation/useCreateAccommodation";
import { ICreateAccommodation } from "@/type/IAccommodation";
import { toast } from "react-toastify";
import { IAccommodationType } from "@/type/IAccommodationType";
import { ICity } from "@/type/ICity";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
}
const Page = ({ onSuccess, onClose }: IPageProps) => {
  const { createAccommodation } = useCreateAccommodation({ onSuccess });
  const { accommodationTypes } = useAccommodationTypes();
  const { cities } = useCities();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as ICreateAccommodation;

    createAccommodation.mutate(
      {
        title: data.title,
        accommodationTypeId: Number(data.accommodationTypeId),
        cityId: Number(data.cityId),
        address: data.address,
        bedroomsCount: data.bedroomsCount,
        bedsCount: data.bedsCount,
        capacity: data.capacity,
        imageName: filedValues.accommodationImage[0].name,
        accommodationImage: filedValues.accommodationImage[0],
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
    // onClose && onClose();
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} encType="multipart/form-data">
      <div className="mb-4">
        <input type="file" {...register("accommodationImage")} />

        <label className="block text-sm font-bold mb-2" htmlFor="title">
          نوع اقامت
        </label>
        <Select {...register("accommodationTypeId")}>
          {accommodationTypes &&
            accommodationTypes.data.map(
              (accommodationType: IAccommodationType) => (
                <SelectItem
                  key={accommodationType.id}
                  value={accommodationType.id}
                >
                  {accommodationType.title}
                </SelectItem>
              )
            )}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          شهر
        </label>
        <Select {...register("cityId")}>
          {cities &&
            cities.map((city: ICity) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
        </Select>
      </div>
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
          آدرس
        </label>
        <Input {...register("address", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد اتاق
        </label>
        <Input {...register("bedroomsCount", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد تخت
        </label>
        <Input {...register("bedsCount", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          ظرفیت
        </label>
        <Input {...register("capacity", { required: true })} />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
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
