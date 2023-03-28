import React,{useState} from 'react'
import {Link,useNavigate} from'react-router-dom'

export default function Homepage(props) {
    const nav = useNavigate()
    const [radio, setRadio] = useState(true)
    const showSelect = () => {
        if (radio === true) {
            return <select className='select' onChange={(e) => { nav(e.target.value) }}>
                <option>choose id</option>
                {props.clientsArr.map((val) => {
                    return <option style={{ backgroundColor: 'yellowgreen', color: 'white', fontSize: '20px' }} value={`/client${val.name}`}>
                        {val.id}
                    </option>
                })}
            </select>
        }
        else {
            return <select className='select' onChange={(e) => { nav(e.target.value) }}>
                <option>choose carNumber</option>
                {props.clientsArr.map((val) => {
                    return <option style={{ backgroundColor: 'aquamarine', fontSize: '20px' }} value={`/client${val.name}`}>
                        {val.carNumber}
                    </option>
                })}
            </select>
        }
    }
  return (
    <div id='homeDiv'>
            <h1>SV-Garage</h1>
            <h2>welcome , new client? click here</h2>
            <Link to='/newclient'> <button id='homePageBtn' style={{width:'150px',height:'35px',borderRadius:'45px',backgroundColor:'transparent'}}>new client</button></Link> <br />
         <h2 style={{marginTop:' 180px'}}>If you have already registered in the system, please select your ID or car number</h2>
            {showSelect()}
            <div >
                <input onClick={() => { setRadio(true) }} type='radio' name='c' defaultChecked />
                <label>id</label>
                <input onClick={() => { setRadio(false) }} type='radio' name='c' />
                <label>carNumber</label>
            </div>

        </div>
  )
}
