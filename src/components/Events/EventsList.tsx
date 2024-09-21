import { Card } from "../ui/card";

interface EventsListProps {
  events: any;
}

export const EventsList = ({ events }: EventsListProps) => {
  return (
    <div className="overflow-y-auto w-full z-0 mt-20">
      {events?.map((event: any) => (
        <div key={event.id} className="py-1">
          <Card>
            <h1 className="font-bold">{event.event_name}</h1>
            <h2>{event.event_description}</h2>
          </Card>
        </div>
      ))}
    </div>
  );
};
