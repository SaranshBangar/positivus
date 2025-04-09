import LogoWithName from "./helper/LogoWithName";

const HeaderLinks = [
  { name: "About us", path: "/" },
  { name: "Services", path: "/" },
  { name: "Use Cases", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Blog", path: "/" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-[60px] mb-[70px] px-[100px]">
      <div>
        <LogoWithName />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10">
          {HeaderLinks.map((link) => (
            <a key={link.name} href={link.path}>
              <p>{link.name}</p>
            </a>
          ))}
        </ul>
        <button className="rounded-[14px] border-[var(--color-dark)] border-[1px] py-5 px-[35px]">
          <p>Request a quote</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
