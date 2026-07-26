import type { RoomDetails } from "@/const/roomDetails";
import {
  Wifi,
  Car,
  Wind,
  Snowflake,
  MonitorPlay,
  CigaretteOff,
  Flame,
} from "lucide-react";

function AmenityIcon({
  name,
  unavailable = false,
}: {
  name: string;
  unavailable?: boolean;
}) {
  const className = `h-6 w-6 stroke-[1.5] ${unavailable ? "text-gray-400" : ""}`;

  if (name === "Wifi") return <Wifi className={className} />;
  if (name === "Dedicated workspace")
    return <MonitorPlay className={className} />;
  if (name === "Free parking on premises") return <Car className={className} />;
  if (name === "Air conditioning") return <Snowflake className={className} />;
  if (name === "Hairdryer") return <Wind className={className} />;
  if (name === "Carbon monoxide alarm")
    return <CigaretteOff className={className} />;
  if (name === "Smoke alarm") return <Flame className={className} />;

  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className={className}
      style={{ fill: "currentcolor" }}
    >
      <path d="M25 4v16a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 1H9v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"></path>
    </svg>
  );
}

export function Amenities({ property }: { property: RoomDetails }) {
  return (
    <div className="py-6">
      <h3 className="mb-6 text-xl font-semibold">What this place offers</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        {property.amenities.available.map((amenity) => (
          <div className="flex items-center gap-4 text-gray-700" key={amenity}>
            <AmenityIcon name={amenity} />
            <span>{amenity}</span>
          </div>
        ))}
        {property.amenities.unavailable.map((amenity) => (
          <div
            className="flex items-center gap-4 text-gray-400 line-through"
            key={amenity}
          >
            <AmenityIcon name={amenity} unavailable />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      {/* <Button variant="outline" className="font-semibold text-[16px] py-6 px-6">
        Show all {property.amenities.totalCount} amenities
      </Button> */}
    </div>
  );
}
