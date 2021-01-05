import React from "react";
import axios from "axios";
import { url } from "../../url";

class TaxName extends React.Component {
    constructor(props){
        super(props)
        this.state={                     
            taxName:"",
            pushTax:[]
        }
    }
    componentDidMount(){
        console.log(this.props.id)
        axios.get(url+`tax/multi/${this.props.id}`)
        .then(res =>  res.data.result.map((tax,index)=> {
            if(index != 0){
                this.setState({taxName:this.state.taxName+', '});
            }
            this.setState({taxName:this.state.taxName+tax.taxName});
            console.log(tax.taxName)
        }))
            .catch(err => console.log(err))
            console.log(this.props.id)
    }
render(){
    return(
        <div>
            {/* {this.state.tax.map(tax => <p key={tax.id}>{tax.TaxName}</p>)} */}
        {this.state.taxName}
        </div>
    )
}

}

export default TaxName