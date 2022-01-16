import PhoneInput from "react-phone-input-2";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicationForm.css";
// import validate from "./ValidateInfo";
// import useForm from "./useForm";
import axios from "axios";

const ApplicationForm = ({}) => {
  // const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [count, setCount] = useState(1);
  const [checked, setchecked] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [phone, setphone] = useState("");
  const [language, setlanguage] = useState("");
  const [demo, setdemo] = useState("");
  const [country, setcountry] = useState("");

  function decrement() {
    setCount((prevCount) => prevCount - 1);
    if (count == 1) setCount(1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
    if (count == 5) setCount(5);
  }

  const submitData = async () => {
    let formField = new FormData();
    formField.append("fName", fName);
    formField.append("lName", lName);
    formField.append("email", email);
    formField.append("countryCode", countryCode);
    formField.append("phone", phone);
    formField.append("language", language);
    formField.append("demo", demo);
    formField.append("country", country);

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
    <div className="container" id="Application-formContiner">
      <div className="Application-form">
        <form className="Application-card-form">
          <div className="Application-form-title">
            <h2>Application Form</h2>
            <p className="Application-title-description">
              Fill out the required information for applying for a degree.
            </p>
          </div>

          <div
            className="Application-input col-6"
            style={{ margin: "0px auto" }}
          >
            <input
              id="agentphoto"
              type="file"
              name="agentphoto"
              className="Application-input-field-file"
              value={demo}
              onChange={(e) => setdemo(e.target.value)}
              accept="image/png, image/jpeg"
              required
            />
            <label
              htmlFor="agentphoto"
              className="Application-input-label-file"
            >
              Upload your passport-sized photo.
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                id="fname"
                type="text"
                name="fname"
                className="Application-input-field"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
                required
              />
              <label htmlFor="fname" className="Application-input-labelrow">
                First Name
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="lname"
                type="text"
                name="lname"
                className="Application-input-field"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
                required
              />
              <label htmlFor="lname" className="Application-input-label">
                Last Name
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                id="phone"
                placeholder=""
                type="tel"
                value={phone}
                onChange={setphone}
                enableSearch
                specialLabel="Phone:"
                countryCodeEditable={false}
                country=" "
                disableSearchIcon={false}
              />
            </div>

            <div className="Application-input col-6">
              <input
                id="email"
                type="email"
                name="email"
                className="Application-input-field"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <label htmlFor="email" className="Application-input-label">
                Email
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                id="passportno"
                type="text"
                name="passportno"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
                required
              />
              <label
                htmlFor="passportno"
                className="Application-input-labelrow"
              >
                Passport Number
              </label>
            </div>
            <div className="Application-input col-6">
              <label
                htmlFor="passportExpireDate"
                className="Application-input-label-date"
              >
                Passport Expire Date
              </label>
              <input
                id="passportExpireDate"
                type="date"
                name="passportExpireDate"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <select
                id="country"
                type="text"
                name="country"
                className="Application-input-field"
                value={country}
                required
                onChange={(e) => setcountry(e.target.value)}
              >
                <option value=""></option>
                <option value="afghan">Afghan</option>
                <option value="albanian">Albanian</option>
                <option value="algerian">Algerian</option>
                <option value="american">American</option>
                <option value="andorran">Andorran</option>
                <option value="angolan">Angolan</option>
                <option value="antiguans">Antiguans</option>
                <option value="argentinean">Argentinean</option>
                <option value="armenian">Armenian</option>
                <option value="australian">Australian</option>
                <option value="austrian">Austrian</option>
                <option value="azerbaijani">Azerbaijani</option>
                <option value="bahamian">Bahamian</option>
                <option value="bahraini">Bahraini</option>
                <option value="bangladeshi">Bangladeshi</option>
                <option value="barbadian">Barbadian</option>
                <option value="barbudans">Barbudans</option>
                <option value="batswana">Batswana</option>
                <option value="belarusian">Belarusian</option>
                <option value="belgian">Belgian</option>
                <option value="belizean">Belizean</option>
                <option value="beninese">Beninese</option>
                <option value="bhutanese">Bhutanese</option>
                <option value="bolivian">Bolivian</option>
                <option value="bosnian">Bosnian</option>
                <option value="brazilian">Brazilian</option>
                <option value="british">British</option>
                <option value="bruneian">Bruneian</option>
                <option value="bulgarian">Bulgarian</option>
                <option value="burkinabe">Burkinabe</option>
                <option value="burmese">Burmese</option>
                <option value="burundian">Burundian</option>
                <option value="cambodian">Cambodian</option>
                <option value="cameroonian">Cameroonian</option>
                <option value="canadian">Canadian</option>
                <option value="cape verdean">Cape Verdean</option>
                <option value="central african">Central African</option>
                <option value="chadian">Chadian</option>
                <option value="chilean">Chilean</option>
                <option value="chinese">Chinese</option>
                <option value="colombian">Colombian</option>
                <option value="comoran">Comoran</option>
                <option value="congolese">Congolese</option>
                <option value="costa rican">Costa Rican</option>
                <option value="croatian">Croatian</option>
                <option value="cuban">Cuban</option>
                <option value="cypriot">Cypriot</option>
                <option value="czech">Czech</option>
                <option value="danish">Danish</option>
                <option value="djibouti">Djibouti</option>
                <option value="dominican">Dominican</option>
                <option value="dutch">Dutch</option>
                <option value="east timorese">East Timorese</option>
                <option value="ecuadorean">Ecuadorean</option>
                <option value="egyptian">Egyptian</option>
                <option value="emirian">Emirian</option>
                <option value="equatorial guinean">Equatorial Guinean</option>
                <option value="eritrean">Eritrean</option>
                <option value="estonian">Estonian</option>
                <option value="ethiopian">Ethiopian</option>
                <option value="fijian">Fijian</option>
                <option value="filipino">Filipino</option>
                <option value="finnish">Finnish</option>
                <option value="french">French</option>
                <option value="gabonese">Gabonese</option>
                <option value="gambian">Gambian</option>
                <option value="georgian">Georgian</option>
                <option value="german">German</option>
                <option value="ghanaian">Ghanaian</option>
                <option value="greek">Greek</option>
                <option value="grenadian">Grenadian</option>
                <option value="guatemalan">Guatemalan</option>
                <option value="guinea-bissauan">Guinea-Bissauan</option>
                <option value="guinean">Guinean</option>
                <option value="guyanese">Guyanese</option>
                <option value="haitian">Haitian</option>
                <option value="herzegovinian">Herzegovinian</option>
                <option value="honduran">Honduran</option>
                <option value="hungarian">Hungarian</option>
                <option value="icelander">Icelander</option>
                <option value="indian">Indian</option>
                <option value="indonesian">Indonesian</option>
                <option value="iranian">Iranian</option>
                <option value="iraqi">Iraqi</option>
                <option value="irish">Irish</option>
                <option value="israeli">Israeli</option>
                <option value="italian">Italian</option>
                <option value="ivorian">Ivorian</option>
                <option value="jamaican">Jamaican</option>
                <option value="japanese">Japanese</option>
                <option value="jordanian">Jordanian</option>
                <option value="kazakhstani">Kazakhstani</option>
                <option value="kenyan">Kenyan</option>
                <option value="kittian and nevisian">
                  Kittian and Nevisian
                </option>
                <option value="kuwaiti">Kuwaiti</option>
                <option value="kyrgyz">Kyrgyz</option>
                <option value="laotian">Laotian</option>
                <option value="latvian">Latvian</option>
                <option value="lebanese">Lebanese</option>
                <option value="liberian">Liberian</option>
                <option value="libyan">Libyan</option>
                <option value="liechtensteiner">Liechtensteiner</option>
                <option value="lithuanian">Lithuanian</option>
                <option value="luxembourger">Luxembourger</option>
                <option value="macedonian">Macedonian</option>
                <option value="malagasy">Malagasy</option>
                <option value="malawian">Malawian</option>
                <option value="malaysian">Malaysian</option>
                <option value="maldivan">Maldivan</option>
                <option value="malian">Malian</option>
                <option value="maltese">Maltese</option>
                <option value="marshallese">Marshallese</option>
                <option value="mauritanian">Mauritanian</option>
                <option value="mauritian">Mauritian</option>
                <option value="mexican">Mexican</option>
                <option value="micronesian">Micronesian</option>
                <option value="moldovan">Moldovan</option>
                <option value="monacan">Monacan</option>
                <option value="mongolian">Mongolian</option>
                <option value="moroccan">Moroccan</option>
                <option value="mosotho">Mosotho</option>
                <option value="motswana">Motswana</option>
                <option value="mozambican">Mozambican</option>
                <option value="namibian">Namibian</option>
                <option value="nauruan">Nauruan</option>
                <option value="nepalese">Nepalese</option>
                <option value="new zealander">New Zealander</option>
                <option value="ni-vanuatu">Ni-Vanuatu</option>
                <option value="nicaraguan">Nicaraguan</option>
                <option value="nigerien">Nigerien</option>
                <option value="north korean">North Korean</option>
                <option value="northern irish">Northern Irish</option>
                <option value="norwegian">Norwegian</option>
                <option value="omani">Omani</option>
                <option value="pakistani">Pakistani</option>
                <option value="palauan">Palauan</option>
                <option value="panamanian">Panamanian</option>
                <option value="papua new guinean">Papua New Guinean</option>
                <option value="paraguayan">Paraguayan</option>
                <option value="peruvian">Peruvian</option>
                <option value="polish">Polish</option>
                <option value="portuguese">Portuguese</option>
                <option value="qatari">Qatari</option>
                <option value="romanian">Romanian</option>
                <option value="russian">Russian</option>
                <option value="rwandan">Rwandan</option>
                <option value="saint lucian">Saint Lucian</option>
                <option value="salvadoran">Salvadoran</option>
                <option value="samoan">Samoan</option>
                <option value="san marinese">San Marinese</option>
                <option value="sao tomean">Sao Tomean</option>
                <option value="saudi">Saudi</option>
                <option value="scottish">Scottish</option>
                <option value="senegalese">Senegalese</option>
                <option value="serbian">Serbian</option>
                <option value="seychellois">Seychellois</option>
                <option value="sierra leonean">Sierra Leonean</option>
                <option value="singaporean">Singaporean</option>
                <option value="slovakian">Slovakian</option>
                <option value="slovenian">Slovenian</option>
                <option value="solomon islander">Solomon Islander</option>
                <option value="somali">Somali</option>
                <option value="south african">South African</option>
                <option value="south korean">South Korean</option>
                <option value="spanish">Spanish</option>
                <option value="sri lankan">Sri Lankan</option>
                <option value="sudanese">Sudanese</option>
                <option value="surinamer">Surinamer</option>
                <option value="swazi">Swazi</option>
                <option value="swedish">Swedish</option>
                <option value="swiss">Swiss</option>
                <option value="syrian">Syrian</option>
                <option value="taiwanese">Taiwanese</option>
                <option value="tajik">Tajik</option>
                <option value="tanzanian">Tanzanian</option>
                <option value="thai">Thai</option>
                <option value="togolese">Togolese</option>
                <option value="tongan">Tongan</option>
                <option value="trinidadian or tobagonian">
                  Trinidadian or Tobagonian
                </option>
                <option value="tunisian">Tunisian</option>
                <option value="turkish">Turkish</option>
                <option value="tuvaluan">Tuvaluan</option>
                <option value="ugandan">Ugandan</option>
                <option value="ukrainian">Ukrainian</option>
                <option value="uruguayan">Uruguayan</option>
                <option value="uzbekistani">Uzbekistani</option>
                <option value="venezuelan">Venezuelan</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="welsh">Welsh</option>
                <option value="yemenite">Yemenite</option>
                <option value="zambian">Zambian</option>
                <option value="zimbabwean">Zimbabwean</option>
              </select>
              <label htmlFor="country" className="Application-input-labelrow">
                Nationality:
              </label>
            </div>
            <div className="Application-input col-6">
              <input
                id="religion"
                type="text"
                name="religion"
                className="Application-input-field"
                placeholder=""
                required
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="religion" className="Application-input-label">
                Religion
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <select
                id="gender"
                type="text"
                name="gender"
                className="Application-input-field"
                value={demo}
                required
                onChange={(e) => setdemo(e.target.value)}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="Application-input-labelrow">
                Gender
              </label>
            </div>
            <div className="Application-input col-6">
              <input
                id="dateofbirth"
                type="date"
                name="dateofbirth"
                className="Application-input-field"
                placeholder=""
                value={demo}
                required
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="dateofbirth"
                className="Application-input-label-date"
              >
                Date of Birth
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                id="placeofbirth"
                type="text"
                name="placeofbirth"
                className="Application-input-field"
                placeholder=""
                value={demo}
                required
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="placeofbirth"
                className="Application-input-labelrow"
              >
                Place of Birth
              </label>
            </div>
            <div className="Application-input col-6">
              <select
                required
                id="maritalstatus"
                type="text"
                name="maritalstatus"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              >
                <option value=""></option>
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
              <label
                htmlFor="maritalstatus"
                className="Application-input-label"
              >
                Marital Status
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="homeaddress"
                type="text"
                name="homeaddress"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="homeaddress" className="Application-input-label">
                Homeland Address
              </label>
            </div>
            <div className="col-6">
              <PhoneInput
                inputProps={{
                  name: "Homephone",
                  required: true,
                }}
                id="Homephone"
                placeholder=""
                type="tel"
                value={demo}
                onChange={setdemo}
                enableSearch
                specialLabel="Home Phone:"
                countryCodeEditable={false}
                country=" "
                disableSearchIcon={false}
              />
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="applyuniveristy"
                type="text"
                name="applyuniveristy"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="applyuniveristy"
                className="Application-input-labelrow"
              >
                Apply University
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="majorsub"
                type="text"
                name="majorsub"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="majorsub" className="Application-input-label">
                Major Subject
              </label>
            </div>
          </div>

          <br />
          <hr class="line solid" />
          <p className="divider-application">
            {count} Educational Background
            <i onClick={decrement} class="minus uil uil-minus-circle"></i>
            <i onClick={increment} class="plus uil uil-plus-circle"></i>
          </p>

          <div className="row">
            <div className="Application-input col-6">
              <input
                id="certificate1"
                type="file"
                name="certificate1"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                required
              />
              <label
                htmlFor="certificate1"
                className="Application-input-label-file"
              >
                Certificate 1 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript1"
                type="file"
                name="transcript1"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                required
              />
              <label
                htmlFor="transcript1"
                className="Application-input-label-file"
              >
                Transcript 1 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <div
            className="row"
            style={count >= 2 ? { display: "flex" } : { display: "none" }}
          >
            <div className="Application-input col-6">
              <input
                id="certificate2"
                type="file"
                name="certificate2"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 2 ? true : false}
                required
              />
              <label
                htmlFor="certificate2"
                className="Application-input-label-file"
              >
                Certificate 2 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript2"
                type="file"
                name="transcript2"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 2 ? true : false}
                required
              />
              <label
                htmlFor="transcript2"
                className="Application-input-label-file"
              >
                Transcript 2 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <div
            className="row"
            style={count > 2 ? { display: "flex" } : { display: "none" }}
          >
            <div className="Application-input col-6">
              <input
                id="certificate3"
                type="file"
                name="certificate3"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 3 ? true : false}
                required
              />
              <label
                htmlFor="certificate3"
                className="Application-input-label-file"
              >
                Certificate 3 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript3"
                type="file"
                name="transcript3"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 3 ? true : false}
                required
              />
              <label
                htmlFor="transcript3"
                className="Application-input-label-file"
              >
                Transcript 3 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <div
            className="row"
            style={count > 3 ? { display: "flex" } : { display: "none" }}
          >
            <div className="Application-input col-6">
              <input
                id="certificate4"
                type="file"
                name="certificate4"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 4 ? true : false}
                required
              />
              <label
                htmlFor="certificate4"
                className="Application-input-label-file"
              >
                Certificate 4 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript4"
                type="file"
                name="transcript4"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 4 ? true : false}
                required
              />
              <label
                htmlFor="transcript4"
                className="Application-input-label-file"
              >
                Transcript 4 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <div
            className="row"
            style={count > 4 ? { display: "flex" } : { display: "none" }}
          >
            <div className="Application-input col-6">
              <input
                id="certificate5"
                type="file"
                name="certificate5"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 5 ? true : false}
                required
              />
              <label
                htmlFor="certificate5"
                className="Application-input-label-file"
              >
                Certificate 5 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript5"
                type="file"
                name="transcript5"
                className="Application-input-field-file"
                value={demo}
                accept="application/pdf"
                onChange={(e) => demo(e.target.value)}
                disabled={count < 5 ? true : false}
                required
              />
              <label
                htmlFor="transcript5"
                className="Application-input-label-file"
              >
                Transcript 5 Pdf
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <br />
          <hr class="line solid" />

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="profession"
                type="text"
                name="profession"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="profession"
                className="Application-input-labelrow"
              >
                Applicant Profession
              </label>
            </div>
            <div className="Application-input col-6">
              <input
                required
                id="language"
                type="text"
                name="language"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="language" className="Application-input-label">
                Mother Language
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="fathername"
                type="text"
                name="fathername"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="fathername"
                className="Application-input-labelrow"
              >
                Father's Name
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="mothername"
                type="text"
                name="mothername"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="mothername" className="Application-input-label">
                Mother's Name
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="fatheremployement"
                type="text"
                name="fatheremployement"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="fatheremployement"
                className="Application-input-labelrow"
              >
                Father's Employment
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="motheremployement"
                type="text"
                name="motheremployement"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="motheremployement"
                className="Application-input-label"
              >
                Mother's Employment
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <PhoneInput
                inputProps={{
                  name: "fathernumber",
                  required: true,
                }}
                id="fathernumber"
                placeholder=""
                type="tel"
                value={phone}
                onChange={setphone}
                enableSearch
                specialLabel="Father's Number:"
                countryCodeEditable={false}
                country=" "
                disableSearchIcon={false}
              />
            </div>
            <div className="col-6">
              <PhoneInput
                inputProps={{
                  name: "mothernumber",
                  required: true,
                }}
                id="mothernumber"
                placeholder=""
                type="tel"
                value={phone}
                onChange={setphone}
                enableSearch
                specialLabel="Mother's Number:"
                countryCodeEditable={false}
                country=" "
                disableSearchIcon={false}
              />
            </div>
          </div>

          <div className="Application-input">
            <textarea
              id="requirements"
              type="text"
              name="requirements"
              className="Application-input-field-hearaboutus"
              value={demo}
              onChange={(e) => setdemo(e.target.value)}
            />
            <label
              htmlFor="requirements"
              className="Application-input-label-hearaboutus"
            >
              Where did you hear about us?
            </label>
          </div>
          <br />
          <hr class="line solid" />

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="passportscan"
                type="file"
                name="passportscan"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="passportscan"
                className="Application-input-label-file"
              >
                Passport Scan Copy*
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="academiccertificate"
                type="file"
                name="academiccertificate"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="academiccertificate"
                className="Application-input-label-file"
              >
                Last Academic Certificates*
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="policyclearance"
                type="file"
                name="policyclearance"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="policyclearance"
                className="Application-input-label-file"
              >
                Police Clearance (if have)
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="bankstatement"
                type="file"
                name="bankstatement"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="bankstatement"
                className="Application-input-label-file"
              >
                Bank Statement (if have)
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="englishprofeciencydoc"
                type="file"
                name="englishprofeciencydoc"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="englishprofeciencydoc"
                className="Application-input-label-file"
              >
                English Proficiency Document (if have)
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="otherdoc"
                type="file"
                name="otherdoc"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="otherdoc"
                className="Application-input-label-file"
              >
                Any Other Document (if have)
              </label>
            </div>
          </div>

          <br />
          <hr class="line solid" />
          <p className="divider">
            ONLY FOR MASTERS & PhD<i class="arrow uil uil-arrow-down-right"></i>
          </p>
          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="recommendationletter"
                type="file"
                name="recommendationletter"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="recommendationletter"
                className="Application-input-label-file"
              >
                Recommendation Letter
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="recommendationletter2"
                type="file"
                name="recommendationlette2r"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="recommendationletter2"
                className="Application-input-label-file"
              >
                Recommendation Letter 2
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                required
                id="recommendationletter3"
                type="file"
                name="recommendationletter3"
                className="Application-input-field"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="recommendationletter3"
                className="Application-input-label-file"
              >
                Recommendation Letter 3
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="studyplan"
                type="file"
                name="studyplan"
                className="Application-input-field-file"
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="studyplan" className="Application-input-label-file">
                Study Plan / Research Proposal
              </label>
            </div>
          </div>

          <div className="Application-card-info" style={{ margin: "0px auto" }}>
            <input
              className="Application-checkbox"
              type="checkbox"
              id="terms"
              onChange={(e) => setchecked(!checked)}
              value="agree"
              required
            />
            <label className="Application-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="Application-action row">
            <button
              className="Application-action-button"
              type="submit"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ApplicationForm;
