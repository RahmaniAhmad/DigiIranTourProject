"use client";

import { useAccommodationsByType } from "@/hooks/accommodation/useAccommodationsByType";
import { useEffect } from "react";

interface PageProps {
  params: {
    accommodation: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { accommodations } = useAccommodationsByType(params.accommodation);

  return (
    <div>
      {params.accommodation}
      {accommodations.map((accommodation) => {
        return accommodation.title;
      })}
    </div>
  );
};

export default Page;
