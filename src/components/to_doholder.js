import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Disp from "./display";
import Navigate from "./Routers";
import CompltHold from "./completeholder";
import PendingHold from "./pendingtaskholder";
import ImpHold from "./importantTaskholder";
import { useState } from "react";

const Holder=()=>{
    const [task, setTask] = useState([]);
    const [data,setData]=useState('');
    const [state, setState]=useState(false);
    const [edit ,setEdit]=useState('')
    return(
        <BrowserRouter>
            <div className="Holder">
                <Navigate/>
                <Routes>
                     <Route path="/" element={<Disp task={task} setTask={setTask} data={data} setData={setData} state={state} setState={setState} edit={edit} setEdit={setEdit} />}/>                    
                     <Route path="complete" element={<CompltHold task={task} setTask={setTask} />}/>  
                     <Route path="pending"  element={<PendingHold task={task} setTask={setTask}/>}/>  
                     <Route path="important"  element={<ImpHold task={task} setTask={setTask}/>}/>              
                </Routes>
                
            </div>
        </BrowserRouter>
        
    )
}
export default Holder;