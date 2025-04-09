const Hero = () => {
  return (
    <main>
      <section className="hidden md:flex flex-row gap-[108px]">
        <div className="flex-1 flex flex-col gap-9 justify-center items-start px-[100px]">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="rounded-[14px] bg-[var(--color-dark)] py-5 px-[35px] text-[var(--color-light)]">
            <p>Book a consultation</p>
          </button>
        </div>
        <div className="flex-1">
          <img src="/speaker.svg" alt="speaker" />
        </div>
      </section>

      <section className="md:hidden flex flex-col gap-[10px] justify-center items-start w-full mx-5">
        <h1>Navigating the digital landscape for success</h1>
        <img src="/speaker.svg" alt="speaker" />
        <p>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="rounded-[14px] bg-[var(--color-dark)] py-5 px-[35px] text-[var(--color-light)] w-full">
          <p>Book a consultation</p>
        </button>
      </section>
    </main>
  );
};

export default Hero;
