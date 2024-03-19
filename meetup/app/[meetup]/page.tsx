import MeetupCard from "@/components/MeetupCard";
import { GetStaticPaths, GetStaticProps } from "next";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

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
