import React from "react";
import { dashboardMockData } from "./mockData";
import CosmicSection from "./CosmicSection/CosmicSection";
import ClassicSection from "./ClassicSection/ClassicSection";
import AtomicSection from "./AtomicSection/AtomicSection";

const Dashboard = () => {
  return (
    <div className="w-full p-8 space-y-8">
      {/* card section */}
      <h1 className=" font-bold text-f20">Latest Results</h1>
      <CosmicSection dashboardMockData={dashboardMockData}/>
      <ClassicSection dashboardMockData={dashboardMockData}/>
      <AtomicSection dashboardMockData={dashboardMockData}/>
    </div>
  );
};

export default Dashboard;
