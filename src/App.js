import { use , useState } from "react"
import PostBar from './components/PostBar'
import NavBar from "./components/NavBar"







const App = () => {
  const [count , setCount] = useState(1)

  const updateState = () =>{
    setCount(count + 1)
  }
  
  return (
<>
      <NavBar/>
      <div style={{position: "relative" , top:40}}>
    <div style={{display:"flex " , justifyContent: "center", textAlign: "center", flexDirection: "column", width: 400, alignItems: "center", margin:  "auto", }}>
      <h1>{count}</h1>
      <button onClick={updateState}>Increment</button>
    <PostBar/>
   
   
    
  
    </div>
      </div>
</>
  )
  
}

export default App
