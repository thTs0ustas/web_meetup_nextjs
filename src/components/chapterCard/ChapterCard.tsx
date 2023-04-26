import Link from 'next/link';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toLower, upperFirst } from 'lodash-es';
import { clearPath } from '@/utils';

type Props = {
  chapter: string;
  parts: string[];
};

const ChapterCard = ({ chapter, parts }: Props) => {
  console.log(chapter, parts);
  return (
    <div className="flex w-full items-center justify-center text-lg text-gray-200 ">
      <div className="bg-slate-950 p-9">
        <FontAwesomeIcon
          className="h-16 w-16 "
          icon={faCircleInfo}
        />
      </div>
      <div className="w-full bg-slate-700 p-6">
        <h1 className="text-2xl font-bold">{upperFirst(chapter)}</h1>
        <ul className="w-full">
          {parts.map((part, i) => (
            <li key={part}>
              <Link
                href={`/${toLower(chapter)}/${clearPath(part)}`}
                className="flex text-slate-200 hover:text-orange-200 "
              >
                <span className="w-5">{`${i + 1}.`}</span>
                {upperFirst(clearPath(part))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterCard;
