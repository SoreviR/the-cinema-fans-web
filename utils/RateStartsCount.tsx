import { RiTriangleFill, RiTriangleLine } from "react-icons/ri";

export const startsCount = (cardRate: number) => {
  let starts = [];
  for (let i = 0; i < cardRate / 2; i++) {
    starts.push(<RiTriangleFill />);
  }
  if (cardRate < 10) {
    for (let i = cardRate / 2; i < 10 / 2; i++) {
      starts.push(<RiTriangleLine />);
    }
  }
  return starts;
};
