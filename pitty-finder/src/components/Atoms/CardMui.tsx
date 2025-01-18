export interface CardMuiProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const CardMui = ({ image, title, description, onClick }: CardMuiProps) => {
  return (
    <div
      className="transition duration-150 w-48 my-5 flex flex-col items-center hover:scale-105"
      onClick={onClick}
    >
      <div className="w-40 flex flex-col items-center">
        <div className="h-40 w-full overflow-hidden rounded-full mb-2">
          <img
            src={image}
            alt="foto do animal"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-center font-bold text-md overflow-hidden text-ellipsis">
          {title}
        </h1>
        <p className="text-center text-sm text-gray-500 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardMui;
