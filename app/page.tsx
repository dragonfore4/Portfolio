import Card from "@/components/card/Card";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
    return (

        <div className="bg-[#111111] min-h-screen w-full flex gap-10 px-20 relative pt-20">
            {/* LEFT SIDE */}
            <div className="hidden w-full lg:block lg:w-[350px] lg:h-[85vh] lg:sticky top-20 bottom-20  bg-[#161616] rounded-3xl border border-[#373737] p-8">
                <Card />
            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-2/3  flex flex-col">
                <Navbar />
                <HeroSection />
            </div>
        </div>
    );
}