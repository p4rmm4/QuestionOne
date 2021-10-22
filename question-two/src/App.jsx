import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [array, setArray] = useState([])
  const [filterarray, setfilterArray] = useState([])
  const [input, setInput] = useState("")
  
  useEffect(() => {
    fetchDat()
  }, [])

  const fetchDat = ()=>{
    fetch("https://api.publicapis.org/categories")
    .then((res)=>res.json())
    .then((res)=>{
      setArray(res)
      setfilterArray(res)
    })
   
  }
  
  

  return (
    <div className="App">
      {array.length === 0?  
      "rendering" :
       <MapData 
        array={array} 
        setInput={setInput} 
        input={input}
        setArray={setArray}
        setfilterArray={setfilterArray}
        filterarray={filterarray}
      />}
    </div>
  )
}

const MapData =(props)=>{

  const {array, setInput, input, filterarray, setfilterArray} = props
    
  const onChangeHandle =(e)=>{
    setInput(e.target.value)
    let filter = array.filter(item => item === e.target.value)
    if(filter.length !== 0){
      setfilterArray(filter)
    } else {
      setfilterArray(array)
    }
  }


  return (
    <>
     <div>
        <input type="text" value={input} onChange={onChangeHandle}/>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
          {filterarray.map((item, index)=>(
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
     
    </>
  )
}

export default App
