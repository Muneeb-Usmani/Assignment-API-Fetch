import React from "react";

const DynamicRoute = async (props: any) => {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );
  const res = await req.json();

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold font-mono my-3 text-2xl">
          User #{res.id} Details
        </h1>
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200  ">
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg ">Name</dt>
            <dd className="text-lg font-semibold">{res.name}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">User Name</dt>
            <dd className="text-lg font-semibold">{res.username}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">Email</dt>
            <dd className="text-lg font-semibold">{res.email}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">Phone Number</dt>
            <dd className="text-lg font-semibold">{res.phone}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">Address</dt>
            <dd className="text-lg font-semibold">
              {res.address.street} {res.address.suite} {res.address.city}{" "}
              {res.address.zipcode}
            </dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">Website</dt>
            <dd className="text-lg font-semibold">{res.website}</dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default DynamicRoute;
