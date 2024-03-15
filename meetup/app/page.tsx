// page.tsx
import MeetupList from "@/components/Meetup_list";
import { NextPage } from "next";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const Home: NextPage = () => {
  const arr: Meetup[] = [
    {
      id: "1",
      title: "Meetup First",
      image: "https://shorturl.at/huCPW",
      address: "123 Main Street, City, Country",
      description: "A beautiful park with lush greenery and walking trails.",
    },
    {
      id: "2",
      title: "Meetup Second",
      image: "https://shorturl.at/huCPW",
      address: "456 Elm Street, City, Country",
      description: "A cozy cafe serving delicious coffee and pastries.",
    },
    {
      id: "3",
      title: "Meetup Thired",
      image: "https://shorturl.at/huCPW",
      address: "789 Ocean Avenue, City, Country",
      description: "A scenic beach with golden sands and crystal-clear waters.",
    },
    {
      id: "4",
      title: "Meetup Fourth",
      image: "https://shorturl.at/huCPW",
      address: "101 Heritage Place, City, Country",
      description:
        "A historic landmark with fascinating architecture and stories.",
    },
    {
      id: "5",
      title: "Meetup Fifth",
      image: "https://shorturl.at/huCPW",
      address: "234 Summit Road, City, Country",
      description:
        "A mountain retreat offering breathtaking views and serenity.",
    },
  ];

  return (
    <div className="home">
      <MeetupList data={arr} />
    </div>
  );
};

export default Home;
