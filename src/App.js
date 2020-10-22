import React from "react";
import MyInfo from "./components/MyInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToDo from "./components/ToDO";
import Quiz from "./components/Quiz";
import DateComponent from "./components/Date";
import Login from "./components/Login";
import PureComp from "./components/PureComp";
import MemoComp from "./components/MemoComp";
import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <DateComponent />
      <MyInfo />
      <br />
      <br />
      <br />
      <br />
      <ToDo />
      <br />
      <br />
      <Quiz />
      <br />
      <br />
      <br />
      <br />
      <Login />
      <PureComp />
      <MemoComp />
      <PortalDemo />

      <Footer />
    </div>
  );
}

export default App;
