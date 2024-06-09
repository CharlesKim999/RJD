import { dataURL } from "@/constants/urls";

export type Quiz = {
  word: string;
  mean: string;
  id: number;
};
export async function dataFetching() {
  try {
    const data1 = (await fetch(dataURL.rjd1).then((response) =>
      response.json()
    )) as Quiz[];
    const data2 = (await fetch(dataURL.rjd2).then((response) =>
      response.json()
    )) as Quiz[];
    const mergedData = [...data1, ...data2];
    const handledData = mergedData.reduce<Record<string, Quiz>>((acc, cur) => {
      acc[cur.id] = { word: cur.word, mean: cur.mean, id: cur.id };
      return acc;
    }, {});

    return { status: "success", data: handledData };
  } catch (err) {
    return { status: "error", message: err };
  }
}
