import React, { useState } from 'react'
import Btn from './Btn'

const App = () => {
    const [count,setCount] = useState(1)
    const [sum,setSum]=useState(1)
    const handleClick=()=>{
        setCount(count+1)
        setSum(sum+count+1)
    }
    return (
        <div style={{
            textAlign: 'center',
            fontSize: 50,
            color:'#444',
        }}>
            <header style={{
                padding: 30,
                background: '#f99',
                color: 'white',
                fontSize: 50,
            }}>SUM UP COUNTER</header>
            <p>1から{count}までの合計：{sum}</p>
            <button style={{
                width:50,
                height:50,
                fontSize:40,
                borderColor:'#444',
                backgroundColor:'#fdd',
                borderRadius:'20%',
            }} onClick={handleClick}>+</button>
        </div>
    )
}

export default App
