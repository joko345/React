import React from "react";

class Badan extends React.Component{
    constructor(){
        super();//untuk bisa menggunakan react component
            this.state = {
                body : "body Pertama",
                subBody : "subbody pertama" 
            }
    }//new
    render(){
        return <div>
            <p>{this.state.body}</p>
            <p>{this.state.subBody}</p>
        </div>
    };
}
export default Badan;