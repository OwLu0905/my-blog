import { Card } from "@/components/ui/card";
import Principal from "./principal";
import Container from "@/components/layout/container";

export default function IntroPage() {
  return (
    <>
      <section className="my-4 bg-foreground/10 ">
        <h3 className="px-2 py-16 text-center text-xl font-bold sm:text-2xl md:py-24 md:text-3xl">
          跨尺度流體物理與計算實驗室
        </h3>
      </section>
      {/* 
      <Container>
        <section className="grid grid-cols-12">
          <Card className="col-span-12 px-2 py-4 md:col-span-12">
            <Principal /> 
          </Card>
        </section>
      </Container>
            */}
    </>
  );
}
