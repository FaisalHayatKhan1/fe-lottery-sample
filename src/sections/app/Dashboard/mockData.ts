import {
  PoolStatusFour,
  PoolStatusOne,
  PoolStatusThre,
  PoolStatusTwo,
} from "@root/assets";

export const dashboardMockData = {
  cosmicData: {
    id: "2302131",
    cosmicPool: [
      { value: "15", winning: false },
      { value: "23", winning: false },
      { value: "30", winning: false },
      { value: "43", winning: false },
      { value: "61", winning: false },
      { value: "6", winning: true },
    ],
    winningPot: "980,934,368,172",
  },
  classicData: {
    id: "Past 5 Results",
    classicPool: [
      {
        id: "2302123",
        value: "99 99 99 99 99 99 99",
        amount: "14,934,000,000",
      },
      {
        id: "2302120",
        value: "99 99 99 99 99 99 99",
        amount: "14,934,000,000",
      },
      {
        id: "230213",
        value: "99 99 99 99 99 99 99",
        amount: "14,934,000,000",
      },
      {
        id: "2302122",
        value: "99 99 99 99 99 99 99",
        amount: "14,934,000,000",
      },
      {
        id: "2302156",
        value: "99 99 99 99 99 99 99",
        amount: "14,934,000,000",
      },
    ],
    winningPot: "980,934,368,172",
  },
  atomicData: {
    id: "2302131",
    atomicPool: [
      { value: "0", winning: false },
      { value: "6", winning: false },
      { value: "4", winning: false },
      { value: "1", winning: false },
    ],
    winningPot: "4,753,122",
  },
};
export const poolStatusData = [
  { img: PoolStatusOne, name: "4,651.8062 INAE" },
  { img: PoolStatusTwo, name: "61.8062 BTC" },
  { img: PoolStatusThre, name: "131.4941 ETH" },
  { img: PoolStatusFour, name: "661.8789 SOL" },
  { img: PoolStatusThre, name: "131.4941 ETH" },
  { img: PoolStatusTwo, name: "61.8062 BTC" },
];
