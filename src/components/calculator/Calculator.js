import React ,{useState}from 'react'
import './style.css'

const Calculator = () => {

    const [value,setValue]=useState("");

    const handleClick=(e)=>{
        setValue(value.concat(e.target.name));
    }
    const clearAll=()=>{
        setValue("");
    }
    const calculate=()=>{
        try{
            setValue(eval(value)); 
        }
        catch{
            setValue("Error")
        }
        
    }


    

   
    return (
        <div className="calculator">
            <input className="input" type="text" placeholder="output" value={value}/>
            <div style={{marginTop:"20px"}}>
                <div className="row">
                    <button onClick={handleClick} name="1" className="col-sm-2 " style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px",marginLeft:"28px" ,borderRadius:"4px",border:"none"}}>1</button>
                    <button onClick={handleClick} name="2" className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 0px" , margin:"10px" ,borderRadius:"4px" ,border:"none"}} >2</button>
                    <button onClick={handleClick} name="3" className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px" ,border:"none"}}>3</button>
                    <button  onClick={handleClick} name="+" className="col-sm-2" style={{backgroundColor:"cyan" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px",border:"none"}}>+</button>
                </div>
                <div className="row">
                    <button onClick={handleClick} name="4"className="col-sm-2 " style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px",marginLeft:"28px",borderRadius:"4px",border:"none"}}>4</button>
                    <button onClick={handleClick} name="5"className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 0px" , margin:"10px" ,borderRadius:"4px",border:"none"}} >5</button>
                    <button onClick={handleClick} name="6"className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px",border:"none"}}>6</button>
                    <button onClick={handleClick} name="-"className="col-sm-2" style={{backgroundColor:"cyan" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px",border:"none"}}>-</button>
                </div>
                <div className="row">
                    <button onClick={handleClick} name="7"className="col-sm-2 " style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px",marginLeft:"28px",borderRadius:"4px",border:"none"}}>7</button>
                    <button onClick={handleClick} name="8"className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 0px" , margin:"10px" ,borderRadius:"4px",border:"none"}} >8</button>
                    <button onClick={handleClick} name="9"className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px",border:"none"}}>9</button>
                    <button onClick={handleClick} name="*"className="col-sm-2" style={{backgroundColor:"cyan" ,padding:"15px 5px" , margin:"10px" ,borderRadius:"4px",border:"none"}}>*</button>
                </div>
                <div className="row">
                    <button onClick={handleClick} name="/" className="col-sm-2 " style={{backgroundColor:"cyan" ,padding:"15px 5px" , margin:"10px",marginLeft:"28px",borderRadius:"4px",border:"none"}}>/</button>
                    <button onClick={handleClick} name="0" className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 0px" , margin:"10px",borderRadius:"4px",border:"none"}} >0</button>
                    <button onClick={handleClick} name="." className="col-sm-2" style={{backgroundColor:"green" ,padding:"15px 5px" , margin:"10px",borderRadius:"4px",border:"none"}}>.</button>
                    <button onClick={calculate} className="col-sm-2" style={{backgroundColor:"cyan" ,padding:"15px 5px" , margin:"10px",borderRadius:"4px",border:"none"}}>=</button>
                </div>
                
            </div>
            <button className="btnAll" onClick={clearAll}>Clear All</button>
        </div>
    )
}

export default Calculator
