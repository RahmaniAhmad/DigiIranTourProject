"use client";

import { useMyAccommodation } from "@/hooks/accommodation/useMyAccommodation";
import { useUpdateAccommodation } from "@/hooks/accommodation/useUpdateAccommodation";
import { IUpdateAccommodation } from "@/type/IAccommodation";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FieldValues, useForm } from "react-hook-form";
import { useAccommodationTypes } from "../../../../../../hooks/accommodationType/useAccommodationTypes";
import { toast } from "react-toastify";
import { useCities } from "@/hooks/city/useCities";
import { ICity } from "@/type/ICity";

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
  const { accommodationTypes } = useAccommodationTypes(false);
  const { cities } = useCities();

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
          title: data.title,
          accommodationTypeId: Number(data.accommodationTypeId),
          cityId: Number(data.cityId),
          address: data.address,
          bedroomsCount: data.bedroomsCount,
          bedsCount: data.bedsCount,
          capacity: data.capacity,
          price: data.price,
          imageName:
            filedValues.accommodationImage.length > 0
              ? filedValues.accommodationImage[0].name
              : null,
          accommodationImage:
            filedValues.accommodationImage.length > 0
              ? filedValues.accommodationImage[0]
              : null,
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
          نوع اقامت
        </label>
        <Select
          {...register("accommodationTypeId")}
          defaultSelectedKeys={accommodation?.accommodationTypeId.toString()}
        >
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
        <Select
          {...register("cityId")}
          defaultSelectedKeys={accommodation?.cityId.toString()}
        >
          {cities &&
            cities.map((city: ICity) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
        </Select>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            تصویر
          </label>
          <input type="file" {...register("accommodationImage")} />
        </div>
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          عنوان
        </label>
        <Input
          size="lg"
          {...register("title", { required: true })}
          defaultValue={accommodation?.title}
        />
        {errors.title && (
          <p className="text-danger-600">نوع اقامت اجباری می باشد</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          آدرس
        </label>
        <Input
          size="lg"
          {...register("address", { required: true })}
          defaultValue={accommodation?.address}
        />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد اتاق
        </label>
        <Input
          size="lg"
          {...register("bedroomsCount", { required: true })}
          defaultValue={accommodation?.bedroomsCount}
        />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          تعداد تخت
        </label>
        <Input
          size="lg"
          {...register("bedsCount", { required: true })}
          defaultValue={accommodation?.bedsCount}
        />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          ظرفیت
        </label>
        <Input
          size="lg"
          {...register("capacity", { required: true })}
          defaultValue={accommodation?.capacity}
        />
        {errors.title && <p className="text-danger-600">آدرس اجباری می باشد</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="price">
          قیمت
        </label>
        <Input
          size="lg"
          {...register("price", { required: true })}
          defaultValue={accommodation?.price}
        />
        {errors.title && <p className="text-danger-600">قیمت اجباری می باشد</p>}
      </div>
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
