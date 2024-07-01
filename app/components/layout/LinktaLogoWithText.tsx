import Image from 'next/image';

export default function LinktaLogoWithText() {
  return (
    <figure className="ml-2 flex">
      <Image
        src="/linkta-logo-transparent.svg"
        width={50}
        height={50}
        alt="Linkta Logo"
      />
      <figcaption
        id="linkta-title"
        className="content-end font-semibold text-light-primary text-sx"
      >
        Linkta
      </figcaption>
    </figure>
  );
}
