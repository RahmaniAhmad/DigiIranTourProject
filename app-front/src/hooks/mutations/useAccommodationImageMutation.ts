import { createAccommodationImageApi } from "@/apis/accommodationImage/createAccommodationImage";
import { deleteAccommodationImageApi } from "@/apis/accommodationImage/deleteAccommodationImage";
import { updateAccommodationImageApi } from "@/apis/accommodationImage/updateAccommodationImage";
import { useMutation } from "react-query";

interface UseAccommodationProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useAccommodationImageMutation({
  onSuccess,
  onError,
}: UseAccommodationProps) {
  const createAccommodationImage = useMutation(
    async (data: any) => {
      return await createAccommodationImageApi(data);
    },
    {
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    }
  );

  const updateAccommodationImage = useMutation(
    async ({ id, data }: any) => {
      return await updateAccommodationImageApi(id, data);
    },
    {
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    }
  );

  const deleteAccommodationImage = useMutation(
    async (id: number) => {
      return await deleteAccommodationImageApi(id);
    },
    {
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error) => {
        if (onError) {
          onError(error);
        }
      },
    }
  );

  return {
    createAccommodationImage,
    updateAccommodationImage,
    deleteAccommodationImage,
  };
}
