import React from "react";
import { dashboardMockData } from "./mockData";
import { useGetLotteryQuery } from "@root/services/getLottery";
import LoadingComponent from "@root/components/Loading";
import CommonSection from "./CommonCard/CommonCard";
const Dashboard = () => {
  const { data: cosmicData, isLoading: cosmicLoading } =
    useGetLotteryQuery("COSMIC");

  // Query for CLASSIC
  const { data: classicData, isLoading: classicLoading } =
    useGetLotteryQuery("CLASSIC");

  // Query for ATOMIC
  const { data: atomicData, isLoading: atomicLoading } =
    useGetLotteryQuery("ATOMIC");

  if (cosmicLoading || classicLoading || atomicLoading)
    return <LoadingComponent primaryLoading />;

  return (
    <div className="w-full p-8 space-y-8">
      {/* card section */}
      <h1 className=" font-bold text-f20">Latest Results</h1>
      <CommonSection type="COSMIC" apiData={cosmicData} />
      <CommonSection type="CLASSIC" apiData={classicData} />
      <CommonSection type="ATOMIC" apiData={atomicData} />
    </div>
  );
};

export default Dashboard;
