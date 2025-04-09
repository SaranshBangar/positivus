import { Facebook, Linkedin, Twitter } from "lucide-react";
import LogoWithName from "./helper/LogoWithName";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Links } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-dark rounded-t-[45px] md:rounded-t-[45px] flex flex-col gap-[30px] md:gap-[50px] px-[20px] md:px-[60px] py-[30px] md:py-[55px] max-md:mx-[-20px]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-6 md:gap-0">
        <LogoWithName textColor="light" />
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 items-center">
          {Links.map((item) => (
            <a href={item.link} key={item.title}>
              <p className="text-light underline">{item.title}</p>
            </a>
          ))}
        </div>
        <div className="flex gap-5 items-center mt-4 md:mt-0">
          <Linkedin className="size-[30px] text-dark rounded-full bg-light p-[6px]" />
          <Facebook className="size-[30px] text-dark rounded-full bg-light p-[6px]" />
          <Twitter className="size-[30px] text-dark rounded-full bg-light p-[6px]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        <div className="flex flex-col gap-5 max-md:w-full text-center">
          <h4 className="bg-accent rounded-[7px] w-fit px-[7px] py-1 max-md:w-full text-center">Contact us:</h4>
          <p className="text-light">Email: info@positivus.com</p>
          <p className="text-light">Phone: 555-567-8901</p>
          <p className="text-light">
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        <div className="bg-[#292A32] flex flex-col md:flex-row w-full md:w-[634px] py-[30px] md:py-[60px] px-5 md:px-10 gap-5 rounded-[14px]">
          <Input
            className="border-[var(--color-light)] h-[67px] text-[16px] md:text-[18px] placeholder:text-[16px] md:placeholder:text-[18px] text-light flex-1"
            placeholder="Email"
          />
          <button className="bg-accent text-dark px-[20px] md:px-[35px] py-3 md:py-5 rounded-[7px] whitespace-nowrap">
            <p>Subscribe to news</p>
          </button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center text-light text-sm md:text-base">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="/" className="underline">
          <p>Privacy Policy</p>
        </a>
      </div>

      <Separator className="md:hidden" />
    </footer>
  );
};

export default Footer;
