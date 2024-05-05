import Entry from "./home";
import SectionTwo from "./sectionTwo";

export default function Home() {
  return (
    <div className="w-full">
      <Entry />
      <div className={`w-full flex justify-center mx-auto relative z-0`}>
        <div className="w-[80%]  mb-20 mt-16 lg:block hidden">
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}
