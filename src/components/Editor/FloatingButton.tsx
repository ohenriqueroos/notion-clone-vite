interface IFloatingButtonProps {
  title: string;
  description: string;
  onClick: () => void;
  image: string;
  alt: string;
}

const FloatingButton = ({
  title,
  description,
  onClick,
  image,
  alt,
}: IFloatingButtonProps) => {
  return (
    <button
      className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-600"
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-12 border border-zinc-600 rounded"
      />
      <div className="flex flex-col text-left">
        <span className="text-sm">{title}</span>
        <span className="text-xs text-zinc-400">{description}</span>
      </div>
    </button>
  );
};

export default FloatingButton;
