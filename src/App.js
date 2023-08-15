import "./App.css";
import ProfileList from "./components/ProfileList";
import { AppContextProvider } from "./components/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSelection from "./components/PageSelection/PageSelection";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<ProfileList />} />
            <Route exact path="/pages" element={<PageSelection />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
