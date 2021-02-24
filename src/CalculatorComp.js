import React, { useState } from 'react';
import './calculator.css';


   
    

const CalculatorComp = ({ data }) => {

    var [result,setresult]=useState("");
 
    function cal(id) {
console.log(result+""+id);
setresult(result+id);
if (id === '='){
    setresult (eval(result));
}
else if (id === 'C'){
    setresult ("");
}
    }

        return (
        <div>
            <div id='Calculator'>
                <div id='total'>{result}</div>
                <div id='digit'>
                    {
                        data.map(function (key) {
                            return <div className='box' onClick={cal.bind(this,key.id)}>{key.name}</div>
                        })}

                </div>
            </div>
            
        </div>
    )
}
export default CalculatorComp;

