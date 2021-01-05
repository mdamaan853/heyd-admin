import React from "react";
import axios from "axios";
import { url } from "../../url";

class CatName extends React.Component {
    constructor(props){
        super(props)
  this.state = {
    category:"",
    error:""
  };
}
componentDidMount(){
    axios.get(url+`category/${this.props.id}`)
    .then(res => (
    this.setState({category:res.data.result.catName}))
    )
    .catch(err => console.log(err))
}

render(){
    return(
<div>
{this.state.category}
</div>
    )
}

}
export default CatName;
