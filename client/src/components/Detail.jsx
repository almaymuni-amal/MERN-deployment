import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router'

const Detail= ({id}) => {
    const [pirate, setPirate] = useState({})
    const [PegLeg, setPegLeg] = useState(pirate.isPegLeg)
    // const [EyePatch, setEyePatch] = useState(pirate.isEyePatch)
    // const [HookHand, setHookHand] = useState(pirate.isHookHand)


    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => setPirate(res.data))
    }, [])


    
    const onClickLeg=()=>{
        setPirate({...pirate,
            isPegLeg:!pirate.isPegLeg,
        })
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
        .then((res) => {
            console.log(pirate.isPegLeg)
        })
    }

    const onClickEye=()=>{
        setPirate({...pirate,
            isEyePatch:!pirate.isEyePatch,
        })
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
        .then((res) => {
            console.log(pirate.isEyePatch)
        })
    }

    const onClickHand=()=>{
        setPirate({...pirate,
            isHookHand:!pirate.isHookHand,
        })
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
        .then((res) => {
            console.log(pirate.isHookHand)
        })
    }
    const btn={
        marginLeft: 20,
        width: 100
    }
    
    return (
        <>
        <Link to="/"><button>Crew Board</button></Link>
        <h1>About</h1>
        <h3>{pirate.name}</h3>
        <div>
            <img  src={pirate.imgUrl} alt="pirate" />
            <p>Position:{" "}{pirate.position}</p>
            <p>Treasures:{" "}{pirate.NumOfChests}</p>
            <p>Phrase: {pirate.phrase}</p>

                <p>Peg Leg:{" "}
                    <label>
                        {pirate.isPegLeg? "Yes":"No"}
                        <button style={btn} onClick={onClickLeg} >{!pirate.isPegLeg? "Yes":"No"}</button>
                    </label>
                    
                </p>
                <p>Eye Patch:{" "}
                    <label>
                        {pirate.isEyePatch? "Yes":"No"}
                        <button style={btn} onClick={onClickEye} >{!pirate.isEyePatch? "Yes":"No"}</button>
                    </label>
                    
                </p>
                <p>Hand Hook:{" "}
                    <label>
                        {pirate.isHookHand? "Yes":"No"}
                        <button style={btn} onClick={onClickHand} >{!pirate.isHookHand? "Yes":"No"}</button>
                    </label>
                    
                </p>
        </div>
        </>
    )
}

export default Detail
