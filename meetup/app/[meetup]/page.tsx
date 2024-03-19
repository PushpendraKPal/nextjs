import MeetupCard from "@/components/MeetupCard";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

async function MeetupDetails({ params }: { params: { meetup: string } }) {
  const { meetup } = params;

  return <MeetupCard id={meetup} />;
}

export default MeetupDetails;
