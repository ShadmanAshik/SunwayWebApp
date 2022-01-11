import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TutorRegForm.css";
// import validate from "./ValidateInfo";
// import useForm from "./useForm";
import axios from "axios";

const TutorRegForm = ({}) => {
  // const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [checked, setchecked] = useState(false);
  const [email, setemail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [city, setcity] = useState("");
  const [degreeobtained, setdegreeobtained] = useState("");
  const [EducationOrganization, setEducationOrganization] = useState("");
  const [EducationBackground, setEducationBackground] = useState("");
  const [gender, setgender] = useState("");
  const [tuitionarea, settuitionarea] = useState("");
  const [membertype, setmembertype] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const submitData = async () => {
    let formField = new FormData();

    formField.append("email", email);
    formField.append("countryCode", countryCode);
    formField.append("phone", phone);
    formField.append("address", address);
    formField.append("fName", fName);
    formField.append("lName", lName);
    formField.append("city", city);

    formField.append("degreeobtained", degreeobtained);
    formField.append("EducationOrganization", EducationOrganization);
    formField.append("EducationBackground", EducationBackground);
    formField.append("gender", gender);
    formField.append("tuitionarea", tuitionarea);
    formField.append("membertype", membertype);
    formField.append("password", password);
    formField.append("confirmpassword", confirmpassword);

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://127.0.0.1:8000/contactformdata/", formField, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" id="TutorReg-formContiner">
      <div className="TutorReg-form">
        <form className="TutorReg-card-form">
          <div className="TutorReg-form-title">
            <h2>Become a Tutor.</h2>
            <p className="TutorReg-title-description">
              Just enter your details below And we'll reach you soon.
            </p>
          </div>
          <div className="row">
            <div className="skilldev-input col-6">
              <input
                id="fname"
                type="text"
                name="fname"
                className="skilldev-input-field"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
                required
              />
              <label htmlFor="fname" className="TutorReg-input-labelrow">
                First Name
              </label>
            </div>

            <div className="skilldev-input col-6">
              <input
                id="lname"
                type="text"
                name="lname"
                className="skilldev-input-field"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
                required
              />
              <label htmlFor="lname" className="TutorReg-input-label">
                Last Name
              </label>
            </div>
          </div>

          <div className="row">
            <div className="TutorReg-input col-5">
              <select
                id="CountryCode"
                type="text"
                name="CountryCode"
                className="TutorReg-input-field"
                value={countryCode}
                onChange={(e) => setcountryCode(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="N/A">N/A</option>
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
              <label htmlFor="CountryCode" className="TutorReg-input-labelrow">
                Country Code:
              </label>
            </div>
            <div className="TutorReg-input col-7">
              <input
                id="phoneno"
                type="tel"
                name="phoneno"
                className="TutorReg-input-field"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <label htmlFor="phoneno" className="TutorReg-input-label">
                Phone no.
              </label>
            </div>
          </div>

          <div className="TutorReg-input">
            <input
              id="email"
              type="email"
              name="email"
              className="TutorReg-input-field"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <label htmlFor="email" className="TutorReg-input-label">
              Email
            </label>
          </div>

          <div className="row">
            <div className="TutorReg-input col-7">
              <input
                id="address"
                type="text"
                name="address"
                className="TutorReg-input-field"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                required
              />
              <label htmlFor="address" className="TutorReg-input-labelrow">
                Address:
              </label>
            </div>

            <div className="TutorReg-input col-5">
              <select
                id="city"
                type="text"
                name="city"
                className="HireTutor-input-field"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="Barishal">Barishal</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
              <label htmlFor="city" className="TutorReg-input-label">
                City
              </label>
            </div>
          </div>

          <div className="TutorReg-input">
            <select
              id="degreeobtained"
              type="text"
              name="degreeobtained"
              className="HireTutor-input-field"
              value={degreeobtained}
              onChange={(e) => setdegreeobtained(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="O-Levels">O-Levels</option>
              <option value="A-Levels">A-Levels</option>
              <option value="Honors">Honors</option>
              <option value="Masters">Masters</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="degreeobtained" className="TutorReg-input-label">
              Last Degree Obtained
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="EducationOrganization"
              type="text"
              name="EducationOrganization"
              className="TutorReg-input-field"
              value={EducationOrganization}
              onChange={(e) => setEducationOrganization(e.target.value)}
              required
            />
            <label
              htmlFor="EducationOrganization"
              className="TutorReg-input-label"
            >
              Last Education Organization Name:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="EducationBackground"
              type="text"
              name="EducationBackground"
              className="TutorReg-input-field"
              value={EducationBackground}
              onChange={(e) => setEducationBackground(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Bengali Version">Bengali Version</option>
              <option value="English Version">English Version</option>
              <option value="English Medium">English Medium</option>
              <option value="British Curriculuman">British Curriculum</option>
              <option value="American Curriculum">American Curriculum</option>
            </select>
            <label htmlFor="EducationBackground" className="TutorReg-input-label">
              Educational Background:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="gender"
              type="text"
              name="gender"
              className="TutorReg-input-field"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>

            </select>
            <label htmlFor="gender" className="TutorReg-input-label">
              Gender:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="tuitionarea"
              type="text"
              name="tuitionarea"
              className="TutorReg-input-field"
              value={tuitionarea}
              onChange={(e) => settuitionarea(e.target.value)}
              required
            />
            <label
              htmlFor="tuitionarea"
              className="TutorReg-input-label"
            >
              Expected Tuition Area:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="membertype"
              type="text"
              name="membertype"
              className="TutorReg-input-field"
              value={membertype}
              onChange={(e) => setmembertype(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>

            </select>
            <label htmlFor="membertype" className="TutorReg-input-label">
              Member Type:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="password"
              type="text"
              name="password"
              className="TutorReg-input-field"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="TutorReg-input-label"
            >
              Password:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              style={password===confirmpassword ? {backgroundColor:"#ffffff00"}:{backgroundColor:"#f700003b"}}
              id="confirmpassword"
              type="text"
              name="confirmpassword"
              className="TutorReg-input-field"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              required
            />
            <label
              htmlFor="confirmpassword"
              className="TutorReg-input-label"
            >
              Confirm Password:
            </label>
          </div>

          <div className="TutorReg-card-info">
            <input
              className="TutorReg-checkbox"
              type="checkbox"
              id="terms"
              onChange={(e) => setchecked(!checked)}
              value="agree"
              required
            />
            <label className="TutorReg-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>


          <div className="TutorReg-action row">
            <button
              disabled={password===confirmpassword ? false : true}
              className="TutorReg-action-button"
              type="submit"
              onClick={submitData}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TutorRegForm;
