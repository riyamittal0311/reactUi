import React,{useState} from 'react'

const TestCase =()=>{
    const [val,setVl] = useState('')

    // const onChange =(e)=>{
    //     setVl(e.target.value)
    // }

    return(<div id='check'>

        <input data-testid='inputId' type='text' onChange={e=> setVl(e.target.value)} value={val}/>
        
        <div  data-testid='divId'>{val}</div>
    </div>)

}

export default TestCase