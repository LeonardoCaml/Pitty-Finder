import { Skeleton } from "@mui/material";

import { useState, useEffect } from "react";

export interface CardMuiProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CardMui = ({ image, title, description, onClick }: CardMuiProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div
      className="w-60 flex flex-col items-center p-5 border-3 hover:-translate-y-2 border-black"
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={170}
            height={150}
          />
          <Skeleton variant="text" animation="wave" width={170} height={30} />
          <Skeleton variant="text" animation="wave" width={170} height={30} />
        </div>
      ) : (
        <div className="w-48">
          <div className="h-[150px] w-48 overflow-hidden rounded-xl border-3 border-black">
            <img
              src={image}
              alt="foto do animal"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold text-xl overflow-hidden text-ellipsis my-2">
            {title}
          </h1>
          <p className="text-gray-500 overflow-hidden text-ellipsis my-2">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardMui;
