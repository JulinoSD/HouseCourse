// import { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
import Map from "src/components/map";
// import HouseList from "src/components/houseList";
// import { useLastData } from "src/utils/useLastData";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery, HousesQueryVariables } from "src/generated/HousesQuery";

export default function Home() {
  return <Layout main={
    <div className="flex">
      <div
        className="w-1/3 pb-4"
        style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}>
        House list
        </div>
      <div className="w-2/3">
        <Map />
      </div>
    </div>}
  />
}