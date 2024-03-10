"use client";

interface PageProps {
  params: {
    attraction: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>{params.attraction}</div>;
};

export default Page;
