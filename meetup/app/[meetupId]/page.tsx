import MeetupCard from "@/components/MeetupCard";

function MeetupDetails({ params }: { params: { meetupId: string } }) {
  const { meetupId } = params;

  return (
    <MeetupCard
      data={{
        id: "string",
        title: "string",
        image: "string",
        address: "string",
        description: "string",
      }}
    />
  );
}

export default MeetupDetails;
