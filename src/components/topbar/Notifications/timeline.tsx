import Link from "next/link";

interface TimelineProps {
  description: string;
  state: string;
  date: string;
}

export const Timeline = ({ description, state, date }: TimelineProps) => {
  return (
    <div className="timeline-info">
      <div>
        {description}
        <br />
        <Link href={""}>
          <a>
            <strong>{state}</strong>
          </a>
        </Link>
      </div>
      <small className="text-muted">{date}</small>
    </div>
  );
};
