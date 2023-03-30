import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export default function Paypage(props) {

    const[firstFlag,setFirestFlag]=useState(true)
    const [flag, setFlag] = useState(true)
    const [payBtn, setPayBtn] = useState(true)
    const [flagBtn, setFlagFlagBtn] = useState(false)

    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [digits, setDigits] = useState('')
    let arry = []
    let sum = 0
    for (let i = 0; i < props.val.mishaps.length; i++) {
        let mishap = props.val.mishaps[i]
        for (let j = 0; j < props.mishapArr.length; j++) {
            if (mishap == props.mishapArr[j].code) {
                arry.push(props.mishapArr[j])
                sum += props.mishapArr[j].cost
            }
        }
        console.log(sum)
    }

    const showMishaps = () => {
        if (flag === true) {
            return arry.map((val) => {
                return <div style={{ border: '2px black solid', width: '600px', marginLeft: '30%' }}>
                    <h4>mishap desc: {val.desc} -- cost: {val.cost}</h4>
                </div>
            })
        }
    }
    const pay = () => {
        if (number.length == 0 || date.length == 0 || digits.length == 0) {
            alert('Please fill in all text fields')
        }
        else if (number.length != 16) {
            alert('A credit card number should contain 16 numbers')
        }
        else if (digits.length != 3) {
            alert('Please enter only the last 3 digits on the back of the card')
        }
        else {
            if (number.length == 16 && digits.length == 3) {
                setFlag(false)
                setFlagFlagBtn(true)
                setPayBtn(false)
                setFirestFlag(false)
                arry = ''
                props.val.mishaps = []
            }
        }
    }

    const showFirstMSG = () => {
        if (firstFlag === true) {
            return <div>
                <h2>hello {props.val.name}</h2>
                <h3>Your mishaps is :</h3>
            </div>
        }
    }

    const showMessage = () => {
        if (flag === false) {
            return <h1>Thank you and goodbye !</h1>
        }
    }

    const backToHome = () => {
        props.clientsArr.find((val, index) => {
            if (val.name == props.val.name) {
                props.deletsOne(index)
            }
        })
    }
    const showBtn = () => {
        if (flagBtn === true) {
            return <Link to='/'> <button style={{borderRadius:'25px',width:'140px',height:'35px'}} onClick={() => { backToHome() }}  >Return to home page</button></Link>
        }
    }
    const shoePayBtn = () => {
        if (payBtn === true) {
            return <button style={{width:'100px',height:'30px',borderRadius:'10px'}} onClick={() => {pay();console.log(props.clientsArr)}}>pay all</button>
        }
    }
    const showprice = () => {
        if (flag === true) {
            return <div>total price: {sum}</div>
        }
    }
    const showPayArea = () => {
        if (flag === true) {
            return <div>
                <input className='inps' onChange={(e) => { setNumber(e.target.value) }} type='number' placeholder='card number' /> <br />
                <input className='inps' onChange={(e) => { setDate(e.target.value) }} type='month' placeholder='date' /> <br />
                <input className='inps' onChange={(e) => { setDigits(e.target.value) }} type='number' placeholder='trhee digits' /> <br />
            </div>
        }
    }
  return (
    <div id='payPageDiv'>
    {showFirstMSG()}
    {showMishaps()} <br />
    {showprice()}
    {showPayArea()}
    {shoePayBtn()}
    {showMessage()}
    {showBtn()}
</div>
  )
}
