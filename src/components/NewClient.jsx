import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NewClient(props) {
    const nav = useNavigate()
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [carNumber, setCarNumber] = useState('')
    const [code, setCode] = useState('')
    let x = props.mishapArr.find((val) => { return val.code == code })

    const check = () => {
        let numberId = Number(id)
        let numberPhone = Number(phoneNumber)
        let numberCar = Number(carNumber)
        if (name.length == 0 || id.length == 0 || address.length == 0 || phoneNumber.length == 0 || carNumber.length == 0) {
            alert('Please fill in all text fields')
        }
        else if (x == null) {
            alert('code number does not exist')
        }
        else if (/\d/.test(name) || name.length < 1) {
            alert('Name should contain more than one letter and only letters')
        }
        else if (id.length != 9 || id != numberId) {
            alert('id need to contain 9 digits')
        }
        else if (address.length < 1) {
            alert('plase enter addrees')
        }
        else if (phoneNumber.length < 10 || phoneNumber != numberPhone) {
            alert('please check your phone number')
        }
        else if (carNumber != numberCar || carNumber.length == 0) {
            alert('car number need to contain only digits')
        }
        else {
            props.addNewClient(name, id, address, phoneNumber, carNumber, /*code*/)
            nav('/')
        }
    }

    const add = () => {
        if (x == null) {
            alert('code number does not exist, please select a code number from the mishaps table')
        }
        else {

            props.addTomishaps(code)
            const element = document.getElementById('inp');
            element.value = '';
        }
    }

    const showMishaparr = () => {
        return props.mishapArr.map((val) => {
            return <tr>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{val.code}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{val.desc}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{val.cost}</td>
            </tr>
        })
    }


    return (
        <div id='newClientDiv'>
            <div id='mininewClientDiv'>
                <h1>please enter yout details</h1>
                <input className='NCinps' onChange={(e) => { setName(e.target.value) }} type='text' placeholder='name' /> <br />
                <br />
                <input className='NCinps' onChange={(e) => { setId(e.target.value) }} type='text' placeholder='id' /> <br />
                <br />
                <input className='NCinps' onChange={(e) => { setAddress(e.target.value) }} type='text' placeholder='address' /> <br />
                <br />
                <input className='NCinps' onChange={(e) => { setPhoneNumber(e.target.value) }} type='text' placeholder='phoneNumber' /> <br />
                <br />
                <input className='NCinps' onChange={(e) => { setCarNumber(e.target.value) }} type='text' placeholder='carNumber' /> <br />
                <br />
                < input id='inp' onChange={(e) => { setCode(e.target.value) }} type='number' placeholder='code' />
                <button onClick={() => { add() }} style={{ marginLeft: '10px', borderRadius: '10px', backgroundColor: 'transparent' }}>ADD</button> <br />
                enter Mishap code
                <br />
                <br />
                <button style={{ width: '100px', height: '30px', borderRadius: '30px', backgroundColor: 'transparent', fontSize: '20px', fontFamily: 'monospace' }} onClick={() => { check() }}>create</button>
            </div>
            <h2 id='h2NC'>mishaps table</h2>
            <table id='NCtable' style={{ border: '2px black solid', borderCollapse: 'collapse' }}>
                <tr>
                    <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>code</td>
                    <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>desc</td>
                    <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>cost</td>
                </tr>
                {showMishaparr()}
            </table>
        </div>
    )
}
