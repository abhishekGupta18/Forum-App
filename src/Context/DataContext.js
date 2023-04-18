import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../FakeFetch";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/questions");
      setInfo(response.data.questions);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider value={{ info }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
