import { ArrowDown, ClassicIcon, TimeIcon, ZoomOutIcon } from "@root/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import React, { useEffect, useState } from "react";

const ClassicSection = ({ dashboardMockData }: any) => {
  const { push } = useRouter();
  const { isAuthenticated } = useAuth();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const nextDrawTime = new Date("2023-12-31T12:00:00");
    const now = new Date();
    const difference = nextDrawTime.getTime() - now.getTime();
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours}:${minutes}:${seconds}`;
  }
  const playHanlder = () => {
    !isAuthenticated
      ? push("/auth/login")
      : enqueueSnackbar("You can play Lottery", {
          variant: "success",
        });
  };
  return (
    <div className=" bg-secondary/25 p-4 rounded-[8px] space-y-2">
      <div className="flex items-center justify-between">
        <Image src={ClassicIcon} alt="" />
        <h4>{dashboardMockData?.classicData?.id}</h4>
        <Image src={ZoomOutIcon} alt="" />
      </div>
      <div className=" py-3 space-y-1">
        {dashboardMockData?.classicPool?.classicPool.map(
          ({ id, value, amount }: any, index: number) => (
            <div className="flex justify-between items-center text-f14">
              <h1>{id}</h1>
              <h1 className="text-secondary font-semibold">{value}</h1>
              <h1>{amount}</h1>
            </div>
          )
        )}
      </div>
      <div className="flex justify-between items-center bg-secondary text-white p-2">
        <div className="flex space-x-10 items-center">
          <h1>Next Draw</h1>
          <div className="flex space-x-2">
            <Image src={TimeIcon} alt="" />
            <h1 className="text-f20">{timeLeft}</h1>
          </div>
        </div>
        <button
          className="text-secondary h-fit bg-white rounded-[4px] w-[100px] py-1"
          onClick={playHanlder}
        >
          Play
        </button>
      </div>
      <button className="border-0 my-2 text-gray-700 flex items-center space-x-3 m-auto">
        <span className="pr-2">
          <Image src={ArrowDown} alt="" />
        </span>
        Current Pool Status
      </button>
    </div>
  );
};

export default ClassicSection;
