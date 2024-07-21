import { createAccommodationRoomApi } from "@/apis/accommodationRoom/createAccommodationRoom";
import { useMutation } from "react-query";

interface UseCreateAccommodationRoomProps {
  onSuccess?: () => void;
}
export function useCreateAccommodationRoom({
  onSuccess,
}: UseCreateAccommodationRoomProps) {
  const createAccommodationRoom = useMutation(
    async (data: any) => {
      return await createAccommodationRoomApi(data);
    },
    {
      onSuccess: () => {
        onSuccess && onSuccess();
      },
    }
  );

  return {
    createAccommodationRoom,
  };
}
