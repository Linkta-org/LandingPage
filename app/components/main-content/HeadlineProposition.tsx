import Image from 'next/image';

export default function HeadlineProposition() {
  return (
    <div className="linkta-header flex gap-x-10 font-bold text-light-text ">
      <Image
        src="/linkta-logo-transparent.svg"
        width={150}
        height={150}
        alt="Linkta Logo"
        className="linkta-header-logo"
      />
      <div className="linkta-header-text flex flex-col justify-center gap-y-3">
        <h1 className="text-3xl">
          Streamline Your Learning with
          <span className="text-[#F88639]"> Linkta</span>
        </h1>
        <h2 className="text-xl">
          Discover the Structure of Knowledge with the Help of AI
        </h2>
      </div>
    </div>
  );
}
