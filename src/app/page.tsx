import { Hero } from "./components/hero/hero";
import { Main } from "./components/main/main";

export default function Home() {
  return (
    <div className="">
      <h1>Home Page</h1>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
        </div>
      </div>
      <Main />
    </div>
  );
}
