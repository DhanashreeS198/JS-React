import React from 'react'
import{useState}from 'react'

function Formhandeling() {

    const  [ name,setName]=useState("")
    const  [ email,setemail]=useState("")


    function result(){

      document.write("form submited")

    }

    


  return (
    <>      
        <h1 className='dhanu'>Employe Form</h1>

        <form>
          <input type={"text"}  value ={name} placeholder={"Enter your Name"}
             onChange = {(e)=>setName(e.target.value)} 
           /> 
            <br/>  <br/> 
         <input type={"email"} value={email} placeholder = {"Enter your email"}
           onChange = {(e)=>setemail(e.target.value)}/>

           <br></br><br></br>
          <button onClick={result}>Submit</button>
          <br/>  <br/> 
        </form>
       
    </>
  )

}

export default Formhandeling
