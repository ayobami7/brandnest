'use client';

import React, { useState } from 'react'
// import axios from "axios";

interface PromptFormDetails{
  prompt: string;
  setPrompt: any;
  onSubmit: () => void
}


const PromptForm = ({
  prompt,
  setPrompt,
  onSubmit
}:PromptFormDetails) => {
  
  return (
    <div>
        {/* <form action=""> */}
            <label htmlFor="promptform"></label>
            <input 
                id="promptform"
                type="text"
                value={prompt}
                onChange={(e)=> setPrompt(e.target.value)}
                placeholder='coffee' 
                className='text-black'
            />
            <button 
              // type="submit"
              onClick={onSubmit}
            >
              Submit
            </button>
        {/* </form> */}
    </div>
  )
}

export default PromptForm