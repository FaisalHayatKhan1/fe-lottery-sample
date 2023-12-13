import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  AtomicIcon,
  TimeIcon,
  ZoomIcon,
  ZoomOutIcon,
} from "@root/assets";
import Image from "next/image";
import { poolStatusData } from "../mockData";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";
import { enqueueSnackbar } from "notistack";
import { format } from "date-fns";

const CommonSection = ({ apiData, type }: any) => {
  const { data } = apiData;
  const [show, setShow] = React.useState(false);
  const [zoom, setZoom] = React.useState(false);
  const { push } = useRouter();
  const { isAuthenticated } = useAuth();
  const [timeLeft, setTimeLeft] = useState<any>(data?.nextDraw);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime: any) => prevTime - 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const playHanlder = () => {
    !isAuthenticated
      ? push("/auth/login")
      : enqueueSnackbar("You can play Lottery", {
          variant: "success",
        });
  };

  return (
    <div
      className={`${
        type === "COSMIC"
          ? "bg-primary/25"
          : type === "CLASSIC"
          ? "bg-secondary/25"
          : "bg-greenIconic/25"
      }  p-4 rounded-[8px] space-y-2`}
    >
      <div className="flex items-center justify-between">
        <h1
          className={`${
            type === "COSMIC"
              ? "text-primary"
              : type === "CLASSIC"
              ? "text-secondary"
              : "text-greenIconic"
          } font-bold tracking-wider `}
        >
          {data?.lotteryName ?? "_"}
        </h1>
        <h4>{zoom ? "Past 5 Results" : `No. ${data?.roundNumber}`}</h4>
        <div className=" cursor-pointer" onClick={() => setZoom(!zoom)}>
          <Image src={zoom ? ZoomOutIcon : ZoomIcon} alt="zoom_img" />
        </div>
      </div>
      {zoom ? (
        <div className=" py-3 space-y-1">
          {[
            "2302123",
            "2302123",
            "2302123",
            "2302123",
            "2302123",
            "2302123",
          ].map((id: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center text-f14"
            >
              <h1>{id}</h1>
              <h1
                className={`${
                  type === "COSMIC"
                    ? "text-primary"
                    : type === "CLASSIC"
                    ? "text-secondary"
                    : "text-greenIconic"
                } font-semibold`}
              >
                99 99 99 99 99 99
              </h1>
              <h1>14,934,000,000</h1>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex space-x-3 items-center">
          {data?.previousWinningticket?.map((data: number, index: number) => (
            <div
              key={index}
              className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-[22px] font-semibold ${
                type === "COSMIC"
                  ? "bg-primary"
                  : type === "CLASSIC"
                  ? "bg-secondary"
                  : "bg-greenIconic"
              } text-white`}
            >
              {data}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <h1 className="text-f14">Winning Pot</h1>
        <h1 className="text-f24 font-bold">
          {data?.winningPot ?? "_"}{" "}
          <span className="text-f12 font-normal">LUCKI</span>
        </h1>
      </div>
      <div
        className={`flex justify-between items-center ${
          type === "COSMIC"
            ? "bg-primary"
            : type === "CLASSIC"
            ? "bg-secondary"
            : "bg-greenIconic"
        } text-white p-2`}
      >
        <div className="flex space-x-10 items-center">
          <h1>Next Draw</h1>
          <div className="flex space-x-2">
            <Image src={TimeIcon} alt="" />
            <h1 className="text-f20">
              {format(new Date(0).setSeconds(timeLeft), "HH:mm:ss")}
            </h1>
          </div>
        </div>
        <button
          className={`${
            type === "COSMIC"
              ? "text-primary"
              : type === "CLASSIC"
              ? "text-secondary"
              : "text-greenIconic"
          }  h-fit bg-white rounded-[4px] w-[100px] py-1`}
          onClick={playHanlder}
        >
          Play
        </button>
      </div>
      {show && (
        <div className="">
          <h1 className="text-f14">Current Pool Status</h1>
          {data?.poolAmount &&
            data?.poolAmount?.map(
              ({ coinName, coinSymbol, coinId, poolAmount }: any) => (
                <div key={coinId} className="flex items-center justify-between">
                  <h1>{coinName}</h1>
                  <h1 className="text-f16 font-normal">
                    {poolAmount} <span>{coinSymbol}</span>
                  </h1>
                </div>
              )
            )}
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

export default CommonSection;
