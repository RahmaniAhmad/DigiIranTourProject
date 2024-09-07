import { Skeleton } from "@nextui-org/react";

const AccommodationsSkeleton = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 mb-12 pb-2 border-b-1">
      <div className="md:col-span-1 h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Skeleton className="w-5/5 rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>

      <div className="md:col-span-2 mr-4 flex flex-1 flex-col py-4">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="grid gap-2">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <div className="grid gap-2">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationsSkeleton;