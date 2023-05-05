import Button from './button';
import { useRouter } from 'next/navigation';

const NavigationButtons = ({ prev, next }) => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between ">
      <Button
        disabled={!prev}
        onClick={() => router.push(`/${prev}`)}
      >
        Previous
      </Button>
      <Button
        disabled={!next}
        onClick={() => router.push(`/${next}`)}
      >
        Next
      </Button>
    </div>
  );
};
export default NavigationButtons;
