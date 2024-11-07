import { useState } from "react";
import reactLogo from "src/assets/react.svg";
import { useFetchNlbRoutes, useFetchNlbStops } from "src/hooks/useFetchNlb";
import "./App.css";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
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

        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
