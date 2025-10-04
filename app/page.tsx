import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { AuroraText } from "@/components/ui/aurora-text";
import { BackgroundLines } from "@/components/blocks/background-lines";

export default function Home() {
  return (
    <>
      <Navbar />

      <BackgroundLines>
        <div className="flex justify-center items-center flex-col h-full">
          <h1 className="text-4xl font-bold mb-6 text-center leading-relaxed">
            <AuroraText>Premium</AuroraText> goods <br /> at affordable prices.
          </h1>
          <p className="text-center mb-1">🌏 Based in Bangladesh. </p>
          <p> 🏠 Home delivery available.</p>
        </div>
      </BackgroundLines>

      <Footer />
    </>
  );
}
