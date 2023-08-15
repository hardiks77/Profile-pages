import { createContext, useState } from "react";

const AppContext = createContext({
  personList: [],
  setPersonList: () => {},
  currentPerson: {},
  setCurrentPerson: () => {},
});

export function AppContextProvider(props) {
  const [personList, setPersonList] = useState([]);
  const [currentPerson, setCurrentPerson] = useState();

  const context = {
    personList: personList,
    setPersonList: setPersonList,
    currentPerson: currentPerson,
    setCurrentPerson: setCurrentPerson,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
