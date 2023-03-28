import React from 'react'

export default function ClientsTable(props) {
    let arry = []
    let sum = 0
    for (let i = 0; i < props.mishaps.length; i++) {
        let code = props.mishaps[i]
        for (let j = 0; j < props.mishapArr.length; j++) {
            if (props.mishapArr[j].code == code) {
                arry.push(props.mishapArr[j])
                sum += props.mishapArr[j].cost
            }
        }
    }

    const shoeTab = () => {
        return arry.map((val) => {
            return <tr>
                <td style={{ border: '4px black solid',fontFamily:'cursive',fontSize:'15px' }}>{val.code}</td>
                <td style={{ border: '4px black solid',fontFamily:'cursive',fontSize:'15px' }}>{calcTime(val.time)}</td>
                <td style={{ border: '4px black solid',fontFamily:'cursive',fontSize:'15px' }}>{val.cost}</td>
            </tr>
        })
    }
    const calcTime = (time) => {
        let number = 0;
        let counter = 0;
        if (time < 9) {
            return time + ' hours'
        }
        if (time % 9 == 0) {
            number = time / 9
            return number + ' days'
        }
        while (time > 9) {
            counter++
            time = time - 9
        }
        return counter + ' days ' + time + ' hours'
    }

  return (
    <div>
    <table style={{ marginLeft:'50px', width: '450px', height: '200px', border: '2px black solid', borderCollapse: 'collapse' }}>
        <tr >
            <td style={{ border: '4px black solid',fontFamily:'initial',fontSize:'30px' }}>code</td>
            <td style={{ border: '4px black solid',fontFamily:'initial',fontSize:'30px' }}>time</td>
            <td style={{ border: '4px black solid',fontFamily:'initial',fontSize:'30px' }}>cost</td>
        </tr>
        {shoeTab()}
        {<tr style={{height:'20px',fontFamily:'initial',fontSize:'30px', border: '4px black solid'}}>
           <td></td> total price:  {sum}
        </tr>}
    </table>
</div>
  )
}
