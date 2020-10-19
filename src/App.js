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

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResume(data);
        console.log(data);
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
}
