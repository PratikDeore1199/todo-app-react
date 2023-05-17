import DatePicker from "./components/DatePicker.jsx"
import MessageBox from "./components/MessageBox.jsx"
import {AiFillPlusSquare,AiFillDelete} from "react-icons/ai"

function App() {
return(
  <div className="container mt-5">
    <div className="d-flex flex-row justify-content-center gap-3">
      <MessageBox></MessageBox>
      <DatePicker></DatePicker>
      <AiFillPlusSquare className="text-primary" size={40}/>
    </div>
    <div className="d-flex  flex-col justify-content-center">
      
      <ol className="list-group mt-4 w-75 text-center ">
        <h5>Overdue:</h5>
        <li className="list-group-item rounded-top d-flex align-items-center justify-content-between">
          <span className=" text-secondary" style={{fontSize:"12px"}}>{new Date().toLocaleDateString()}</span><span className="text-capitalise">First Task</span><AiFillDelete size={30} className="border rounded p-1" color="red"/>
        </li>
        <li className="list-group-item">A list item</li>
        <li className="list-group-item">A list item</li>
      </ol>
    </div>
  </div>
  )
}

export default App
