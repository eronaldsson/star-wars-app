import { useContext, useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { AppContext } from "../context/AppContext";

interface FecthPlanetsList {
  name: string;
  rotation_period: string;
  population: string;
}

const usePlanets = () => {
  const [planets, setPlanets] = useState<FecthPlanetsList>();
  const [planetError, setPlanetError] = useState("");
  const { planetURL } = useContext(AppContext);

  useEffect(() => {
      const controller = new AbortController();
  
      axios.get<FecthPlanetsList>(planetURL, {signal: controller.signal})
          .then((res) => setPlanets(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setPlanetError(err.message)});
      return () => controller.abort();
  }, [])

  return { planets, planetError };
}

export default usePlanets