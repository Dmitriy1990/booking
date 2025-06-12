import logo from "@/assets/icons/logo-w.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Home Page</h1>
      <Image src={logo} width={134} height={36} alt="travila" priority />
    </div>
  );
}
