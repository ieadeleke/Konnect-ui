import { FiArrowRight, FiCheck } from "react-icons/fi";
import { IMAGES } from "../../assets/images";

export function Arrow() {
  return <FiArrowRight className="h-4 w-4" />;
}

export function Check({ className = "h-3 w-3" }: { className?: string }) {
  return <FiCheck className={className} />;
}

export function Avatars() {
  return (
    <div className="flex -space-x-2.5">
      {IMAGES.ambassadorFaces.slice(0, 3).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-9 w-9 rounded-full object-cover ring-2 ring-wolf-green"
        />
      ))}
    </div>
  );
}
