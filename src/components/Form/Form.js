import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
    render(){
        return(
            <div className = "drop">
                Select Base Currency
                <br/>
                <select className = "dropDown" onChange={this.props.onChange}>
                    {this.props.formList}
                </select> &nbsp;
                <input type="submit" onClick={this.props.onClick} className="drop-submit"></input>           
            
            </div>
            
            
        );
    }
}
export default Form;