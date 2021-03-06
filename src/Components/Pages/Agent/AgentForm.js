import axios from "axios";
import { React, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "./AgentForm.css";

const AgentForm = (props) => {
  let base_url=props.base_url;
  const [checked, setchecked] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [occupation, setoccupation] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [businessName, setbusinessName] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [academicCertificate, setacademicCertificate] = useState("");
  const [whatsappnumber, setwhatsappnumber] = useState("");
  const [agentType, setagentType] = useState("");
  const [businessemail, setbusinessemail] = useState("");
  const [businessAddress, setbusinessAddress] = useState("");
  const [businessNum, setbusinessNum] = useState("");
  const [tradeNum, settradeNum] = useState("");
  const [webaddress, setwebaddress] = useState("");
  const [agentphoto, setagentphoto] = useState("");
  const [agentnid, setagentnid] = useState("");
  const [tradelicense, settradelicense] = useState("");
  const [tinbin, settinbin] = useState("");
  const submitData = (e) => {
    e.preventDefault();
    console.log("submit data: ", e);
    let formField = new FormData();
    formField.append("fName", fName);
    formField.append("lName", lName);
    formField.append("email", email);
    formField.append("occupation", occupation);
    formField.append("phone", phone);
    formField.append("country", country);
    formField.append("city", city);
    formField.append("state", state);
    formField.append("whatsappnumber", whatsappnumber);
    formField.append("webaddress", webaddress);
    formField.append("academicCertificate", academicCertificate);
    formField.append("agentType",agentType);
    formField.append("businessName",businessName);   
    formField.append("agentphoto", agentphoto);
    formField.append("agentnid", agentnid);   
    formField.append("tinbin",tinbin);
    formField.append("tradelicense",tradelicense);
    formField.append("tradeNum",tradeNum);
    formField.append("businessNum",businessNum);
    formField.append("businessemail",businessemail);
    formField.append("businessAddress",businessAddress);
    const headers = {
      'content-type': 'multipart/form-data'
    };
    console.log("agencytype: ", agentType);
    if(agentType==="buninessagent"){
      console.log("business");
      axios
      .post(base_url+"/form/businessagentpost/", formField, {
        headers: headers,
      })
      .then((response) => {
        alert("Successfully Submitted!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else if(agentType==="individualagent"){
      axios
      .post(base_url+"/form/individualagentpost/", formField, {
        headers: headers,
      })
      .then((response) => {
        alert("Successfully Submitted!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div className="container" id="Agent-formContiner">
      <div className="Agent-form">
        <form className="Agent-card-form">
          <div className="Agent-form-title">
            <h2>Become an Agent Today!</h2>
            <p className="Agent-title-description">
              Just fill out your details below and we'll reach you soon.
            </p>
          </div>
          <div className="row">
            <div className="Agent-input col-6">
              <input
                id="fname"
                type="text"
                name="fname"
                className="Agent-input-field"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
                required
              />
              <label htmlFor="fname" className="Agent-input-labelrowAgent">
                First Name<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="Agent-input col-6">
              <input
                id="lname"
                type="text"
                name="lname"
                className="Agent-input-field"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
                required
              />
              <label htmlFor="lname" className="Agent-input-label">
                Last Name<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>

          <div className="Agent-input">
            <select
              id="agentType"
              type="text"
              name="agentType"
              className="Agent-input-field"
              value={agentType}
              onChange={(e) => setagentType(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="individualagent">Individual Agent</option>
              <option value="buninessagent">Business Agent</option>
            </select>
            <label htmlFor="agentType" className="Agent-input-label">
              Agent Type:<span style={{color:"red"}}>*</span>
            </label>
          </div>

          <span
            className="businessfields"
            style={
              agentType === "buninessagent"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <br />
            <hr class="solid" />
            <p className="divider">
              For Business Agent<i class="arrow uil uil-arrow-down-right"></i>
            </p>
            <div className="Agent-input">
              <input
                id="company"
                type="text"
                name="businessName"
                className="Agent-input-field"
                value={businessName}
                onChange={(e) => setbusinessName(e.target.value)}
                disabled={agentType === "buninessagent" ? false : true}
                required
              />
              <label htmlFor="company" className="Agent-input-label">
                Business Name:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Agent-input">
              <input
                id="busninessRtradeliscenseno"
                type="text"
                name="tradeNum"
                className="Agent-input-field"
                value={tradeNum}
                onChange={(e) => settradeNum(e.target.value)}
                disabled={agentType === "buninessagent" ? false : true}
                required
              />
              <label htmlFor="company" className="Agent-input-label">
                Trade License Number:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Agent-input">
              <input
                id="Baddress"
                type="text"
                name="businessAddress"
                className="Agent-input-field"
                value={businessAddress}
                onChange={(e) => setbusinessAddress(e.target.value)}
                disabled={agentType === "buninessagent" ? false : true}
                required
              />
              <label htmlFor="address" className="Agent-input-label">
                Business Address:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="AgentForm">
              <PhoneInput
                inputProps={{
                  name: "businessNum",
                  required: true,
                }}
                id="Bphone"
                placeholder=""
                type="tel"
                value={businessNum}
                onChange={setbusinessNum}
                enableSearch
                specialLabel={ <span>Business Contact Number:<span style={{color:"red"}}>*</span></span>}
                countryCodeEditable={true}
                country=" "
                disableSearchIcon={false}
                disabled={agentType === "buninessagent" ? false : true}
              />
            </div>

            <div className="Agent-input">
              <input
                id="Bemail"
                type="email"
                name="businessemail"
                className="Agent-input-field"
                value={businessemail}
                onChange={(e) => setbusinessemail(e.target.value)}
                disabled={agentType === "buninessagent" ? false : true}
                required
              />
              <label htmlFor="email" className="Agent-input-label">
                Business Email:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            
            
          </span>

          <span
            className="agentfield"
            style={
              agentType === "individualagent"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <br />
            <hr class="solid" />
            <p className="divider">
              For Individual Agent<i class="arrow uil uil-arrow-down-right"></i>
            </p>
            <div className="AgentForm">
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
                specialLabel={ <span>Contact Number:<span style={{color:"red"}}>*</span></span>}
                countryCodeEditable={true}
                country=" "
                disableSearchIcon={false}
                disabled={agentType === "individualagent" ? false : true}
              />
            </div>
            <div className="Agent-input">
              <input
                id="email"
                type="email"
                name="email"
                className="Agent-input-field"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                disabled={agentType === "individualagent" ? false : true}
                required
              />
              <label htmlFor="email" className="Agent-input-label">
                Email:<span style={{color:"red"}}>*</span>
              </label>
              {/* {error.email && (
                <p data-tooltip="Invalid Email Address">{error.email}</p>
              )} */}
            </div>
            <div className="Agent-input">
              <input
                id="occupation"
                type="text"
                name="occupation"
                className="Agent-input-field"
                value={occupation}
                onChange={(e) => setoccupation(e.target.value)}
                disabled={agentType === "individualagent" ? false : true}
                required
              />
              <label htmlFor="text" className="Agent-input-label">
                Occupation:<span style={{color:"red"}}>*</span>
              </label>
              
            </div>
          </span>

          <div className="Agent-input">
            <select
              id="country"
              type="text"
              name="country"
              className="Agent-input-field"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="N/A">N/A</option>
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
            <label htmlFor="country" className="Agent-input-label">
              Country:<span style={{color:"red"}}>*</span>
            </label>
          </div>

          <div className="row">
            <div className="Agent-input col-6">
              <input
                id="state"
                type="text"
                name="state"
                className="Agent-input-field"
                value={state}
                onChange={(e) => setstate(e.target.value)}
                required
              />
              <label htmlFor="state" className="Agent-input-labelrowAgent">
                State / Area:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="Agent-input col-6">
              <input
                id="city"
                type="text"
                name="city"
                className="Agent-input-field"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
              />
              <label htmlFor="zipcode" className="Agent-input-label">
                City:<span style={{color:"red"}}>*</span>
              </label>
            </div>
          </div>
          <div className="AgentForm-notreq">
            <PhoneInput
            inputProps={{             
              name: 'whatsappnumber',
              required: false,
            }}
              id="whatsappnumber"
              placeholder="Whatsapp Number:(If Any)"
              type="tel"
              value={whatsappnumber}
              onChange={setwhatsappnumber}
              enableSearch
              specialLabel=""
              countryCodeEditable={true}
              country=" "
              disableSearchIcon={false}
            />
          </div>

          

          <div className="Agent-input">
            <input
              id="webaddress"
              type="text"
              name="webaddress"
              className="Agent-input-field-notreq"
              value={webaddress}
              onChange={(e) => setwebaddress(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="webaddress" className="Agent-input-label-notreq">
            Website Address / Social Media URL (If Any)
            </label>
          </div>

          <div className="Agent-input">
            <div className="row mt-3">
              <div className="col-4">Phone <input type="checkbox" /></div>
              <div className="col-4">Email <input type="checkbox" /></div>
              <div className="col-4">SMS <input type="checkbox" /></div>
              <div className="col-12">Whatsapp <input type="checkbox" /></div>
            </div>
            <label htmlFor="webaddress" className="Agent-input-label-checkbox">
            Best way to contact you:
            </label>
          </div>

          <div className="Agent-input">
            <input
              id="agentphoto"
              type="file"
              name="agentphoto"
              className="Agent-input-field-file"
              // value={agentphoto}
              onChange={(e) => { e.preventDefault(); setagentphoto(e.target.files[0]); }}
              accept="image/png, image/jpeg"
              required
            />
            <label htmlFor="agentphoto" className="Agent-input-label-file">
              Agent Photo<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="Agent-input">
            <input
              id="agentnid"
              type="file"
              name="agentnid"
              className="Agent-input-field-file"
              // value={agentnid}
              accept="application/pdf"
              onChange={(e) => { e.preventDefault(); setagentnid(e.target.files[0]); }}
              required
            />
            <label htmlFor="agentnid" className="Agent-input-label-file">
              Agent NID<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="Agent-input" style={
              agentType === "buninessagent"
                ? { display: "flex" }
                : { display: "none" }
            }>
            <input
              id="tradelicense"
              type="file"
              name="tradelicense"
              className="Agent-input-field-file"
              accept="application/pdf"
              // value={tradelicense}
              onChange={(e) => { e.preventDefault(); settradelicense(e.target.files[0]); }}
              disabled={agentType === "buninessagent" ? false : true}
              required
            />
            <label htmlFor="tradelicense" className="Agent-input-label-file">
              Trade License<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="Agent-input" style={
              agentType === "buninessagent"
                ? { display: "flex" }
                : { display: "none" }
            }> 
            <input
              id="tinbin"
              type="file"
              name="tinbin"
              className="Agent-input-field-file"
              accept="application/pdf"
              // value={tinbin}
              disabled={agentType === "buninessagent" ? false : true}
              onChange={(e) => { e.preventDefault(); settinbin(e.target.files[0]); }}
              required
            />
            <label htmlFor="tinbin" className="Agent-input-label-file">
              TIN / BIN<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="Agent-input" style={
              agentType === "individualagent"
                ? { display: "flex" }
                : { display: "none" }
            }>
            <input
              id="AcademicCertificate"
              type="file"
              name="academicCertificate"
              className="Agent-input-field-file"
              accept="application/pdf"
              // value={academicCertificate}
              onChange={(e) => { e.preventDefault(); setacademicCertificate(e.target.files[0]); }}
              disabled={agentType === "individualagent" ? false : true}
              required
            />
            <label htmlFor="academicCertificate" className="Agent-input-label-file">
              Last Academic Certificate<span style={{color:"red"}}>*</span>
              <i class="arrow uil uil-arrow-down-right" />
            </label>
          </div>

          <div className="Agent-card-info">
            <input
              className="Agent-checkbox"
              type="checkbox"
              id="terms"
              onChange={(e) => setchecked(!checked)}
              value="agree"
              required
            />
            <label className="Agent-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="Agent-action row">
            <button
              className="Agent-action-button"
              type="button"
              onClick={(e)=>{e.preventDefault(); console.log("==========="); submitData(e)}}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AgentForm;
