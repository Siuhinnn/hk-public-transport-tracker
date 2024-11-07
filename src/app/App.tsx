import { useFetchNlbRoutes, useFetchNlbStops } from "@/hooks/useFetchNlb";
import { useState } from "react";

function App() {
  const {
    data: routes,
    error: routesError,
    isLoading: isRoutesLoading,
    isError: isRoutesError,
    refetch: refetchRoutes,
  } = useFetchNlbRoutes();
  const [search, setSearch] = useState("");
  const {
    data: stops,
    error: stopsError,
    isLoading: isStopsLoading,
    isError: isStopsError,
    refetch: refetchStops,
  } = useFetchNlbStops(search);

  return (
    <>
      <div>
        <button onClick={() => refetchRoutes()}>Fetch all routes</button>
        {isRoutesLoading && <div>Loading...</div>}
        {isRoutesError && <div>Error: {routesError.message}</div>}
        <ul>
          {routes?.map((route) => (
            <li key={route.routeId}>{route.routeNo}</li>
          ))}
        </ul>
        <label>
          Search route:
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <button onClick={() => refetchStops()}>Search</button>
        {isStopsLoading && <div>Loading...</div>}
        {isStopsError && <div>Error: {stopsError.message}</div>}
        <ul>
          {stops?.map((stop) => (
            <li key={stop.stopId}>{stop.stopName_e}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
