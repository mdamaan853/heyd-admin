// import React, { Component } from "react";
// import Select from "react-select";
// const taxes = [
//   { label: "Tax Name", value: "taxName", key: 0 },
//   { label: "Tax Percent", value: "taxPercent", key: 1 },
// ];
// export default class ReactSelectExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedOptions: [],
//       selectedOption: "",
//       taxName: "",
//       taxPercent: "",
//       tax: [],
//     };
//   }
//   handleChangeMulti = (selectedOptions) => {
//     this.setState({ selectedOptions });
//   };
//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//   };
//   render() {
//     return (
//       <div>
//         <Select
//           className="react-select"
//           classNamePrefix="react-select"
//           isMulti
//           name="form-field-name"
//           value={this.state.selectedOptions}
//           onChange={this.handleChangeMulti}
//           options={taxes}
//           placeholder="select tax"
//         >
//           Select Tax
//         </Select>
//       </div>
//     );
//   }
// }
"use strict";