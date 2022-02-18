import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addAgeAction} from '../../store/action'
export const Home= () => {
    const dispatch=useDispatch();
    const state=useSelector(((state)=>state))

    return <div>
       <p>name: {state.name}</p>
       <p> age:{state.age}</p>
        <button onClick={()=>{
            dispatch(addAgeAction())
        }}>add</button>
    </div>
}
export default Home
