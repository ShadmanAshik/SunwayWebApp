import "bootstrap/dist/css/bootstrap.min.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sticky from "react-stickynode";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUS from "./Components/Pages/AboutUs/AboutUS";
import ContactUs from "./Components/Pages/AboutUs/ContactUs";
import Mission from "./Components/Pages/AboutUs/Mission";
import OurTeam from "./Components/Pages/AboutUs/OurTeam";
import Policy from "./Components/Pages/AboutUs/Policy";
import WhySSG from "./Components/Pages/AboutUs/WhySSG";
import Admin from "./Components/Pages/Admin/Admin";
import AgentData from "./Components/Pages/Admin/Components/AgentData";
import ContactData from "./Components/Pages/Admin/Components/ContactData";
import Agent from "./Components/Pages/Agent/Agent";
import Application from "./Components/Pages/Apply/AdmissionApplicationForm/Application";
import ApplyScholarship from "./Components/Pages/Apply/ScholarshipApplicationForm/ApplyScholarship";
import AcademicEnglish from "./Components/Pages/Courses/AcademicEnglish";
import CommunicativeEnglish from "./Components/Pages/Courses/CommunicativeEnglish";
import DigitalMarketing from "./Components/Pages/Courses/DigitalMarketing";
import EnglishSpoken from "./Components/Pages/Courses/EnglishSpoken";
import IELTSPreparation from "./Components/Pages/Courses/IELTSPreparation";
import LanguageCourses from "./Components/Pages/Courses/LanguageCourses";
import ProfessionalGraphicDesign from "./Components/Pages/Courses/ProfessionalGraphicDesign";
import WebDesignAndDevelopment from "./Components/Pages/Courses/WebDesignAndDevelopment";
import Home from "./Components/Pages/Home/Home";
import LoginAndSignup from "./Components/Pages/LoginandSignup/LoginAndSignup";
import Blog from "./Components/Pages/NewsAndMedia/Blog";
import Events from "./Components/Pages/NewsAndMedia/Events";
import News from "./Components/Pages/NewsAndMedia/News";
import Offer from "./Components/Pages/NewsAndMedia/Offer";
import PhotoGallery from "./Components/Pages/NewsAndMedia/PhotoGallery";
import Testimonial from "./Components/Pages/NewsAndMedia/Testimonial";
import VideoGallery from "./Components/Pages/NewsAndMedia/VideoGallery";
import Language from "./Components/Pages/Programs/Language";
import Overseas from "./Components/Pages/Programs/Overseas";
import SkillDevelopment from "./Components/Pages/Programs/SkillDevelopment";
import Tuition from "./Components/Pages/Programs/Tuition";
import AdmissionSupoort from "./Components/Pages/Services/AdmissionSupoort";
import Advocacy from "./Components/Pages/Services/Advocacy";
import ApplicationProcessing from "./Components/Pages/Services/ApplicationProcessing";
import Counseling from "./Components/Pages/Services/Counselling";
import ScholarshipSupport from "./Components/Pages/Services/ScholarshipSupport";
import StudyTour from "./Components/Pages/Services/StudyTour";
import VisaApplication from "./Components/Pages/Services/VisaApplication";
import BangladeshUniversity from "./Components/Pages/University/BangladeshUniversity";
import GlobalUniversity from "./Components/Pages/University/GlobalUniversity";
import Snippets from "./Components/Snippet/Snippets";

function App() {
  const base_url="http://127.0.0.1:8000";
  return (
    <div className="App">
      <BrowserRouter>
        <Sticky enabled={true} top={0} bottomBoundary={12000} innerZ={20}>
          <Header />
        </Sticky>
        <Routes>
        studentHomePage
          <Route exact path="/" element={<Home />} />
          <Route exact path="/agentHomePage" element={<Home />} />
          <Route exact path="/studentHomePage" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutUS />} />
          <Route exact path="/whyssg" element={<WhySSG />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/login" element={<LoginAndSignup base_url={base_url} />} />
          <Route exact path="/overseas" element={<Overseas />} />
          <Route exact path="/language" element={<Language />} />
          <Route exact path="/skilldev" element={<SkillDevelopment />} />
          <Route exact path="/tuition" element={<Tuition />} />
          <Route exact path="/agent" element={<Agent />} />
          <Route exact path="/advocacy" element={<Advocacy />} />

          <Route exact path="/studentCounseling" element={<Counseling />} />
          <Route
            exact
            path="/applicationProcessing"
            element={<ApplicationProcessing />}
          />
          <Route exact path="/visaApplication" element={<VisaApplication />} />
          <Route
            exact
            path="/scholarshipSupport"
            element={<ScholarshipSupport />}
          />
          <Route
            exact
            path="/admissionSupport"
            element={<AdmissionSupoort />}
          />
          <Route exact path="/studyTour" element={<StudyTour />} />

          <Route exact path="/BDUni" element={<BangladeshUniversity />} />
          <Route exact path="/GUni" element={<GlobalUniversity />} />
          <Route
            exact
            path="/WebDesignAndDevelopment"
            element={<WebDesignAndDevelopment />}
          />
          <Route
            exact
            path="/ProfessionalGraphicDesign"
            element={<ProfessionalGraphicDesign />}
          />
          <Route exact path="/LanguageCourses" element={<LanguageCourses />} />
          <Route exact path="/IELTSPreparation" element={<IELTSPreparation />} />
          <Route exact path="/EnglishSpoken" element={<EnglishSpoken />} />
          <Route exact path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            exact
            path="/CommunicativeEnglish"
            element={<CommunicativeEnglish />}
          />
          <Route exact path="/AcademicEnglish" element={<AcademicEnglish />} />
          <Route exact path="/Testimonial" element={<Testimonial />} />
          <Route exact path="/VideoGallery" element={<VideoGallery />} />
          <Route exact path="/PhotoGallery" element={<PhotoGallery />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Offer" element={<Offer />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="AdmissionForm" element={<Application />} />
          <Route exact path="/ScholarshipForm" element={<ApplyScholarship />} />

          <Route exact path="adminDashboard" element={<Admin />}>
            <Route path="contactUsData" element={<ContactData />} />
            <Route path="agentData" element={<AgentData />} />
            <Route path="snippets" element={<Snippets />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
      <MessengerCustomerChat pageId="103946112131280" appId="714278166202341" />
    </div>
  );
}

export default App;