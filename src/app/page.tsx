import { EventFilters } from "@/components/Events/EventFilters";
import { EventsList } from "@/components/Events/EventsList";
import { Previewer } from "@/components/Previewer/Previewer";
import { mockEvents } from "@/mockData/events";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-3">
        <EventFilters />
        <EventsList events={mockEvents} />
        <Previewer />
      </main>
    </div>
  );
}
