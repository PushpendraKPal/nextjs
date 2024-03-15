// meetup_list.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

function MeetupList(props: { data: Meetup[] }) {
  const { data } = props;
  return (
    <div>
      {data.map((meetup) => (
        <div key={meetup.id} className="card shadow-inner">
          <img src={meetup.image} alt={meetup.title} />
          <h2>{meetup.title}</h2>
          <p className="mb-3">{meetup.address}</p>
          <Link href={`/${meetup.id}`} className="button">
            Get Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MeetupList;
