import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

export default function App() {
  const [resume, setResume] = useState({});
  // const [loading, setLoading] = useState(true);

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResume(data);

        // setLoading(false);
        // console.log(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  };

  useEffect(() => {
    getResumeData();
  }, []);

  // if (loading) {
  //   return (
  //     <div
  //       style={{ display: "flex", justifyContent: "center", marginTop: "50vh" }}
  //       className="load-container"
  //     >
  //       <div id="loading"></div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="App">
      <Header data={resume.main} />
      <About data={resume.main} />
      <Resume data={resume.resume} />
      <Portfolio data={resume.portfolio} />
      <Testimonials data={resume.testimonials} />
      <Contact data={resume.main} />
      <Footer data={resume.main} />
    </div>
  );
  // }
}
