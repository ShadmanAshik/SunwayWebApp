import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import AboutUS from "./Components/Pages/AboutUs/AboutUS";
import Overseas from "./Components/Pages/Programs/Overseas";
import Language from "./Components/Pages/Programs/Language";
import SkillDev from "./Components/Pages/Programs/SkillDevelopment";
import BDUni from "./Components/Pages/University/BangladeshUniversity";
import GUni from "./Components/Pages/University/GlobalUniversity";
import WebDesignAndDevelopment from "./Components/Pages/Courses/WebDesignAndDevelopment";
import ProfessionalGraphicDesign from "./Components/Pages/Courses/ProfessionalGraphicDesign";
import LanguageCourses from "./Components/Pages/Courses/LanguageCourses";
import IELTSPreparation from "./Components/Pages/Courses/IELTSPreparation";
import EnglishSpoken from "./Components/Pages/Courses/EnglishSpoken";
import DigitalMarketing from "./Components/Pages/Courses/DigitalMarketing";
import CommunicativeEnglish from "./Components/Pages/Courses/CommunicativeEnglish";
import AcademicEnglish from "./Components/Pages/Courses/AcademicEnglish";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Pages/NewsAndMedia/Testimonial";
import VideoGallery from "./Components/Pages/NewsAndMedia/VideoGallery";
import PhotoGallery from "./Components/Pages/NewsAndMedia/PhotoGallery";
import Events from "./Components/Pages/NewsAndMedia/Events";
import Offer from "./Components/Pages/NewsAndMedia/Offer";
import News from "./Components/Pages/NewsAndMedia/News";
import Blog from "./Components/Pages/NewsAndMedia/Blog";
import WhySSG from "./Components/Pages/AboutUs/WhySSG";
import Mission from "./Components/Pages/AboutUs/Mission";
import OurTeam from "./Components/Pages/AboutUs/OurTeam";
import Policy from "./Components/Pages/AboutUs/Policy";
import ContactUs from "./Components/Pages/AboutUs/ContactUs";
import LoginAndSignup from "./Components/Pages/LoginandSignup/LoginAndSignup";
import Application from "./Components/Pages/Apply/AdmissionApplicationForm/Application";
import ApplyScholarship from "./Components/Pages/Apply/ScholarshipApplicationForm/ApplyScholarship";

function Compiled() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutUS />} />
          <Route exact path="/whyssg" element={<WhySSG />} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<LoginAndSignup />} />
          <Route exact path="/overseas" element={<Overseas />} />
          <Route exact path="/language" element={<Language />} />
          <Route exact path="/skilldev" element={<SkillDev />} />
          <Route exact path="/BDUni" element={<BDUni />} />
          <Route exact path="/GUni" element={<GUni />} />
          <Route
            exact
            path="/WebDesignAndDevelopment"
            element={<WebDesignAndDevelopment />}
          />
          <Route
            exact
            path="ProfessionalGraphicDesign"
            element={<ProfessionalGraphicDesign />}
          />
          <Route exact path="LanguageCourses" element={<LanguageCourses />} />
          <Route exact path="IELTSPreparation" element={<IELTSPreparation />} />
          <Route exact path="EnglishSpoken" element={<EnglishSpoken />} />
          <Route exact path="DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            exact
            path="CommunicativeEnglish"
            element={<CommunicativeEnglish />}
          />
          <Route exact path="AcademicEnglish" element={<AcademicEnglish />} />
          <Route exact path="Testimonial" element={<Testimonial />} />
          <Route exact path="VideoGallery" element={<VideoGallery />} />
          <Route exact path="PhotoGallery" element={<PhotoGallery />} />
          <Route exact path="Events" element={<Events />} />
          <Route exact path="Offer" element={<Offer />} />
          <Route exact path="News" element={<News />} />
          <Route exact path="Blog" element={<Blog />} />
          <Route exact path="AdmissionForm" element={<Application />} />
          <Route exact path="ScholarshipForm" element={<ApplyScholarship />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Compiled;
