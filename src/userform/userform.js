import{useState} from "react";
import axios from "axios";

function Userform(){ //component,controller
    //Model
    const[userform,setUserform]=useState({
    name:'Ram',
    phoneNumber:'1234567890'
    });
    const save=function(event){
        
        console.log(userform.name);
        axios
        .post('http://localhost:8080/user',userform)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(//view
        <div>
            <input value={userform.name} name="name"onChange={updateState}></input>
            <input value={userform.phoneNumber} name="phoneNumber" onChange={updateState}></input>
            <button onClick={save}>Save</button>
        </div>
    );
    // function save(){
    //     console.log(userform.name);
    //     console.log(userform.age);
    // }
   function updateState(event){
       const current = { ...userform ,//spread operator
    // console.log(event);
            [event.target.name]: event.target.value};
    console.log(current);
    setUserform(current);
    }
//name=event.target.value;

    // function  handleEvent1(event1){
    //     // console.log(event);
    //     setUserform({
    //     age:event1.target.value
    // })
    // //name=event.target.value;
    //     }
    
}
export default Userform;