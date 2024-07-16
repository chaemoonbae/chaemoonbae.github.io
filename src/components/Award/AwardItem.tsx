import { AwardProps } from "@/types";

const AwardItem = ({ name, date, organizer, description }: AwardProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4>{name}</h4>
          <span>{date}</span>
        </div>
        {/* <span>{organizer}</span> */}
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default AwardItem;
