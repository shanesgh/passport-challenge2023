import dynamic from "next/dynamic";
import React from "react";

function DynamicMap() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../components/locations/LocationMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
}

export default DynamicMap;
