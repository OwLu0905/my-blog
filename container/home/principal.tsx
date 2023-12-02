import Image from "next/image";
import React from "react";

const Principal = () => {
  return (
    <>
      <Image
        className="max-w-auto w-auto block"
        src="/home/PI.jpg"
        width={80}
        height={100}
        alt="PI"
      />
      <h2 className="text-primary font-bold my-2">Yi-Ju Chou</h2>
      <ul className="mb-2">
        <li>yjchouiam.ntu.edu.tw</li>
        <li>應用力學館410室</li>
        <li>跨尺度流體物理與計算實驗室</li>
      </ul>

      <h4 className="text-2xl font-bold">About Lab</h4>
      <article className="leading-8 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed delectus
        odio harum hic, quidem natus, asperiores iure ipsum doloremque inventore
        similique autem, totam sit eos assumenda id dolore quisquam perferendis.
      </article>
    </>
  );
};

export default Principal;
