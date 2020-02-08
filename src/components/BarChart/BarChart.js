import React, { Component } from 'react';
import './BarChart.css'


class BarChart extends Component {
    render(){
        // const index = [1,2,3,4,5,6];
        // const country=['a','b','c','d','e','f']
        // const styles =['height: 100%','height: 100%','height: 100','height: 100%','height: 100%','height: 100%']
        // const { index,country,rates} = this.props;
        

        return(
            <div className="graph-bar" key={this.props.index} onClick={this.props.onClick} style={this.props.style}>
            {this.props.country}
             </div>


            )
        }
    }
    export default BarChart;
    
    
    
    // <div className="graph-main">
    //     <div className="graph-box">
    // {country.map((country,index) => <div className="graph-bar" key={index} > {country}:{rates[index]} </div>)}
    //     </div>
    // </div>
    
    // );