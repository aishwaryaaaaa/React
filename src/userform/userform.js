import{useState} from "react";

function Userform(){ //component,controller
    //Model
    const[userform,setUserform]=useState({
    name:'Ram'
    })
    return(//view
        <div>
            <input value={userform.name} onChange={handleEvent}></input>
        </div>
    )
   function  handleEvent(event){
    console.log(event);
    setUserform({
    name:event.target.value
})
//name=event.target.value;
    }
}
export default Userform;