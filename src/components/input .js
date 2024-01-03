import React from "react";
import Button from "./button";


const Inputfeild =({task,setTask,data,setData,state,savetask})=>{

     const inputdata=(event) => {
        setData( event.target.value)
        console.log("data****",data)
      };
      const addtask =()=>{
       setTask([...task,{
        text : data,
        imp : false,
        stage : false
       }])
       console.log("<<<<taskk>>>>",task);
       setData('')
       console.log(">>>>>data",data)
         
        
    }
    return(
      <div className="inputarea">
             <input type="text" placeholder="Enter Your Task" onChange={inputdata} value={data} className="Inputfeild"/>
             {state?
                 <Button buttonText="Save" btnfun={savetask}/>
              :
                 <Button buttonText="Add" btnfun={addtask}/> 
             }
            
       
      </div>
       
    )
    
}

export default Inputfeild