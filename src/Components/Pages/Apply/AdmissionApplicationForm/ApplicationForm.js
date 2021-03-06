import { React } from "react";
import PhoneInput from "react-phone-input-2";
import "./ApplicationForm.css";
import useForm from "./useForm";
import validate from "./validateinfo";

const ApplicationForm = (props) => {
  
  const { handleChange, handleSubmit, values,  count, setCount, setValues} = useForm(
    props,
    validate,
  
  );
  
  console.log("base_url",props.base_url);
  function decrement() {
    setCount((prevCount) => prevCount - 1);
    if (count === 1) setCount(1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
    if (count === 5) setCount(5);
  }



  return (
    <div className="container" id="Application-formContiner">
      <div className="Application-form">
        <form className="Application-card-form" onSubmit={(e)=>{
          console.log("sssss");
          handleSubmit(e);
          console.log("submit")
        }}>
          <div className="Application-form-title">
            <h2>Overseas Admission Form</h2>
            <p className="Application-title-description">
              Fill out the required information for applying for a degree.
            </p>
          </div>

          <div
            className="Application-input col-6"
            style={{ margin: "0px auto" }}
          >
            <input
              id="profilephoto"
              type="file"
              name="profilephoto"
              className="Application-input-field-file"
              onChange={
                (e)=>{ 
                    e.preventDefault();
                    console.log("===> values 1st: ", values);
                    setValues({...values, profilephoto: e.target.files[0]});
                    console.log("===> values 2nd: ", values);
                }}
              accept="image/png, image/jpeg"
              required
            />
            <label
              htmlFor="profilephoto"
              className="Application-input-label-file"
            >
              Upload your passport-size photo.<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="row">
            <div className="Application-input col-6">
              <input
                id="fname"
                type="text"
                name="fName"
                className="Application-input-field"
                placeholder=" "
                value={values.fName}
                onChange={handleChange}
                required
              />
              <label htmlFor="fname" className="Application-input-labelrow">
                First Name<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="lname"
                type="text"
                name="lName"
                className="Application-input-field"
                value={values.lName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lname" className="Application-input-label">
                Last Name<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application col-6">
            <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={values.phone}
                onChange={(phone, country, e, fv) => {
                  setValues({ ...values, phone: fv });
                }}
              />
            </div>

            <div className="Application-input col-6">
              <input
                id="email"
                type="email"
                name="email"
                className="Application-input-field"
                value={values.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="Application-input-label">
                Email<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>
          <div className="row">
          <div className="Application-input col-6">
              <input
                id="passportno"
                type="text"
                name="passportno"
                className="Application-input-field-notreq"
                placeholder=" "
                
                
              />
              <label htmlFor="passportno" className="Application-input-labelrow-notreq">
                Passport No. (If Any)
              </label>
            </div>

            <div className="Application-input col-6">
              
              <input
                id="passportExpireDate"
                type="date"
                name="passportExpireDate"
                className="Application-input-field-date-notreq"
                placeholder=" "
                
              />
              <label
                htmlFor="passportExpireDate"
                className="Application-input-label-date"
              >
                Passport Exp. Date
              </label>
            </div>
          </div>

          <div className="">
            <div className="Application-input ">
              <select
                id="country"
                type="text"
                name="nationality"
                className="Application-input-field"
                value={values.nationality}
                onChange={handleChange}
                required
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
              <label htmlFor="country" className="Application-input-label">
                Nationality:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Application-input ">
              <input
                id="nid/birthredno"
                type="text"
                name="nID_birthNumber"
                className="Application-input-field"
                placeholder=" "
                value={values.nID_birthNumber}
                onChange={handleChange}
                required
                
              />
              <label htmlFor="nid/birthredno" className="Application-input-label">
                NID / Birth Certificate Number<span style={{color:"red"}}>*</span>
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
                value={values.gender}
                required
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="Application-input-labelrow">
                Gender<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Application-input col-6">
              <input
                id="dateofbirth"
                type="date"
                name="dateofbirth"
                className="Application-input-field"
                placeholder=""
                value={values.dateofbirth}
                required
                onChange={handleChange}
              />
              <label
                htmlFor="dateofbirth"
                className="Application-input-label-date"
              >
                Date of Birth<span style={{color:"red"}}>*</span>
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
                value={values.placeofbirth}
                required
                onChange={handleChange}
              />
              <label
                htmlFor="placeofbirth"
                className="Application-input-labelrow"
              >
                Place of Birth<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Application-input col-6">
              <select
                required
                id="maritalstatus"
                type="text"
                name="maritalstatus"
                className="Application-input-field"
                value={values.maritalstatus}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
              <label
                htmlFor="maritalstatus"
                className="Application-input-label"
              >
                Marital Status<span style={{color:"red"}}>*</span>
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
                value={values.homeaddress}
                onChange={handleChange}
              />
              <label htmlFor="homeaddress" className="Application-input-label">
                Homeland Address<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Application col-6">
            <PhoneInput
                inputProps={{
                  name: "homephone",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={values.homephone}
                onChange={(homephone, country, e, fv) => {
                  setValues({ ...values, homephone: fv });
                }}
              />
            </div>
          </div>

          <div className="">
            <div className="Application-input">
              <input
                required
                id="applyuniveristy"
                type="text"
                name="applyuniveristy"
                className="Application-input-field"
                placeholder=""
                value={values.applyuniveristy}
                onChange={handleChange}
              />
              <label
                htmlFor="applyuniveristy"
                className="Application-input-label"
              >
                University Applying For:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="Application-input">
              <input
                required
                id="majorsub"
                type="text"
                name="majorsub"
                className="Application-input-field"
                placeholder=""
                value={values.majorsub}
                onChange={handleChange}
              />
              <label htmlFor="majorsub" className="Application-input-label">
                Major Subject:<span style={{color:"red"}}>*</span>
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
                id="academiccertificate"
                type="file"
                name="academiccertificate"
                className="Application-input-field-file"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("===> values 1st: ", values);
                      setValues({...values, academiccertificate: e.target.files[0]});
                      console.log("===> values 2st: ", values);
                  }}
                required
                
              />
              <label
                htmlFor=""
                className="Application-input-label-file"
              >
                Certificate 1 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript"
                type="file"
                name="transcript"
                className="Application-input-field-file"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, transcript: e.target.files[0]});
                  }}
                required
              />
              <label
                htmlFor="transcript1"
                className="Application-input-label-file"
              >
                Transcript 1 Pdf<span style={{color:"red"}}>*</span>
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
                id="academiccertificate2"
                type="file"
                name="academiccertificate2"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, academiccertificate2: e.target.files[0]});
                  }}
                disabled={count < 2 ? true : false}
                required
              />
              <label
                htmlFor="certificate2"
                className="Application-input-label-file"
              >
                Certificate 2 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript2"
                type="file"
                name="transcript2"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, transcript2: e.target.files[0]});
                  }}
                disabled={count < 2 ? true : false}
                required
              />
              <label
                htmlFor="transcript2"
                className="Application-input-label-file"
              >
                Transcript 2 Pdf<span style={{color:"red"}}>*</span>
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
                id="academiccertificate3"
                type="file"
                name="academiccertificate3"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, academiccertificate3: e.target.files[0]});
                  }}
                disabled={count < 3 ? true : false}
                required
              />
              <label
                htmlFor="certificate3"
                className="Application-input-label-file"
              >
                Certificate 3 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript3"
                type="file"
                name="transcript3"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, transcript3: e.target.files[0]});
                  }}
                disabled={count < 3 ? true : false}
                required
              />
              <label
                htmlFor="transcript3"
                className="Application-input-label-file"
              >
                Transcript 3 Pdf<span style={{color:"red"}}>*</span>
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
                id="academiccertificate4"
                type="file"
                name="academiccertificate4"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, academiccertificate4: e.target.files[0]});
                  }}
                disabled={count < 4 ? true : false}
                required
              />
              <label
                htmlFor="certificate4"
                className="Application-input-label-file"
              >
                Certificate 4 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript4"
                type="file"
                name="transcript4"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, transcript4: e.target.files[0]});
                  }}
                disabled={count < 4 ? true : false}
                required
              />
              <label
                htmlFor="transcript4"
                className="Application-input-label-file"
              >
                Transcript 4 Pdf<span style={{color:"red"}}>*</span>
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
                id="academiccertificate5"
                type="file"
                name="academiccertificate5"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, academiccertificate5: e.target.files[0]});
                  }}
                disabled={count < 5 ? true : false}
                required
              />
              <label
                htmlFor="certificate5"
                className="Application-input-label-file"
              >
                Certificate 5 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                id="transcript5"
                type="file"
                name="transcript5"
                className="Application-input-field-file"              
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, transcript5: e.target.files[0]});
                  }}
                disabled={count < 5 ? true : false}
                required
              />
              <label
                htmlFor="transcript5"
                className="Application-input-label-file"
              >
                Transcript 5 Pdf<span style={{color:"red"}}>*</span>
                <i class="arrow uil uil-arrow-down-right" />
              </label>
            </div>
          </div>

          <br />
          <hr class="line solid" />

          <div className="">
            <div className="Application-input">
              <input
                required
                id="profession"
                type="text"
                name="profession"
                className="Application-input-field"
                value={values.profession}
                onChange={handleChange}
              />
              <label
                htmlFor="profession"
                className="Application-input-label"
              >
                Applicant's Profession<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Application-input">
              <input
                required
                id="language"
                type="text"
                name="language"
                className="Application-input-field"
                value={values.language}
                onChange={handleChange}
              />
              <label htmlFor="language" className="Application-input-label">
                Mother Language<span style={{color:"red"}}>*</span>
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
                value={values.fathername}
                onChange={handleChange}
              />
              <label
                htmlFor="fathername"
                className="Application-input-labelrow"
              >
                Father's Name<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="mothername"
                type="text"
                name="mothername"
                className="Application-input-field"
                value={values.mothername}
                onChange={handleChange}
              />
              <label htmlFor="mothername" className="Application-input-label">
                Mother's Name<span style={{color:"red"}}>*</span>
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
                value={values.fatheremployement}
                onChange={handleChange}
              />
              <label
                htmlFor="fatheremployement"
                className="Application-input-labelrow"
              >
                Father's Profession<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="motheremployement"
                type="text"
                name="motheremployement"
                className="Application-input-field"
                value={values.motheremployement}
                onChange={handleChange}
              />
              <label
                htmlFor="motheremployement"
                className="Application-input-label"
              >
                Mother's Profession<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>

          <div className="row">
            <div className="Application col-6">
            <PhoneInput
                inputProps={{
                  name: "fathernumber",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={values.fathernumber}
                onChange={(fathernumber, country, e, fv) => {
                  setValues({ ...values, fathernumber: fv });
                }}
              />
            </div>
            <div className="Application col-6">
            <PhoneInput
                inputProps={{
                  name: "mothernumber",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={values.mothernumber}
                onChange={(mothernumber, country, e, fv) => {
                  setValues({ ...values, mothernumber: fv });
                }}
              />
            </div>
          </div>

          <br />
          <hr class="line solid" />

          <div className="row">
            <div className="Application-input col-6">
              <input
                
                id="passportscan"
                type="file"
                name="passportscan"
                className="Application-input-field-file-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, passportscan: e.target.files[0]});
                  }}
              />
              <label
                htmlFor="passportscan"
                className="Application-input-label-file"
              >
                Passport Copy (If Any)
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                required
                id="nIDscan"
                type="file"
                name="nIDscan"
                className="Application-input-field-file"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, nIDscan: e.target.files[0]});
                  }}
              />
              <label
                htmlFor="academiccertificate"
                className="Application-input-label-file"
              >
                NID / Birth Certificate Copy<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>

          <div className="row">

            <div className="Application-input col">
              <input
                
                id="bankstatement"
                type="file"
                name="bankstatement"
                className="Application-input-field-file-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, bankstatement: e.target.files[0]});
                  }}
              />
              <label
                htmlFor="bankstatement"
                className="Application-input-label-file"
              >
                Bank Statement of last 6 months (if any)
              </label>
            </div>
          </div>

          <br />
          <hr class="line solid" />
          <p className="divider">
            ONLY FOR MASTERS & PhD (OPTIONAL)<i class="arrow uil uil-arrow-down-right"></i>
          </p>
          <div className="row">
            <div className="Application-input col-6">
              <input
                
                id="recommendationletter"
                type="file"
                name="recommendationletter"
                className="Application-input-field-date-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, recommendationletter: e.target.files[0]});
                  }}
              />
              <label
                htmlFor="recommendationletter"
                className="Application-input-label-file"
              >
                Recommendation Letter 1
              </label>
            </div>

            <div className="Application-input col-6">
              <input
                
                id="recommendationletter2"
                type="file"
                name="recommendationlette2"
                className="Application-input-field-file-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, recommendationlette2: e.target.files[0]});
                  }}
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
                
                id="recommendationletter3"
                type="file"
                name="recommendationletter3"
                className="Application-input-field-file-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, recommendationletter3: e.target.files[0]});
                  }}
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
                
                id="studyplan"
                type="file"
                name="studyplan"
                className="Application-input-field-file-notreq"
                accept="application/pdf"
                onChange={
                  (e)=>{ 
                      e.preventDefault();
                      console.log("e.target: ", e.target);
                      setValues({...values, studyplan: e.target.files[0]});
                  }}
              />
              <label
                htmlFor="studyplan"
                className="Application-input-label-file"
              >
                Study Plan / Research Proposal
              </label>
            </div>
          </div>

          <div className="Application-card-info" style={{ margin: "0px auto" }}>
            <input
              className="Application-checkbox"
              type="checkbox"
              id="terms"
              onChange={handleChange}
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
             type="button" onClick={handleSubmit}
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
