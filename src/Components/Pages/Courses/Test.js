import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./AcademicEnglish.css";

// const Test = (props) => {
//   let base_url = props.base_url;
//   useEffect(() => {
//     viewPost();
//   }, );

//   const [ispost, setpost] = useState();
//   const viewPost = () => {
//     axios
//       .get("http://127.0.0.1:8000/editor/post/",)
//       .then((response) => {
//         console.log("response", response.data)
//         setpost(response.data);
//         console.log("==> ispost: ", ispost.title);
//       })
//       .catch((errors) => {
//         console.log("===> errors: ", errors);
//       });

//   };

//   return (
//     <>
//       <div>
//         <Container>
//           <HeroImg imgSrc="/static/banner1.jpg" />
//           <div>
//             <div class="row">
//               <div className="col-lg-8 col-md-6 col-sm-12">
//                 <h1>
//                   Test Page
//                 </h1>
//                 <h2>{ispost.title}</h2>
//                 {ispost.map((item, index) => (
//                   <div className="post__list" key={index}>
//                     <h2>{item.title}</h2>

//                     <div
//                       className="post__description"
//                       dangerouslySetInnerHTML={{ __html: item.description }}
//                     />
//                     <Link to={`/Edit/${item.id}`} className="btn btn__theme">
//                       {" "}
//                       Edit{" "}
//                     </Link>
//                   </div>
//                 ))}
//               </div>

//               <div className="col-lg-4 col-md-6 col-sm-12">
//                 <CommonForm base_url={base_url} />
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Test;

export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
    this.viewContent = this.viewContent.bind(this);
    // this.config = {
    //   'headers': {
    //     'Authorization': "Token "+localStorage.getItem('auth_token')
    //   }
    // };
  }



  viewContent() {
    axios
      .get(this.props.base_url + "/editor/esget/")
      .then((response) => {
        console.log("==> response: ", response.data);
        this.setState({ content: response.data });
      })
      .catch((errors) => {
        console.log("===> errors: ", errors);
      });
  }
  componentDidMount() {
    this.viewContent();
  }
  render() {
    console.log("URL=>", this.props.base_url)
    return (
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <h1>Test Data</h1>
              <h2>{this.state.content.title}</h2>
              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: this.state.content.description }}
              />
              
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <CommonForm base_url={this.base_url} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Test;

