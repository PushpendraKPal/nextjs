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

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch paths for all meetups dynamically
  const paths = [
    { params: { meetupId: "1" } },
    { params: { meetupId: "2" } },
    // Add more meetup IDs as needed
  ];

  return {
    paths,
    fallback: false, // or true if you want to use fallback rendering
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  // Fetch meetup data based on meetupId
  const data: Meetup = {
    id: meetupId,
    title: "Meetup Title",
    image: "Meetup Image URL",
    address: "Meetup Address",
    description: "Meetup Description",
  };

  return {
    props: {
      data,
    },
  };
};

export default MeetupDetails;
