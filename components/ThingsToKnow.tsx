import { Info, ShieldAlert } from "lucide-react";
import type { RoomDetails } from "@/const/roomDetails";

export function ThingsToKnow({ property }: { property: RoomDetails }) {
  const houseRules = "houseRules" in property ? property.houseRules : undefined;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Things to know</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M26 4h-2V1h-2v3H10V1H8v3H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM26 26H6V12h20v14zm0-16H6V6h20v4z"></path></svg>
            Cancellation policy
          </h3>
          <p className="mb-2 text-gray-700">
            Add your trip dates to get the cancellation details for this stay.
          </p>
         </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Info className="h-6 w-6 stroke-[1.5]" />
            House rules
          </h3>
          <ul className="space-y-2 text-gray-700 mb-2">
            <li>Check-in {houseRules?.checkIn ?? "after 12:00"}</li>
            <li>Checkout {houseRules?.checkout ?? "before 11:00"}</li>
            <li>{houseRules?.guestsMaximum ?? property.stats.guests} guests maximum</li>
            {houseRules?.partiesAllowed === false ? <li>No parties or loud music</li> : null}
          </ul>
         </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 stroke-[1.5]" />
            Safety & property
          </h3>
          <ul className="space-y-2 text-gray-700 mb-2">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
         </div>
      </div>
    </div>
  );
}
