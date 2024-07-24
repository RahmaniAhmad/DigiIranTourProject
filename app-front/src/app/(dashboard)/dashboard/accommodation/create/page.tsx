"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useAccommodationMutation } from "@/hooks/mutations";
import { useAccommodationTypes, useCities } from "@/hooks/queries";

interface IPageProps {
  onClose?: () => void;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
const Page = ({ onSuccess, onError, onClose }: IPageProps) => {
  const { createAccommodation } = useAccommodationMutation({
    onSuccess,
    onError,
  });
  const { accommodationTypes } = useAccommodationTypes();
  const { cities } = useCities();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = async (filedValues: FieldValues) => {
    const data = filedValues as any;

    createAccommodation.mutate(
      {
        typeId: Number(data.accommodationTypeId),
        cityId: Number(data.cityId),
        title: data.title,
        address: data.address,
        bedroomsCount: data.bedroomsCount,
        rule: data.rule,
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
          نوع اقامت
        </label>
        <Select {...register("accommodationTypeId")}>
          {accommodationTypes &&
            accommodationTypes.map((accommodationType: any) => (
              <SelectItem
                key={accommodationType.id}
                value={accommodationType.id}
              >
                {accommodationType.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          شهر
        </label>
        <Select {...register("cityId")}>
          {cities &&
            cities.map((city: any) => (
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
        <label className="block text-sm font-bold mb-2" htmlFor="rule">
          قوانین
        </label>
        <Input {...register("rule")} />
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
