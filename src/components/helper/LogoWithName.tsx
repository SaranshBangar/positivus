const LogoWithName = ({ textColor }: { textColor?: string }) => {
  return (
    <div className="flex items-center gap-[12.92px]">
      <img src="/logo.svg" alt="logo" className="size-9" />
      <h4 className={textColor === "light" ? "text-light" : "text-dark"}>Positivus</h4>
    </div>
  );
};

export default LogoWithName;
