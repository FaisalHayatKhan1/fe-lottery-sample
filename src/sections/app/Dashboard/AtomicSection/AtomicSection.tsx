import React, { useEffect, useState } from "react";
import { ArrowDown, AtomicIcon, TimeIcon, ZoomIcon } from "@root/assets";
import Image from "next/image";
import { poolStatusData } from "../mockData";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";
import { enqueueSnackbar } from "notistack";

const AtomicSection = ({ dashboardMockData }: any) => {
  const [show, setShow] = React.useState(true);
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
    <div className=" bg-greenIconic/25 p-4 rounded-[8px] space-y-2">
      <div className="flex items-center justify-between">
        <Image src={AtomicIcon} alt="" />
        <h4>No. 2302131</h4>
        <Image src={ZoomIcon} alt="" />
      </div>
      <div className="flex space-x-3 items-center">
        {dashboardMockData?.atomicData?.atomicPool?.map(
          ({ value }: any, index: number) => (
            <div
              key={index}
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[22px] font-semibold bg-greenIconic text-white"
            >
              {value}
            </div>
          )
        )}
      </div>
      <div className="flex justify-between">
        <h1 className="text-f14">Winning Pot</h1>
        <h1 className="text-f24 font-bold">
          980,934,368,172 <span className="text-f12 font-normal">LUCKI</span>
        </h1>
      </div>
      <div className="flex justify-between items-center bg-greenIconic text-white p-2">
        <div className="flex space-x-10 items-center">
          <h1>Next Draw</h1>
          <div className="flex space-x-2">
            <Image src={TimeIcon} alt="" />
            <h1 className="text-f20">{timeLeft}</h1>
          </div>
        </div>
        <button
          className="text-greenIconic h-fit bg-white rounded-[4px] w-[100px] py-1"
          onClick={playHanlder}
        >
          Play
        </button>
      </div>
      {show && (
        <div className="">
          <h1 className="text-f14">Current Pool Status</h1>
          {poolStatusData?.map(({ img, name }, index: number) => (
            <div className="flex items-center justify-between">
              <Image src={img} alt="" />
              <h1 className="text-f16 font-normal">{name}</h1>
            </div>
          ))}
        </div>
      )}
      <button
        className="border-0 my-2 text-gray-700 flex items-center space-x-3 m-auto"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className={`pr-2`}>
          <Image src={ArrowDown} alt="" className={show ? " rotate-180" : ""} />
        </span>
        {show ? "Close" : "Current Pool Status"}
      </button>
    </div>
  );
};

export default AtomicSection;
