import { Route, Routes } from "react-router-dom";
import { Suspense, createContext, lazy, useContext, useState } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "../../redux/store";
const Details = lazy(() => import("../common/Details/Details"));
const Home = lazy(() => import("../common/Home/Home"));
const StudentContext = createContext({});

// hook
export const useStudentContext = () => useContext(StudentContext);
function App() {
  const [student, setSelectedStudent] = useState({});
  return (
    <div className="App">
      <Provider store={store}>
        {/* <StudentContext.Provider value={{ student, setSelectedStudent }}> */}
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<h1>Loading ..</h1>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={<h1>Loading ..</h1>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/details"
              element={
                <Suspense fallback={<h1>Loading ..</h1>}>
                  <Details />
                </Suspense>
              }
            />
          </Routes>
        {/* </StudentContext.Provider> */}
      </Provider>
    </div>
  );
}

export default App;