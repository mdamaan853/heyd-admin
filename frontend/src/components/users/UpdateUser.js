// import React, { Component } from "react";
// import CKEditors from "react-ckeditor-component";
// // import { AiOutlinePlusCircle } from "react-icons/ai";
// import { Container, Row, Col } from "react-bootstrap";
// // import Dropzone from "react-dropzone";
//  import Navbar from "../../Layout/Navbar";
// import { InputGroup, FormControl, Card } from "react-bootstrap";
// // import one from "../../assets/profile/1.jpg";
// import axios from "axios";
// // import "./style.scss";
// class UpdateExpense extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "",
//       name: "",
//       userType: "",
//       ipaddress: "",
//       expenses:[],
//       incart: "",
//       mobile: "",
//       email: "",
//       profilePicUrl: "",
//       regTime: "",
//       lastlogin: "",
//       password:"",
//       secretKey:'',
//       walletBalance:"",
//       addressIDS:"",
//       lastTokenTransactions:"",
//     };
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

 

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     axios.get(`http://apis.restroqr.link:4040/users/${id}`).then(
//       (res) => {
//         this.setState({
//           name: res.data.result.name,
//           id: res.data.result.id,
//           userType: res.data.result.userType,
//           ipaddress: res.data.result.ipaddress,
//           incart: res.data.result.incart,
//           mobile: res.data.result.mobile,
//           total: res.data.result.total,
//           profilePicUrl: res.data.result.profilePicUrl,
//           regTime: res.data.result.regTime,
//           lastlogin: res.data.result.lastlogin,
//           deviceType: res.data.result.deviceType,
//           password: res.data.result.password,
//           secretKey: res.data.result.secretKey,
//           walletBalance: res.data.result.walletBalance,
//           addressIDS: res.data.result.addressIDS,
//           lastTokenTransactions: res.data.result.lastTokenTransactions,
//         });
//       },
//       (error) => {
//         this.setState({ error });
//       }
//     );
//   }

//   FormSubmit = (e) => {
//     e.preventDefault();
//     const fd = new FormData();
//     // this.state.productImage.name
//     fd.append("name", this.state.name);
//     // console.log(this.state.productImage);
//     // if(this.state.productImage != null){
//     //fd.append("productImage", this.state.productImage);
//     fd.append("userType", this.state.userType);
//     fd.append("ipaddress", this.state.ipaddress);
//     fd.append("incart", this.state.incart);
//     fd.append("mobile", this.state.mobile);
//     fd.append("email", this.state.email);
//     fd.append("profilePicUrl", this.state.profilePicUrl);
//     fd.append("regTime", this.state.regTime);
//     fd.append("lastlogin", this.state.lastlogin);
//     fd.append("deviceType", this.state.deviceType);
//     axios
//       .patch("http://apis.restroqr.link:4040/users/" + this.state.id, fd, {
//         headers: {
//           "content-type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     const { error, product } = this.state;
//     return (
//       <div>
//          <Navbar /> 
//         <Container>
//           <Row>
//             <Col>
//               <center>
//                 <h1>Update Users</h1>

//                 <form>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="name"
//                       value={this.state.name}
//                       onChange={this.changeHandler}
//                       placeholder="User Name"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="userType"
//                       value={this.state.userType}
//                       onChange={this.changeHandler}
//                       placeholder="User type"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="number"
//                       name="ipaddress"
//                       value={this.state.ipaddress}
//                       onChange={this.changeHandler}
//                       placeholder="Ip address"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="incart"
//                       value={this.state.incart}
//                       onChange={this.changeHandler}
//                       placeholder="in cart"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="mobile"
//                       name="mobile"
//                       value={this.state.mobile}
//                       onChange={this.changeHandler}
//                       placeholder="mobile"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="email"
//                       value={this.state.email}
//                       onChange={this.changeHandler}
//                       placeholder="email"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="profilePicUrl"
//                       value={this.state.profilePicUrl}
//                       onChange={this.changeHandler}
//                       placeholder="profilePicUrl"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="regTime"
//                       value={this.state.regTime}
//                       onChange={this.changeHandler}
//                       placeholder="Reg Time"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="lastlogin"
//                       value={this.state.lastlogin}
//                       onChange={this.changeHandler}
//                       placeholder="Last Login"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="deviceType"
//                       value={this.state.deviceType}
//                       onChange={this.changeHandler}
//                       placeholder="Device Type"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="password"
//                       value={this.state.password}
//                       onChange={this.changeHandler}
//                       placeholder="password"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="secretKey"
//                       value={this.state.secretKey}
//                       onChange={this.changeHandler}
//                       placeholder="Secret Key"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="walletBalance"
//                       value={this.state.walletBalance}
//                       onChange={this.changeHandler}
//                       placeholder="Wallet Balance"
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="addressIDS"
//                       value={this.state.addressIDS}
//                       onChange={this.changeHandler}
//                       placeholder="Address IDS"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       className="input"
//                       type="text"
//                       name="lastTokenTransactions"
//                       value={this.state.lastTokenTransactions}
//                       onChange={this.changeHandler}
//                       placeholder="Last Token Transactions"
//                     />
//                   </div>
//                   <button type="button"  onClick={this.FormSubmit} className="btn  button1 ">
//                     Update
//                   </button>
//                   <br />
//                   </form>
//               </center>
//             </Col>
//           </Row>
//         </Container>  
//       </div>
//     );
//   }
// }
// export default UpdateExpense;
