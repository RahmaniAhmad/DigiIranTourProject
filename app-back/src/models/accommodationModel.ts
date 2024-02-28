import { AccommodationType } from "@prisma/client";

export interface Accommodation {
  id: number;
  title: string;
  accommodationTypeId: number;
  accommodationType?: AccommodationType;
}
