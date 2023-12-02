import { Card } from "@/components/ui/card";
import Principal from "./principal";
import Container from "@/components/layout/container";

export default function IntroPage() {
  return (
    <>
      <section className="bg-zinc-300/60 dark:bg-secondary/40 my-4">
        <h3 className="text-2xl font-bold text-center px-4 py-16 md:py-24 md:text-3xl">
          跨尺度流體物理與計算實驗室
        </h3>
      </section>
      <Container>
        <section className="grid grid-cols-12">
          <Card className="px-2 py-4 col-span-12 md:col-span-12">
            <Principal />
          </Card>
        </section>
      </Container>
    </>
  );
}
