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
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import AdmissionApplications from "./Components/Pages/Admin/FormData/AdmissionApplications";
import AgentData from "./Components/Pages/Admin/FormData/AgentData";
import CommonData from "./Components/Pages/Admin/FormData/CommonData";
import ContactData from "./Components/Pages/Admin/FormData/ContactData";
import LanguageFormData from "./Components/Pages/Admin/FormData/LanguageFormData";
import ScholarshipFormData from "./Components/Pages/Admin/FormData/ScholarshipFormData";
import SkillFormData from "./Components/Pages/Admin/FormData/SkillFormData";
import TuitionsData from "./Components/Pages/Admin/FormData/TuitionsData";
import TutorData from "./Components/Pages/Admin/FormData/TutorData";
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

const base_url="http://127.0.0.1:8000/";
// const base_url="/";
const App = ()=> {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Sticky enabled={true} top={0} bottomBoundary={12000} innerZ={20}>
          <Header />
        </Sticky>
        <Routes>        
          <Route exact path="/" element={<Home base_url={base_url}/>} />
          <Route exact path="/agentHomePage" element={<Home base_url={base_url}/>} />
          <Route exact path="/studentHomePage" element={<Home base_url={base_url}/>} />
          <Route exact path="/home" element={<Home base_url={base_url}/>} />
          <Route exact path="/about" element={<AboutUS base_url={base_url}/>} />
          <Route exact path="/whyssg" element={<WhySSG base_url={base_url}/>} />
          <Route exact path="/contact" element={<ContactUs base_url={base_url}/>} />
          <Route exact path="/mission" element={<Mission base_url={base_url}/>} />
          <Route exact path="/ourteam" element={<OurTeam base_url={base_url}/>} />
          <Route exact path="/policy" element={<Policy base_url={base_url}/>} />
          <Route exact path="/login" element={<LoginAndSignup base_url={base_url} />} />
          <Route exact path="/overseas" element={<Overseas base_url={base_url}/>} />
          <Route exact path="/language" element={<Language base_url={base_url}/>} />
          <Route exact path="/skilldev" element={<SkillDevelopment base_url={base_url} />} />
          <Route exact path="/tuition" element={<Tuition base_url={base_url}/>} />
          <Route exact path="/agent" element={<Agent base_url={base_url}/>} />
          <Route exact path="/advocacy" element={<Advocacy base_url={base_url}/>} />
          <Route exact path="/studentCounseling" element={<Counseling base_url={base_url}/>} />
          <Route
            exact
            path="/applicationProcessing"
            element={<ApplicationProcessing base_url={base_url}/>}
          />
          <Route exact path="/visaApplication" element={<VisaApplication base_url={base_url}/>} />
          <Route
            exact
            path="/scholarshipSupport"
            element={<ScholarshipSupport base_url={base_url}/>}
          />
          <Route
            exact
            path="/admissionSupport"
            element={<AdmissionSupoort base_url={base_url}/>}
          />
          <Route exact path="/studyTour" element={<StudyTour base_url={base_url}/>} />
          <Route exact path="/BDUni" element={<BangladeshUniversity base_url={base_url}/>} />
          <Route exact path="/GUni" element={<GlobalUniversity base_url={base_url}/>} />
          <Route
            exact
            path="/WebDesignAndDevelopment"
            element={<WebDesignAndDevelopment base_url={base_url}/>}
          />
          <Route
            exact path="/ProfessionalGraphicDesign"
            element={<ProfessionalGraphicDesign base_url={base_url}/>}
          />
          <Route exact path="/LanguageCourses" element={<LanguageCourses base_url={base_url}/>} />
          <Route exact path="/IELTSPreparation" element={<IELTSPreparation base_url={base_url}/>} />
          <Route exact path="/EnglishSpoken" element={<EnglishSpoken base_url={base_url}/>} />
          <Route exact path="/DigitalMarketing" element={<DigitalMarketing base_url={base_url}/>} />
          <Route
            exact path="/CommunicativeEnglish"
            element={<CommunicativeEnglish base_url={base_url}/>}
          />
          <Route exact path="/AcademicEnglish" element={<AcademicEnglish base_url={base_url}/>} />
          <Route exact path="/Testimonial" element={<Testimonial base_url={base_url}/>} />
          <Route exact path="/VideoGallery" element={<VideoGallery base_url={base_url}/>} />
          <Route exact path="/PhotoGallery" element={<PhotoGallery base_url={base_url}/>} />
          <Route exact path="/Events" element={<Events base_url={base_url}/>} />
          <Route exact path="/Offer" element={<Offer base_url={base_url}/>} />
          <Route exact path="/News" element={<News base_url={base_url}/>} />
          <Route exact path="/Blog" element={<Blog base_url={base_url}/>} />
          <Route exact path="AdmissionForm" element={<Application base_url={base_url}/>} />
          <Route exact path="/ScholarshipForm" element={<ApplyScholarship base_url={base_url}/>} />
          <Route exact path="/adminDashboard" element={<AdminDashboard base_url={base_url}/>}>
            {/* <Route path="commonFormData" element={<CommonData base_url={base_url}/>} /> */}
            
            {/* <Route exact path="formData" element={<TableNav base_url={base_url}/>}> */}
              <Route index element={<CommonData base_url={base_url}/>} />
              <Route path="contactUsData" element={<ContactData base_url={base_url}/>} />
              <Route path="agentData" element={<AgentData base_url={base_url}/>} />
              <Route path="languageFormData" element={<LanguageFormData base_url={base_url} />} />
              <Route path="skillFormData" element={<SkillFormData base_url={base_url}/>} />
              <Route path="tutorData" element={<TutorData base_url={base_url}/>} />
              <Route path="tuitionData" element={<TuitionsData base_url={base_url}/>} />
              <Route path="scholarshipFormData" element={<ScholarshipFormData base_url={base_url}/>} />
              <Route path="admissionFormData" element={<AdmissionApplications base_url={base_url}/>} />           
            {/* </Route>            */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <MessengerCustomerChat pageId="103946112131280" appId="714278166202341" />
    </div>
  );
}

export default App;