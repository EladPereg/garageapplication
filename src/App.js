import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import { useState } from 'react'
import NewClient from './components/NewClient';
import Clientpage from './components/Clientpage';
import Paypage from './components/Paypage';
function App() {
  const [clientsArr, setClientsArr] = useState([
    { name: 'moshe', id: 123456789, address: 'ttt', phoneNumber: '0505543215', carNumber: 17852102, mishaps: [111, 222] },
    { name: 'yosi', id: 258963147, address: 'ppp', phoneNumber: '0524123654', carNumber: 98563215, mishaps: [333, 444] },
    { name: 'eli', id: 987456322, address: 'kkk', phoneNumber: '0547543652', carNumber: 71423599, mishaps: [555, 666] }
  ])
  const addNewClient = (name, id, address, phoneNumber, carNumber, /*code*/) => {
    setClientsArr([...clientsArr, { name, id, address, phoneNumber, carNumber, /*mishaps: [Number(code)]*/mishaps }])
  }

  console.log(clientsArr)
  const [mishapArr, setMishapArr] = useState([
    { code: 111, desc: 'broken lamp', time: 20, cost: 60 },
    { code: 222, desc: 'broken mirror', time: 10, cost: 50 },
    { code: 333, desc: 'pantcher', time: 25, cost: 40 },
    { code: 444, desc: 'broken car wipers', time: 10, cost: 100 },
    { code: 555, desc: 'new car engine', time: 30, cost: 2500 },
    // { code: 666, desc: 'new alternator', time: 32, cost: 1800 },
  ])
  const deletsOne = (i) => {
    let temp = [...clientsArr]
    temp.splice(i, 1)
    setClientsArr(temp)
  }

  const [mishaps, setMishaps] = useState([])
  const addTomishaps = (code) => {
    mishaps.push(Number(code))
    setMishaps([...mishaps])
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage clientsArr={clientsArr} />} />
          <Route path='/newclient' element={<NewClient addNewClient={addNewClient} mishapArr={mishapArr} addTomishaps={addTomishaps} mishaps={mishaps}/>}/>
         {
          clientsArr.map((val)=>{
            return  <Route path={`/client${val.name}`} element={<Clientpage val={val} clientsArr={clientsArr} mishapArr={mishapArr}/>} />
          })
         }
         {
          clientsArr.map((val)=>{
            return <Route path={`/paypage${val.name}`} element={<Paypage val={val} clientsArr={clientsArr} mishapArr={mishapArr} deletsOne={deletsOne}/>}/>
          })
         }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
