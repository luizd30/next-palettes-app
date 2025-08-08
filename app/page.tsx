import { LeftMainSection } from "@/components/LeftMainSection";
import { RightMainSection } from "@/components/RightMainSection";

export default function Home() {
  return (
    <div className="font-sans p-4 grid grid-rows-1 grid-cols-1 gap-4 lg:grid-cols-5 items-center justify-items-center min-h-screen">
      <LeftMainSection />
      <RightMainSection />
    </div>
  );
}
