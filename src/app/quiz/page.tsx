import { Button } from "@/components/ui/button";
import { dataFetching } from "@/lib/data";
import { getRandomProblem } from "@/lib/utils";
import Link from "next/link";
import React, { Suspense } from "react";
import RandomLink from "./components/RandomLink";

const page = async () => {
  const { data } = await dataFetching();
  const newProb = getRandomProblem();
  if (!data) {
    return <div>ERROR</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col flex-1 justify-between items-center">
        <div>퀴즈 시작하기</div>
        <RandomLink />
      </div>
    </Suspense>
  );
};

export default page;
