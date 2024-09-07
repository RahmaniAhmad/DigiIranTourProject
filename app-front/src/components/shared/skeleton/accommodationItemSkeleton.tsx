import { Card, CardBody, Skeleton } from "@nextui-org/react";

const AccommodationItemSkeleton = () => {
  return (
    <Card radius="none" className="bg-gray-50">
      <CardBody className="text-right">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-12 pb-2">
          <div className="md:col-span-1 h-128 w-128 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Skeleton className="w-5/5 rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1  my-4">
          <div className="col-span-1">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="col-span-1">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <div className="col-span-1">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>
        <br />
        <div className="grid md:grid-cols-2">
          <div className="col-span-1">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <div className="col-span-1">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AccommodationItemSkeleton;
