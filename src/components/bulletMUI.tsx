type buttonProps = {
  children: string;
};

export default function BulletCard({ children }: buttonProps) {
  return (
    <div className="w-fit border border-gray-500 bg-white text-xs text-gray-500 p-1 my-1 rounded-md">
      {children}
    </div>
  );
}
