"use client";
import { Button } from "@/components/ui/button";
import { getRandomProblem } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const RandomLink = (props: Props) => {
  const [randomProblem, setRandomProblem] = useState<string | null>(null);
  useEffect(() => {
    setRandomProblem(getRandomProblem());
    console.log(randomProblem);
  }, []);
  return (
    <Link href={`/quiz/${randomProblem}`}>
      <Button>랜덤 퀴즈 시작하기</Button>
    </Link>
  );
};

export default RandomLink;
