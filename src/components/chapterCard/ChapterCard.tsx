import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  parts: string[];
};

const ChapterCard = ({ title, parts }: Props) => {
  return (
    <div className="flex justify-center items-center text-lg w-full text-gray-200 ">
      <div className="bg-slate-950 p-9">
        <FontAwesomeIcon className="w-16 h-16 " icon={faCircleInfo} />
      </div>
      <div className="w-full bg-slate-700 p-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <ul className="w-full">
          {parts.map((part) => (
            <li key={part}>
              <Link
                href={`/chapters/${title.toLocaleLowerCase()}-${part}`}
                className="text-slate-200 hover:text-slate-100"
              >
                {part}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterCard;
