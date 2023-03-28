import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ClientsTable from './ClientsTable'

export default function Clientpage(props) {
    const nav=useNavigate()
    const [inp,setInp]=useState('')
    const [btnsFlag, setBtnsFlag] = useState(false)
    let y = props.mishapArr.find((val) => { return val.code == inp })

    const showTable = () => {
        return <ClientsTable y={y} mishapArr={props.mishapArr} clientsArr={props.clientsArr} mishaps={props.val.mishaps} />
    }
    const showDetails = () => {
        return <table style={{ width: '350px', height: '100px', border: '2px black solid', borderCollapse: 'collapse' }}>
            <tr >
                <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>name</td>
                <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>id</td>
                <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>address</td>
                <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>phoneNumber</td>
                <td style={{ border: '4px black solid', fontFamily: 'initial', fontSize: '30px' }}>carNumber</td>
            </tr>
            <tr>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{props.val.name}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{props.val.id}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{props.val.address}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{props.val.phoneNumber}</td>
                <td style={{ border: '4px black solid', fontFamily: 'cursive', fontSize: '15px' }}>{props.val.carNumber}</td>
            </tr>
        </table>
    }

    const [oneMishapArr, setOneMishapArr] = useState([])
    const [flagArr, setFlagArr] = useState(false)
    const checkInp = () => {
        if (inp.length == 0) {
            alert('אנא רשום מספר קוד')
        }
        else if (y == null) {
            alert('מס תקלה לא קיים')
        }
        else {
            oneMishapArr.push(y)
            setOneMishapArr([...oneMishapArr])
            console.log(oneMishapArr)
            setBtnsFlag(true)
            showBtn()
        }
    }

    const showBtn = () => {
        if (btnsFlag === true) {
            return <div>
                <button style={{ backgroundColor: 'transparent', height: '30px', borderRadius: '25px', marginTop: '10px' }} onClick={() => { showOneMishapArr(); setFlagArr(!flagArr) }}>show mishap detils</button>
                <button style={{ backgroundColor: 'transparent', height: '30px', borderRadius: '25px', marginTop: '10px', marginLeft: '10px' }} onClick={() => { addMishap(); clearInpValue(); clearOneMishapArr(); setFlagArr(false); }}>add mishap to my mishapsArr</button>
            </div>
        }
    }
    const showOneMishapArr = () => {
        if (flagArr === true) {
            return oneMishapArr.map((val) => {
                return <div style={{ border: '2px black solid', width: '500px', marginLeft: '36%' }}>
                    <h4>{`code: ${val.code} -|- desc: ${val.desc} -|- time: ${val.time} -|- cost: ${val.cost}`}</h4>
                </div>
            })
        }
    }
    const clearOneMishapArr = () => {
        setOneMishapArr([])
    }


    let arr = []
    for (let i = 0; i < props.val.mishaps.length; i++) {
        arr.push(props.val.mishaps[i])
    }
    const addMishap = () => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === Number(inp)) {
                alert('מס תקלה כבר קיים אצלך')
                break
            }
            else {
                props.val.mishaps.push(inp)
                break
            }
        }
    }
    console.log(arr)

    const clearInpValue = () => {
        const element = document.getElementById('inp');
        element.value = '';
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
    <div id='clientPageDiv'>
    <h2>hello {props.val.name}</h2>
    <div style={{ display: 'flex', marginLeft: '20%' }}>
        <h3 style={{ marginRight: '30px' }}>your details table {`=>`}</h3>
        {showDetails()}
    </div>


    <div style={{ display: 'flex', marginLeft: '20%', marginTop: '50px' }}>
        <h3 style={{ marginRight: '30px' }}> your mishaps table {`=>`}</h3>
        {showTable()}
    </div>

    <div style={{marginLeft:'20%'}}>
        <h5 style={{}}>{`In case that you need to add another mishap code, you can do it here`}</h5>
        <input style={{ border: '3px black solid', width: '200px', height: '30px', textAlign: 'center', borderRadius: '15px', marginTop: '30px', fontSize: '15px', backgroundColor: '#b297ea' }} id='inp' onClick={() => { setBtnsFlag(false) }} onChange={(e) => { setInp(e.target.value) }} type='text' placeholder='mishap code' />
        <button style={{ border: '3px black solid', width: '100px', height: '25px', borderRadius: '25px', backgroundColor: 'yellow', fontSize: '15px' }} onClick={() => { checkInp() }}>search</button>
        {showBtn()}
    </div>

    <div>
        {showOneMishapArr()}
    </div>
    <button style={{ height: '25px', borderRadius: '25px', marginTop: '10px', backgroundColor: '#b297ea', color: 'yellow',marginLeft:'20%' }} onClick={() => { nav(`/paypage${props.val.name}`) }}>go to pay page</button>
    <table id='clientPageTable' style={{ border: '2px black solid', borderCollapse: 'collapse' }}>
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
