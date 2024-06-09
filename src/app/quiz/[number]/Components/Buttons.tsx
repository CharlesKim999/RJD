"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Quiz } from "@/lib/data";
import Link from "next/link";
import { getRandomProblem } from "@/lib/utils";

type Props = {
  data: Quiz[];
  answer: number;
};

const Buttons = (props: Props) => {
  const { data, answer } = props;
  const [isError, setIsError] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [buttonVariants, setButtonVariants] = useState<
    Record<number, "secondary" | "wrong" | "correct">
  >(
    Array.from({ length: 6 }, (_, i) => i).reduce((acc, curr) => {
      acc[curr] = "secondary";
      return acc;
    }, {} as Record<number, "secondary" | "wrong" | "correct">)
  );

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const handleClick = (index: number, input: number) => {
    if (selected !== null) {
      return;
    }
    const GSAP_X = 3;
    const buttonRef = buttonRefs.current[index];
    if (buttonRef) {
      setSelected(index);
      setButtonVariants((prev) => {
        return {
          ...prev,
          [index]: input === props.answer ? "correct" : "wrong",
        };
      });
      data.forEach((item, i) => {
        if (item.id === props.answer) {
          setButtonVariants((prev) => {
            return {
              ...prev,
              [i]: "correct",
            };
          });
        }
      });

      if (input === props.answer) {
        // 정답일 경우
        gsap.fromTo(
          buttonRef,
          { y: 0 },
          {
            y: -GSAP_X,
            duration: 0.1,
            yoyo: true,
            repeat: 3,
          }
        );
      } else {
        // 오답일 경우
        gsap.to(buttonRef, {
          keyframes: [
            { x: -GSAP_X, duration: 0.1 },
            { x: GSAP_X, duration: 0.1 },
            { x: -GSAP_X, duration: 0.1 },
            { x: GSAP_X, duration: 0.1 },
            { x: 0, duration: 0.1 },
          ],
        });
      }
    }
  };

  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li className="flex" key={index}>
            <Button
              className="w-full mt-2"
              variant={buttonVariants[index]}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => handleClick(index, item.id)}
            >
              {item.mean}
            </Button>
          </li>
        );
      })}
      <Link href={`/quiz/${getRandomProblem()}`}>
        <Button disabled={selected === null} className="w-full mt-10">
          다음
        </Button>
      </Link>
    </ul>
  );
};

export default Buttons;
