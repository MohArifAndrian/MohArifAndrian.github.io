import { profile } from "../data/profile";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] bg-[#0e3d33] ring-1 ring-white/10 ${className}`}
    >
      <img
        src={profile.photo}
        alt={profile.name}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
