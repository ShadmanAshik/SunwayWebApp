import React from "react";
import validate from "./validateinfo";
import useForm from "./useForm";
import "./ScholarshipForm.css";

const ApplyScholarshipForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, error } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-schlr">
      <form className="form-schlr" onSubmit={handleSubmit}>
        <h1>
          Fill out the form as per the required information, and wait till we
          get back to you after evaluation.
        </h1>
        <div className="form-inputs-schlr">
          <label htmlFor="name" className="form-label-schlr">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input-schlr"
            placeholder="Enter Your Name"
            value={values.name}
            onChange={handleChange}
          />
          {error.name && <p>{error.name}</p>}
        </div>

        <div className="form-inputs-schlr">
          <label htmlFor="gender" className="form-label-schlr">
            Gender
          </label>
          <select
            id="gender"
            type="gender"
            name="gender"
            className="form-input-schlr"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-inputs-schlr">
          <label htmlFor="degreeObtained" className="form-label-schlr">
            Last Obtained Degree:
          </label>
          <select
            id="degreeObtained"
            type="degreeObtained"
            name="degreeObtained"
            className="form-input-schlr"
            value={values.degreeObtained}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Secondary School">Secondary School</option>
            <option value="Highschool">Highschool</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PHD">PHD</option>
            <option value="Others">Others</option>
          </select>
          {error.degreeObtained && <p>{error.degreeObtained}</p>}
        </div>

        <div className="form-inputs-schlr">
          <label htmlFor="englishProficiency" className="form-label-schlr">
            Select English Language Proficiency:
          </label>
          <select
            id="englishProficiency"
            type="englishProficiency"
            name="englishProficiency"
            className="form-input-schlr"
            value={values.englishProficiency}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="None">None</option>
          </select>
          {error.englishProficiency && <p>{error.englishProficiency}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="levelofstudy" className="form-label-schlr">
            Level of Study
          </label>
          <select
            id="levelofstudy"
            type="levelofstudy"
            name="levelofstudy"
            className="form-input-schlr"
            value={values.levelofstudy}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PHD">PHD</option>
          </select>
          {error.levelofstudy && <p>{error.levelofstudy}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="fieldofstudy" className="form-label-schlr">
            Field of study
          </label>
          <input
            id="fieldofstudy"
            type="text"
            name="fieldofstudy"
            className="form-input-schlr"
            placeholder="e.g. Computer Science"
            value={values.fieldofstudy}
            onChange={handleChange}
          />
          {error.fieldofstudy && <p>{error.fieldofstudy}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="avgGrade" className="form-label-schlr">
            Average Grade:
          </label>
          <select
            id="avgGrade"
            type="avgGrade"
            name="avgGrade"
            className="form-input-schlr"
            value={values.avgGrade}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Above 80%">Above 80%</option>
            <option value="70%-79%">70%-79%</option>
            <option value="60%-69%">60%-69%</option>
            <option value="50%-59%">50%-59%</option>
            <option value="Below 50%">Below 50%</option>
          </select>
          {error.avgGrade && <p>{error.avgGrade}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="studyBudget" className="form-label-schlr">
            Study Budget:
          </label>
          <select
            id="studyBudget"
            type="studyBudget"
            name="studyBudget"
            className="form-input-schlr"
            value={values.studyBudget}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Above 80%">Above 80%</option>{" "}
            {/* needs to change after details recieved from client */}
            <option value="70%-79%">70%-79%</option>
            <option value="60%-69%">60%-69%</option>
            <option value="50%-59%">50%-59%</option>
            <option value="Below 50%">Below 50%</option>
          </select>
          {error.studyBudget && <p>{error.studyBudget}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="nationality" className="form-label-schlr">
            Your Nationality
          </label>
          <select
            id="nationality"
            type="nationality"
            name="nationality"
            className="form-input-schlr"
            value={values.nationality}
            onChange={handleChange}
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
            <option value="kittian and nevisian">Kittian and Nevisian</option>
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
          {error.nationality && <p>{error.nationality}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="dateofbirth" className="form-label-schlr">
            Date of Birth
          </label>
          <input
            id="dateofbirth"
            type="date"
            name="dateofbirth"
            className="form-input-schlr"
            value={values.datofbirth}
            onChange={handleChange}
          />
          {error.dateofbirth && <p>{error.dateofbirth}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="email" className="form-label-schlr">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input-schlr"
            placeholder="Enter Your E-mail"
            value={values.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-inputs-schlr">
          <label htmlFor="phoneno" className="form-label-schlr">
            Phone No.
          </label>
          <input
            id="phoneno"
            type="tel"
            name="phoneno"
            className="form-input-schlr"
            placeholder="Enter your Phone Number"
            value={values.phoneno}
            onChange={handleChange}
          />
          {error.phoneno && <p>{error.phoneno}</p>}
        </div>
        <button className="form-input-apply-schlr" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ApplyScholarshipForm;
