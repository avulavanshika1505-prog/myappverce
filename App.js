import axios from "axios"
import {useState} from "react"

function App(){
  const [data, setData] = useState(
    {
      username: "",
      password: ""
    }
  )

  const changeData = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitData = ()=>{
    const res = axios.post("http://localhost:8080/login", data)
    console.log(res)
  }
  return(
    <>
    <h1>Welcome To Login Page</h1>
    <input onChange={changeData} name="username" placeholder="enter username" /> <br />
    <input onChange={changeData} name="password" placeholder="enter password" /> <br />
    <button onClick={submitData}>Login</button>
    </>
  )
}
export default App;