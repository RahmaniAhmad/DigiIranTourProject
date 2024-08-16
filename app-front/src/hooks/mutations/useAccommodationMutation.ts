import { useMutation } from "react-query";
import { createAccommodationApi } from "../../apis/mutations/accommodation/createAccommodation";
import { updateAccommodationApi } from "@/apis/mutations/accommodation/updateAccommodation";
import { deleteAccommodationApi } from "@/apis/mutations/accommodation/deleteAccommodation";

interface UseAccommodationProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useAccommodationMutation({
  onSuccess,
  onError,
}: UseAccommodationProps) {
  const createAccommodation = useMutation(
    async (data: any) => {
      return await createAccommodationApi(data);
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

  const updateAccommodation = useMutation(
    async ({ id, data }: any) => {
      return await updateAccommodationApi(id, data);
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

  const deleteAccommodation = useMutation(
    async (id: number) => {
      return await deleteAccommodationApi(id);
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
    createAccommodation,
    updateAccommodation,
    deleteAccommodation,
  };
}
