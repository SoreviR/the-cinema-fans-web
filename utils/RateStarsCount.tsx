import { RiTriangleFill, RiTriangleLine } from "react-icons/ri";
import EmptyPopcorn from "@/public/images/popcorn_empty.png";
import FillPopcorn from "@/public/images/popcorn_fill.png";
import Image from "next/image";

export const starsCount = (cardRate: number) => {
  let starts = [];
  for (let i = 0; i < cardRate / 2; i++) {
    starts.push(
      <Image src={FillPopcorn} alt="filled popcorn" width={15} height={15} />
    );
  }
  if (cardRate < 10) {
    for (let i = cardRate / 2; i < 10 / 2; i++) {
      starts.push(
        <Image src={EmptyPopcorn} alt="empty popcorn" width={15} height={15} />
      );
    }
  }
  return starts;
};
