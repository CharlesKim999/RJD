import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-full flex-col items-center justify-between p-12">
      <h1>조만간 다른 기능도 추가할거에요</h1>
      <Link href="/quiz">
        <Button className="w-full">퀴즈 풀기</Button>
      </Link>
    </main>
  );
}
