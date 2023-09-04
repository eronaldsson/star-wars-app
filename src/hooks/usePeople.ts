import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface People {
    name: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    starships: string[];
  }
  
interface FecthPeopleList {
    count: number;
    results: People[];
}

const usePeople = () => {
  const [people, setPeople] = useState<People[]>([]);
  const [peopleError, setPeopleError] = useState("");
    
  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<FecthPeopleList>("/people", {signal: controller.signal})
        .then((res) => setPeople(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setPeopleError(err.message)});
    return () => controller.abort();
}, []);

  return {people, peopleError};
}

export default usePeople