interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const MeetupCard: React.FC<{ data: Meetup }> = ({ data }) => {
  const { id, title, image, address, description } = data;

  return (
    <div className="card shadow-inner">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
};

export default MeetupCard;
