import { FaStar, FaMotorcycle } from "react-icons/fa6";
import { FiArrowRight, FiUser, FiHome } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa6";
import { IMAGES } from "../../assets/images";

export function Arrow() {
  return <FiArrowRight className="h-4 w-4" />;
}

export function Bike({ className = "h-5 w-5" }: { className?: string }) {
  return <FaMotorcycle className={className} />;
}

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-wolf-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={className} aria-hidden="true" />
      ))}
    </span>
  );
}

export function Avatars() {
  return (
    <div className="flex -space-x-2.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="grid h-9 w-9 place-items-center rounded-full bg-wolf-cream text-wolf-green ring-2 ring-wolf-green"
        >
          <FiUser className="h-4 w-4" />
        </span>
      ))}
    </div>
  );
}

export function RouteMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-wolf-green-deep shadow-2xl ring-1 ring-white/10 ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
        aria-hidden="true"
      />
      <svg viewBox="0 0 100 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M20 22 C 62 36, 26 72, 78 100" fill="none" stroke="#0b7a52" strokeWidth="1.6" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>

      <span className="absolute left-[12%] top-[12%] grid h-9 w-9 place-items-center rounded-full bg-wolf-orange text-white shadow-lg">
        <FaUtensils className="h-4 w-4" />
      </span>

      <span className="absolute bottom-[12%] right-[12%] grid h-9 w-9 place-items-center rounded-full bg-white text-wolf-green shadow-lg">
        <FiHome className="h-4 w-4" />
      </span>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-wolf-orange shadow-xl">
          <img src={IMAGES.partnerRider} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
