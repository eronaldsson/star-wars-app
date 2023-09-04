import { useContext, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { AppContext } from "../context/AppContext";

interface FecthStarshipsList {
  name: string;
  model: string;
  manufacturer: string;
}

const useStarships = () => {
  const [starships, setStarships] = useState<FecthStarshipsList>();
  const [starshipError, setStarshipError] = useState("");
  const { starshipURL } = useContext(AppContext);
    
  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<FecthStarshipsList>(starshipURL, {signal: controller.signal})
        .then((res) => setStarships(res.data))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setStarshipError(err.message)});
    return () => controller.abort();
}, []);

  return {starships, starshipError};
}

export default useStarships