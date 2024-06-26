import Image from 'next/image';

export default function HeadlineProposition() {
  return (
    <div className="linkta-header flex gap-x-10 font-bold text-light-text ">
      <Image
        src="/linkta-logo-transparent.svg"
        width={150}
        height={150}
        alt="Linkta Logo"
        className="linkta-header-logo w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      <div className="linkta-header-text flex flex-col justify-center gap-y-3">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Streamline Your Learning with
          <span className="text-[#F88639]"> Linkta</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Discover the Structure of Knowledge with the Help of AI
        </h2>
      </div>
    </div>
  );
}
