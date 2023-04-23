import Image from "next/image";

const PresentationCard = () => (
  <div className="text-white flex justify-center flex-col items-center px-5 py-3 bg-slate-800 w-full">
    <div>
      <h1 className="text-2xl font-medium">Intro to Next.js 13</h1>
      <h2 className="text-xl text-right">Web Meetup</h2>
    </div>
    <div className="flex items-end rounded gap-2 mt-[-1.5rem]">
      <Image
        src="/assets/me.jpeg"
        alt="me"
        width={50}
        height={50}
        className="rounded-full"
      />

      <h3 className="text-lg font-normal">Thanos Tsoustas</h3>
    </div>
  </div>
);

export default PresentationCard;
