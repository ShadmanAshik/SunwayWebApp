import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";
// import validate from "./ValidateInfo";
// import useForm from "./useForm";
import axios from "axios";

const ContactForm = ({ }) => {
  // const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [checked,setchecked]=useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [phone, setphone] = useState("");
  const [counselingMode, setcounselingMode] = useState("")
  const [studyLevel, setstudyLevel] = useState("")
  const [country, setcountry] = useState("")

  const submitData=async()=>{
    let formField= new FormData()
    formField.append('fName', fName)
    formField.append('lName',lName)
    formField.append('email',email)
    formField.append('countryCode',countryCode)
    formField.append('phone',phone)
    formField.append('counselingMode',counselingMode)
    formField.append('studyLevel',studyLevel)
    formField.append('country',country)
    

    const headers = {
      'Content-Type': 'application/json',
      
    }
    
    axios.post('http://127.0.0.1:8000/contactformdata/', formField, {
        headers: headers
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    
  }
  

  return (
    <div className="container" id="formContiner">
      <div className="contact-form">
        <form className="card-form">
          <div className="contact-form-title">
            <h2>Interested in Studying Abroad with SSG?</h2>
            <p className="title-description">
              Just enter your details bellow And we'll reach you soon.
            </p>
          </div>
          <div className="input">
            <input
              id="fname"
              type="text"
              name="fname"
              className="input-field"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
              required
            />
            <label htmlFor="fname" className="input-label">
              First Name
            </label>
          </div>

          <div className="input">
            <input
              id="lname"
              type="text"
              name="lname"
              className="input-field"
              value={lName}
              onChange={(e) => setlName(e.target.value)}
              required
            />

            <label htmlFor="lname" className="input-label">
              Last Name
            </label>
          </div>

          <div className="input">
            <input
              id="email"
              type="email"
              name="email"
              className="input-field"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />

            <label htmlFor="email" className="input-label">
              Email
            </label>
            {/* {error.email && (
              <p data-tooltip="Invalid Email Address">{error.email}</p>
            )} */}
          </div>

          <div className="row">
            <div className="input col-5">
              <select
                id="CountryCode"
                type="text"
                name="CountryCode"
                className="input-field"
                value={countryCode}
                onChange={(e) => setcountryCode(e.target.value)}
                required
              >
                <option value=""></option>
                <option data-countryCode="DZ" value="213">
                  DZ (+213)
                </option>
                <option data-countryCode="AD" value="376">
                  AD (+376)
                </option>
                <option data-countryCode="AO" value="244">
                  AO (+244)
                </option>
                <option data-countryCode="AI" value="1264">
                  AI (+1264)
                </option>
                <option data-countryCode="AG" value="1268">
                  AG (+1268)
                </option>
                <option data-countryCode="AR" value="54">
                  AR (+54)
                </option>
                <option data-countryCode="AM" value="374">
                  AM (+374)
                </option>
                <option data-countryCode="AW" value="297">
                  AW (+297)
                </option>
                <option data-countryCode="AU" value="61">
                  AU (+61)
                </option>
                <option data-countryCode="AT" value="43">
                  AT (+43)
                </option>
                <option data-countryCode="AZ" value="994">
                  AZ (+994)
                </option>
                <option data-countryCode="BS" value="1242">
                  BS (+1242)
                </option>
                <option data-countryCode="BH" value="973">
                  BH (+973)
                </option>
                <option data-countryCode="BD" value="880">
                  BD (+880)
                </option>
                <option data-countryCode="BB" value="1246">
                  BB (+1246)
                </option>
                <option data-countryCode="BY" value="375">
                  BY (+375)
                </option>
                <option data-countryCode="BE" value="32">
                  BE (+32)
                </option>
                <option data-countryCode="BZ" value="501">
                  BZ (+501)
                </option>
                <option data-countryCode="BJ" value="229">
                  BJ (+229)
                </option>
                <option data-countryCode="BM" value="1441">
                  BM (+1441)
                </option>
                <option data-countryCode="BT" value="975">
                  BT (+975)
                </option>
                <option data-countryCode="BO" value="591">
                  BO (+591)
                </option>
                <option data-countryCode="BA" value="387">
                  BA (+387)
                </option>
                <option data-countryCode="BW" value="267">
                  BW (+267)
                </option>
                <option data-countryCode="BR" value="55">
                  BR (+55)
                </option>
                <option data-countryCode="BN" value="673">
                  BN (+673)
                </option>
                <option data-countryCode="BG" value="359">
                  BG (+359)
                </option>
                <option data-countryCode="BF" value="226">
                  BF (+226)
                </option>
                <option data-countryCode="BI" value="257">
                  BI (+257)
                </option>
                <option data-countryCode="KH" value="855">
                  KH (+855)
                </option>
                <option data-countryCode="CM" value="237">
                  CM (+237)
                </option>
                <option data-countryCode="CA" value="1">
                  CA (+1)
                </option>
                <option data-countryCode="CV" value="238">
                  CV (+238)
                </option>
                <option data-countryCode="KY" value="1345">
                  KY (+1345)
                </option>
                <option data-countryCode="CF" value="236">
                  CF (+236)
                </option>
                <option data-countryCode="CL" value="56">
                  CL (+56)
                </option>
                <option data-countryCode="CN" value="86">
                  CN (+86)
                </option>
                <option data-countryCode="CO" value="57">
                  CO (+57)
                </option>
                <option data-countryCode="KM" value="269">
                  KM (+269)
                </option>
                <option data-countryCode="CG" value="242">
                  CG (+242)
                </option>
                <option data-countryCode="CK" value="682">
                  CK (+682)
                </option>
                <option data-countryCode="CR" value="506">
                  CR (+506)
                </option>
                <option data-countryCode="HR" value="385">
                  HR (+385)
                </option>
                <option data-countryCode="CU" value="53">
                  CU (+53)
                </option>
                <option data-countryCode="CY" value="90392">
                  CYN (+90392)
                </option>
                <option data-countryCode="CY" value="357">
                  CYS (+357)
                </option>
                <option data-countryCode="CZ" value="42">
                  CZ (+42)
                </option>
                <option data-countryCode="DK" value="45">
                  DK (+45)
                </option>
                <option data-countryCode="DJ" value="253">
                  DJ (+253)
                </option>
                <option data-countryCode="DM" value="1809">
                  DM (+1809)
                </option>
                <option data-countryCode="DO" value="1809">
                  DO (+1809)
                </option>
                <option data-countryCode="EC" value="593">
                  EC (+593)
                </option>
                <option data-countryCode="EG" value="20">
                  EG (+20)
                </option>
                <option data-countryCode="SV" value="503">
                  SV (+503)
                </option>
                <option data-countryCode="GQ" value="240">
                  GQ (+240)
                </option>
                <option data-countryCode="ER" value="291">
                  ER (+291)
                </option>
                <option data-countryCode="EE" value="372">
                  EE (+372)
                </option>
                <option data-countryCode="ET" value="251">
                  ET (+251)
                </option>
                <option data-countryCode="FK" value="500">
                  FK (+500)
                </option>
                <option data-countryCode="FO" value="298">
                  FO (+298)
                </option>
                <option data-countryCode="FJ" value="679">
                  FJ (+679)
                </option>
                <option data-countryCode="FI" value="358">
                  FI (+358)
                </option>
                <option data-countryCode="FR" value="33">
                  FR (+33)
                </option>
                <option data-countryCode="GF" value="594">
                  GF (+594)
                </option>
                <option data-countryCode="PF" value="689">
                  PF (+689)
                </option>
                <option data-countryCode="GA" value="241">
                  GA (+241)
                </option>
                <option data-countryCode="GM" value="220">
                  GM (+220)
                </option>
                <option data-countryCode="GE" value="7880">
                  GE (+7880)
                </option>
                <option data-countryCode="DE" value="49">
                  DE (+49)
                </option>
                <option data-countryCode="GH" value="233">
                  GH (+233)
                </option>
                <option data-countryCode="GI" value="350">
                  GI (+350)
                </option>
                <option data-countryCode="GR" value="30">
                  GR (+30)
                </option>
                <option data-countryCode="GL" value="299">
                  GL (+299)
                </option>
                <option data-countryCode="GD" value="1473">
                  GD (+1473)
                </option>
                <option data-countryCode="GP" value="590">
                  GP (+590)
                </option>
                <option data-countryCode="GU" value="671">
                  GU (+671)
                </option>
                <option data-countryCode="GT" value="502">
                  GT (+502)
                </option>
                <option data-countryCode="GN" value="224">
                  GN (+224)
                </option>
                <option data-countryCode="GW" value="245">
                  GW - Bissau (+245)
                </option>
                <option data-countryCode="GY" value="592">
                  GY (+592)
                </option>
                <option data-countryCode="HT" value="509">
                  HT (+509)
                </option>
                <option data-countryCode="HN" value="504">
                  HN (+504)
                </option>
                <option data-countryCode="HK" value="852">
                  HK (+852)
                </option>
                <option data-countryCode="HU" value="36">
                  HU (+36)
                </option>
                <option data-countryCode="IS" value="354">
                  IS (+354)
                </option>
                <option data-countryCode="IN" value="91">
                  IN (+91)
                </option>
                <option data-countryCode="ID" value="62">
                  ID (+62)
                </option>
                <option data-countryCode="IR" value="98">
                  IR (+98)
                </option>
                <option data-countryCode="IQ" value="964">
                  IQ (+964)
                </option>
                <option data-countryCode="IE" value="353">
                  IE (+353)
                </option>
                <option data-countryCode="IL" value="972">
                  IL (+972)
                </option>
                <option data-countryCode="IT" value="39">
                  IT (+39)
                </option>
                <option data-countryCode="JM" value="1876">
                  JM (+1876)
                </option>
                <option data-countryCode="JP" value="81">
                  JP (+81)
                </option>
                <option data-countryCode="JO" value="962">
                  JO (+962)
                </option>
                <option data-countryCode="KZ" value="7">
                  KZ (+7)
                </option>
                <option data-countryCode="KE" value="254">
                  KE (+254)
                </option>
                <option data-countryCode="KI" value="686">
                  KI (+686)
                </option>
                <option data-countryCode="KP" value="850">
                  KP (+850)
                </option>
                <option data-countryCode="KR" value="82">
                  KR (+82)
                </option>
                <option data-countryCode="KW" value="965">
                  KW (+965)
                </option>
                <option data-countryCode="KG" value="996">
                  KG (+996)
                </option>
                <option data-countryCode="LA" value="856">
                  LA (+856)
                </option>
                <option data-countryCode="LV" value="371">
                  LV (+371)
                </option>
                <option data-countryCode="LB" value="961">
                  LB (+961)
                </option>
                <option data-countryCode="LS" value="266">
                  LS (+266)
                </option>
                <option data-countryCode="LR" value="231">
                  LR (+231)
                </option>
                <option data-countryCode="LY" value="218">
                  LY (+218)
                </option>
                <option data-countryCode="LI" value="417">
                  LI (+417)
                </option>
                <option data-countryCode="LT" value="370">
                  LT (+370)
                </option>
                <option data-countryCode="LU" value="352">
                  LU (+352)
                </option>
                <option data-countryCode="MO" value="853">
                  MO (+853)
                </option>
                <option data-countryCode="MK" value="389">
                  MK (+389)
                </option>
                <option data-countryCode="MG" value="261">
                  MG (+261)
                </option>
                <option data-countryCode="MW" value="265">
                  MW (+265)
                </option>
                <option data-countryCode="MY" value="60">
                  MY (+60)
                </option>
                <option data-countryCode="MV" value="960">
                  MV (+960)
                </option>
                <option data-countryCode="ML" value="223">
                  ML (+223)
                </option>
                <option data-countryCode="MT" value="356">
                  MT (+356)
                </option>
                <option data-countryCode="MH" value="692">
                  MH (+692)
                </option>
                <option data-countryCode="MQ" value="596">
                  MQ (+596)
                </option>
                <option data-countryCode="MR" value="222">
                  MR (+222)
                </option>
                <option data-countryCode="YT" value="269">
                  YT (+269)
                </option>
                <option data-countryCode="MX" value="52">
                  MX (+52)
                </option>
                <option data-countryCode="FM" value="691">
                  FM (+691)
                </option>
                <option data-countryCode="MD" value="373">
                  MD (+373)
                </option>
                <option data-countryCode="MC" value="377">
                  MC (+377)
                </option>
                <option data-countryCode="MN" value="976">
                  MN (+976)
                </option>
                <option data-countryCode="MS" value="1664">
                  MS (+1664)
                </option>
                <option data-countryCode="MA" value="212">
                  MA (+212)
                </option>
                <option data-countryCode="MZ" value="258">
                  MZ (+258)
                </option>
                <option data-countryCode="MN" value="95">
                  MN (+95)
                </option>
                <option data-countryCode="NA" value="264">
                  NA (+264)
                </option>
                <option data-countryCode="NR" value="674">
                  NR (+674)
                </option>
                <option data-countryCode="NP" value="977">
                  NP (+977)
                </option>
                <option data-countryCode="NL" value="31">
                  NL(+31)
                </option>
                <option data-countryCode="NC" value="687">
                  NC (+687)
                </option>
                <option data-countryCode="NZ" value="64">
                  NZ (+64)
                </option>
                <option data-countryCode="NI" value="505">
                  NI (+505)
                </option>
                <option data-countryCode="NE" value="227">
                  NE (+227)
                </option>
                <option data-countryCode="NG" value="234">
                  NG (+234)
                </option>
                <option data-countryCode="NU" value="683">
                  NU (+683)
                </option>
                <option data-countryCode="NF" value="672">
                  NF (+672)
                </option>
                <option data-countryCode="NP" value="670">
                  Northern NP (+670)
                </option>
                <option data-countryCode="NO" value="47">
                  NO (+47)
                </option>
                <option data-countryCode="OM" value="968">
                  OM (+968)
                </option>
                <option data-countryCode="PW" value="680">
                  PW (+680)
                </option>
                <option data-countryCode="PA" value="507">
                  PA (+507)
                </option>
                <option data-countryCode="PG" value="675">
                  PG (+675)
                </option>
                <option data-countryCode="PY" value="595">
                  PY (+595)
                </option>
                <option data-countryCode="PE" value="51">
                  PE (+51)
                </option>
                <option data-countryCode="PH" value="63">
                  PH (+63)
                </option>
                <option data-countryCode="PL" value="48">
                  PL (+48)
                </option>
                <option data-countryCode="PT" value="351">
                  PT (+351)
                </option>
                <option data-countryCode="PR" value="1787">
                  PR (+1787)
                </option>
                <option data-countryCode="QA" value="974">
                  QA (+974)
                </option>
                <option data-countryCode="RE" value="262">
                  RE (+262)
                </option>
                <option data-countryCode="RO" value="40">
                  RO (+40)
                </option>
                <option data-countryCode="RU" value="7">
                  RU (+7)
                </option>
                <option data-countryCode="RW" value="250">
                  RW (+250)
                </option>
                <option data-countryCode="SM" value="378">
                  SM(+378)
                </option>
                <option data-countryCode="ST" value="239">
                  ST &amp; Principe (+239)
                </option>
                <option data-countryCode="SA" value="966">
                  SA (+966)
                </option>
                <option data-countryCode="SN" value="221">
                  SN (+221)
                </option>
                <option data-countryCode="CS" value="381">
                  CS (+381)
                </option>
                <option data-countryCode="SC" value="248">
                  SC (+248)
                </option>
                <option data-countryCode="SL" value="232">
                  SL (+232)
                </option>
                <option data-countryCode="SG" value="65">
                  SG (+65)
                </option>
                <option data-countryCode="SK" value="421">
                  SK (+421)
                </option>
                <option data-countryCode="SI" value="386">
                  SI (+386)
                </option>
                <option data-countryCode="SB" value="677">
                  SB(+677)
                </option>
                <option data-countryCode="SO" value="252">
                  SO (+252)
                </option>
                <option data-countryCode="ZA" value="27">
                  ZA (+27)
                </option>
                <option data-countryCode="ES" value="34">
                  ES (+34)
                </option>
                <option data-countryCode="LK" value="94">
                  LK(+94)
                </option>
                <option data-countryCode="SH" value="290">
                  SH (+290)
                </option>
                <option data-countryCode="KN" value="1869">
                  KN (+1869)
                </option>
                <option data-countryCode="SC" value="1758">
                  SC (+1758)
                </option>
                <option data-countryCode="SD" value="249">
                  SD (+249)
                </option>
                <option data-countryCode="SR" value="597">
                  SR (+597)
                </option>
                <option data-countryCode="SZ" value="268">
                  SZ (+268)
                </option>
                <option data-countryCode="SE" value="46">
                  SE (+46)
                </option>
                <option data-countryCode="CH" value="41">
                  CH (+41)
                </option>
                <option data-countryCode="SI" value="963">
                  SI (+963)
                </option>
                <option data-countryCode="TW" value="886">
                  TW (+886)
                </option>
                <option data-countryCode="TJ" value="7">
                  TJ (+7)
                </option>
                <option data-countryCode="TH" value="66">
                  TH (+66)
                </option>
                <option data-countryCode="TG" value="228">
                  TG (+228)
                </option>
                <option data-countryCode="TO" value="676">
                  TO (+676)
                </option>
                <option data-countryCode="TT" value="1868">
                  TT (+1868)
                </option>
                <option data-countryCode="TN" value="216">
                  TN (+216)
                </option>
                <option data-countryCode="TR" value="90">
                  TR (+90)
                </option>
                <option data-countryCode="TM" value="7">
                  TM (+7)
                </option>
                <option data-countryCode="TM" value="993">
                  TM (+993)
                </option>
                <option data-countryCode="TC" value="1649">
                  TC (+1649)
                </option>
                <option data-countryCode="TV" value="688">
                  TV (+688)
                </option>
                <option data-countryCode="UG" value="256">
                  UG (+256)
                </option>
                <option data-countryCode="GB" value="44">
                  GB (+44)
                </option>
                <option data-countryCode="UA" value="380">
                  UA (+380)
                </option>
                <option data-countryCode="AE" value="971">
                  AE (+971)
                </option>
                <option data-countryCode="UY" value="598">
                  UY (+598)
                </option>
                <option data-countryCode="US" value="1">
                  US (+1)
                </option>
                <option data-countryCode="UZ" value="7">
                  UZ (+7)
                </option>
                <option data-countryCode="VU" value="678">
                  VU (+678)
                </option>
                <option data-countryCode="VA" value="379">
                  VA (+379)
                </option>
                <option data-countryCode="VE" value="58">
                  VE (+58)
                </option>
                <option data-countryCode="VN" value="84">
                  VN (+84)
                </option>
                <option data-countryCode="VG" value="84">
                  VG (+1284)
                </option>
                <option data-countryCode="VI" value="84">
                  VI (+1340)
                </option>
                <option data-countryCode="WF" value="681">
                  WF (+681)
                </option>
                <option data-countryCode="YE" value="969">
                  YE (+969)
                </option>
                <option data-countryCode="YE" value="967">
                  YE (+967)
                </option>
                <option data-countryCode="ZM" value="260">
                  ZM (+260)
                </option>
                <option data-countryCode="ZW" value="263">
                  ZW (+263)
                </option>
              </select>
              <label htmlFor="CountryCode" className="input-labelCountry">
                Country Code:
              </label>
            </div>
            <div className="input col-7">
              <input
                id="phoneno"
                type="tel"
                name="phoneno"
                className="input-field"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <label htmlFor="phoneno" className="input-label">
                Phone no.
              </label>
            </div>
          </div>

          <div className="input">
            <select
              id="counselMode"
              type="text"
              name="counselMode"
              className="input-field"
              value={counselingMode}
              onChange={(e) => setcounselingMode(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="In person">In Person</option>
              <option value="Virtual counselling">Virtual Counselling</option>
            </select>
            <label htmlFor="counselMode" className="input-label">
              Counselling Mode:
            </label>
          </div>

          <div className="input">
            <select
              id="Studylevel"
              type="text"
              name="studyLevel"
              className="input-field"
              value={studyLevel}
              onChange={(e) => setstudyLevel(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Doctor of Philosophy (PhD)">
                Doctor of Philosophy (PhD)
              </option>
              <option value="Master of Philosophy (MPhil)">
                Master of Philosophy (MPhil)
              </option>
              <option value="Post graduate">Post graduate</option>
              <option value="Post graduate diploma">
                Post graduate diploma
              </option>
              <option value="Under graduate">Under graduate</option>
              <option value="Admission preparation">
                Admission preparation
              </option>
              <option value="Language courses">Language courses</option>
              <option value="IELTS">IELTS</option>
            </select>
            <label htmlFor="Studylevel" className="input-label">
              Study Level:
            </label>
          </div>

          <div className="input">
            <select
              id="country"
              type="text"
              name="country"
              className="input-field"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Afganistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire">Bonaire</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Ter">
                British Indian Ocean Ter
              </option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Channel Islands">Channel Islands</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Island">Cocos Island</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote DIvoire">Cote DIvoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaco">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Ter">French Southern Ter</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea North">Korea North</option>
              <option value="Korea Sout">Korea South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Midway Islands">Midway Islands</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nambia">Nambia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherland Antilles">Netherland Antilles</option>
              <option value="Netherlands">Netherlands (Holland, Europe)</option>
              <option value="Nevis">Nevis</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau Island">Palau Island</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Phillipines">Philippines</option>
              <option value="Pitcairn Island">Pitcairn Island</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic of Montenegro">
                Republic of Montenegro
              </option>
              <option value="Republic of Serbia">Republic of Serbia</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="St Barthelemy">St Barthelemy</option>
              <option value="St Eustatius">St Eustatius</option>
              <option value="St Helena">St Helena</option>
              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Maarten">St Maarten</option>
              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
              <option value="St Vincent & Grenadines">
                St Vincent & Grenadines
              </option>
              <option value="Saipan">Saipan</option>
              <option value="Samoa">Samoa</option>
              <option value="Samoa American">Samoa American</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Erimates">United Arab Emirates</option>
              <option value="United States of America">
                United States of America
              </option>
              <option value="Uraguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State">Vatican City State</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (Brit)">
                Virgin Islands (Brit)
              </option>
              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
              <option value="Wake Island">Wake Island</option>
              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
              <option value="Yemen">Yemen</option>
              <option value="Zaire">Zaire</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <label htmlFor="country" className="input-label">
              Country:
            </label>
          </div>

          <div className="card-info">
            <input
              className="checkbox"
              type="checkbox"
              id="terms"
              onChange={(e) => setchecked(!checked)}
              value="agree"
              required
            />
            <label className="checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="action">
            <button className="action-button" type="submit" onClick={submitData}>
              Submit
            </button>           
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;