import { createAccommodationRoomApi } from "@/apis/mutations/accommodationRoom/createAccommodationRoom";
import { deleteAccommodationRoomApi } from "@/apis/mutations/accommodationRoom/deleteAccommodationRoom";
import { updateAccommodationRoomApi } from "@/apis/mutations/accommodationRoom/updateAccommodationRoom";
import { useMutation } from "react-query";

interface UseAccommodationProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function useAccommodationRoomMutation({
  onSuccess,
  onError,
}: UseAccommodationProps) {
  const createAccommodationRoom = useMutation(
    async (data: any) => {
      return await createAccommodationRoomApi(data);
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

  const updateAccommodationRoom = useMutation(
    async ({ id, data }: any) => {
      return await updateAccommodationRoomApi(id, data);
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

  const deleteAccommodationRoom = useMutation(
    async (id: number) => {
      return await deleteAccommodationRoomApi(id);
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
    createAccommodationRoom,
    updateAccommodationRoom,
    deleteAccommodationRoom,
  };
}
