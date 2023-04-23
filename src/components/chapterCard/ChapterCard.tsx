import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { upperFirst } from 'lodash-es';
import Link from 'next/link';

import { clearPath } from '@/utils';

type Props = {
  chapter: string;
  parts: string[];
};

const ChapterCard = ({ chapter, parts }: Props) => {
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
                href={`/chapters/${chapter.toLocaleLowerCase()}/${clearPath(part)}`}
                className="text-slate-200 hover:text-slate-100"
              >
                {i + 1}. {upperFirst(clearPath(part))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterCard;
