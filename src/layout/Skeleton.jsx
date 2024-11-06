import { Progress } from 'flowbite-react';
import { RiChat1Line, RiTreeLine } from 'react-icons/ri';

export const PostSkeleton = () => {
  const skeleton = () => {
    return (
      <div className="flex gap-5">
        <div className="animate-pulse rounded-full w-12 h-10 bg-neutral-400"></div>
        <div className="flex flex-col gap-3 bg-neutral-200 w-full rounded-lg px-5 py-2">
          <div className="flex flex-col gap-2">
            <h1 className="animate-pulse h-3 w-36 bg-neutral-500"></h1>
            <p className="animate-pulse h-2 w-44 bg-neutral-400"></p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="h-2 w-36 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-80 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-52 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-80 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-56 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-20 bg-neutral-400 animate-pulse"></p>
            <p className="h-2 w-96 bg-neutral-400 animate-pulse"></p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center text-neutral-500 rounded-lg text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1">
              <RiTreeLine className="fill-green-400 h-full w-6" />
              <div className="animate-pulse h-2 w-10 bg-neutral-400"></div>
            </div>
            <div className="flex gap-2 text-neutral-500 items-center text-sm cursor-pointer transition-all hover:bg-neutral-100 active:bg-neutral-300 px-3 py-1 rounded-lg">
              <RiChat1Line className="h-full w-6 fill-green-400" /> <div className="animate-pulse h-2 w-10 bg-neutral-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {Array(5)
        .fill()
        .map((_, index) => (
          <div key={index}>{skeleton()}</div>
        ))}
    </>
  );
};

export const CommentSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden overscroll-none z-50 py-10 px-10 h-full">
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="rounded-full bg-neutral-400 h-14 w-10 object-cover z-10 animate-pulse"></div>
          <div className="h-full"></div>
        </div>

        <div className="flex flex-col h-full w-full overflow-auto gap-3">
          <div className="flex gap-2 items-center">
            <h1 className="h-5 w-36 bg-neutral-600 animate-pulse"></h1> • <h1 className="h-5 w-36 bg-neutral-400 animate-pulse"></h1>
          </div>
          <div className="flex flex-wrap gap-4">
            <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
            <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 p-5 rounded-lg">
        <div className="border-b border-neutral-800 pb-2 mb-2 ">
          <div className="h-4 w-36 bg-neutral-400 animate-pulse"></div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="rounded-full bg-neutral-400 h-10 w-10 object-cover z-10 animate-pulse"></div>
            <div className="h-full"></div>
          </div>

          <div className="flex flex-col h-full w-full overflow-auto gap-3">
            <div className="flex gap-2 items-center">
              <h1 className="h-5 w-36 bg-neutral-600 animate-pulse"></h1> • <h1 className="h-5 w-36 bg-neutral-400 animate-pulse"></h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-7 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-80 bg-neutral-400 animate-pulse"></h1>
              <h1 className="h-4 w-52 bg-neutral-400 animate-pulse"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PetitionSkeleton = () => {
  const skeleton = () => {
    return (
      <a href="#" className="flex flex-col w-full h-52 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full md:border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="object-cover bg-neutral-400 animate-pulse rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg"></div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl h-4 w-28 bg-neutral-400 animate-pulse font-bold tracking-tight text-gray-900 dark:text-white"></h5>
          <p className="mb-3 font-normal bg-neutral-300 animate-pulse w-20 h-2 "></p>
          <p className="mb-3 font-normal bg-neutral-300 animate-pulse w-72 h-2 "></p>
          <p className="mb-3 font-normal bg-neutral-300 animate-pulse w-40 h-2 "></p>
        </div>
      </a>
    );
  };

  return (
    <>
      {Array(5)
        .fill()
        .map((_, index) => (
          <div key={index}>{skeleton()}</div>
        ))}
    </>
  );
};

export const StatsPetitionSkeleton = () => {
  return (
    <div className="sticky top-4 border border-neutral-200 p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <Progress progress={100} color="green" />
        <div className="flex justify-between font-bold">
          <div className="text-green-500">
            <h1 className="bg-neutral-400 h-2 w-12 animate-pulse"></h1>
            <p className="bg-neutral-400 h-2 w-12 animate-pulse"></p>
          </div>
          <div className="text-end">
            <h1 className="bg-neutral-400 h-2 w-12 animate-pulse"></h1>
            <p className="bg-neutral-400 h-2 w-12 animate-pulse"></p>
          </div>
        </div>
        <button className="animate-pulse bg-green-500 h-4 px-3 py-1 w-full rounded-lg text-white hover:bg-green-400 active:bg-green-700"></button>
      </div>
    </div>
  );
};

export const DetailPetitionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col col-span-2">
        <div className="flex flex-col gap-4 h-96">
          <h1 className="text-center font-bold w-full h-5 bg-neutral-600 animate-pulse text-2xl lg:text-2xl md:text-2xl md:text-start"></h1>
          <div className="rounded-lg shadow object-cover sticky h-96 w-full bg-neutral-400 animate-pulse"></div>
          <p>
            <span className="text-neutral-400 bg-neutral-400 h-2 w-96 animate-pulse"></span>
          </p>
          <div className="md:hidden">
            <StatsPetitionSkeleton />
          </div>
        </div>
        <h1 className="font-bold mt-4 bg-neutral-400 h-2 w-96 animate-pulse"></h1>
        <h1 className="bg-neutral-400 h-2 w-96 animate-pulse"></h1>
      </div>
      <div className="hidden lg:block md:block sm:hidden w-full">
        <StatsPetitionSkeleton />
      </div>
    </div>
  );
};
