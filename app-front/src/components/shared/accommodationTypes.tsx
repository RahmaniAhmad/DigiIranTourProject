import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  selectedType?: string;
};
const AccommodationTypes = ({ selectedType }: Props) => {
  return (
    <ButtonGroup className="mt-2 mb-8 flex justify-center">
      <Button
        style={{
          backgroundColor: selectedType === undefined ? "#aaa" : "primary",
        }}
        as={Link}
        href="/accommodations"
      >
        همه موارد
      </Button>
      <Button
        style={{
          backgroundColor: selectedType === "hotel" ? "#aaa" : "primary",
        }}
        as={Link}
        href="/accommodations/hotel"
      >
        هتل
      </Button>
      <Button
        style={{
          backgroundColor: selectedType === "apartment" ? "#aaa" : "primary",
        }}
        as={Link}
        href="/accommodations/apartment"
      >
        هتل آپارتمان
      </Button>
      <Button
        style={{
          backgroundColor: selectedType === "ecotourism" ? "#aaa" : "primary",
        }}
        as={Link}
        href="/accommodations/ecotourism"
      >
        بومگردی
      </Button>
    </ButtonGroup>
  );
};

export default AccommodationTypes;
