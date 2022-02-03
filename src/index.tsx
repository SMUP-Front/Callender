import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Error from "./Error/Error";
import Callender from "./Components/Callender";
import Timetable from "./Components/Timetable";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="callender" element={<Callender />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
