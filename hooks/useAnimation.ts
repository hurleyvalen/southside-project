"use client";
import React, { useState } from 'react'

const useAnimation = () => {
    const[loaded,setLoaded] = useState(false);

    window.addEventListener('load', ()=>{
        setLoaded(true);
    })

    return{loaded}
}

export default useAnimation;