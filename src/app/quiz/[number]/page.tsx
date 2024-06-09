import { dataFetching } from "@/lib/data";
import { getRandomProblem, shuffle } from "@/lib/utils";
import { Suspense } from "react";
import Buttons from "./Components/Buttons";

type Props = {
  params: {
    number: string;
  };
};

const OPTION_COUNT = 5;

function getOptions(exp: string) {
  const options = [exp];
  while (options.length < OPTION_COUNT) {
    const option = getRandomProblem();
    if (option !== exp) {
      options.push(`${option}`);
    }
  }
  return options;
}

const Page = async ({ params }: Props) => {
  const { data } = await dataFetching();
  if (!data?.[params.number]) {
    return <div>ERROR</div>;
  }
  const { word, mean } = data[params.number];
  const options = getOptions(params.number);
  const shuffledOpt = shuffle(options);
  const shuffledData = shuffledOpt.map((opt) => data[opt]);
  return (
    <Suspense>
      <div className="flex flex-1 min-h-full flex-col justify-center items-center">
        <span className="text-9xl">{word}</span>
        <div className="w-2/3">
          <Buttons data={shuffledData} answer={parseInt(params.number)} />
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
