import React, {useRef} from "react";



const UserForm=()=>{

const userNameRef=useRef()

const userPasswordRef=useRef()

const handleSubmit=(event)=>{
    event.preventDefault()
 const userName=userNameRef.current.value
const userPassword=userPasswordRef.current.value
  userNameRef.current.style.color="red"
  userPasswordRef.current.style.color="blue"

    console.log({userName,userPassword});

}


return(
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="userName">UserName</label>
       <input type="text" id="username" ref={userNameRef} placeholder="username"></input>
      </div>
      <div>
      <label htmlFor="Password">Password</label>
       <input type="password" id="Password" ref={userPasswordRef}></input>
      </div>
      <button type="submit">Register</button>
    </form>
)
}
export default UserForm