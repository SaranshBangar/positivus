const ServiceUI = [
  {
    title1: "Search engine",
    title2: "optimization",
    "title-bg": "bg-[var(--color-accent)]",
    image: "/services/seo.svg",
    bg: "bg-[var(--color-light)]",
  },
  {
    title1: "Pay-per-click",
    title2: "advertising",
    "title-bg": "bg-[var(--color-light)]",
    image: "/services/ppc-advertising.svg",
    bg: "bg-[var(--color-accent)]",
  },
];

const Services = () => {
  return (
    <main className="md:px-[100px] px-5">
      <section className="hidden md:block space-y-[80px]">
        <div className="flex items-center gap-10">
          <h2 className="bg-[var(--color-accent)] rounded-[7px] w-fit px-[7px]">Services</h2>
          <p className="w-[580px]">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="flex items-center gap-10">
          {ServiceUI.map((service) => (
            <div
              className={`flex flex-1 items-center justify-between gap-5 ${service.bg} rounded-[45px] p-[50px] border-[var(--color-dark)] border-[1px] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.9)]`}
            >
              <div className="flex flex-col gap-[93px]">
                <div className={`flex flex-col items-start justify-center`}>
                  <h3 className={`text-[var(--color-dark)] rounded-[7px] ${service["title-bg"]} px-[7px]`}>{service.title1}</h3>
                  <h3 className={`text-[var(--color-dark)] rounded-[7px] w-fit ${service["title-bg"]} px-[7px]`}>{service.title2}</h3>
                </div>
                <div className="flex items-center gap-[15px]">
                  <a href="/">
                    <img src="/service-circle.svg" alt="service-circle" className="size-10" />
                  </a>
                  <p>Learn more</p>
                </div>
              </div>
              <img src={service.image} className="w-[210px] h-[166.05px]" />
            </div>
          ))}
        </div>
      </section>

      <section className="md:hidden flex flex-col items-center gap-10">
        <h2 className="bg-[var(--color-accent)] rounded-[7px] w-fit px-[7px]">Services</h2>
        <p className="w-[580px]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>

        <div className="flex flex-col items-center gap-10">
          {ServiceUI.map((service) => (
            <div
              className={`flex flex-col justify-start items-start gap-5 ${service.bg} rounded-[45px] p-[50px] border-[var(--color-dark)] border-[1px] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.9)]`}
            >
              <div className={`flex flex-col items-start justify-center`}>
                <h3 className={`text-[var(--color-dark)] rounded-[7px] ${service["title-bg"]} px-[7px]`}>{service.title1}</h3>
                <h3 className={`text-[var(--color-dark)] rounded-[7px] w-fit ${service["title-bg"]} px-[7px]`}>{service.title2}</h3>
              </div>
              <div className="flex items-end justify-between">
                <a href="/">
                  <img src="/service-circle.svg" alt="service-circle" className="size-10" />
                </a>
                <img src={service.image} className="w-[165px] h-[129px]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
