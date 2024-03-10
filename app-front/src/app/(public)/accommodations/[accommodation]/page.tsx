"use client";

interface PageProps {
  params: {
    accommodation: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>{params.accommodation}</div>;
};

export default Page;
