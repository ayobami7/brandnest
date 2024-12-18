"use client"

import React, { useState } from 'react'
import PromptForm from './form'
import PromptResult from './result'

const Brandnest = () => {
  const [prompt, setPrompt] = useState('')
  const [snippet, setSnippet]= useState("")
  const [keywords, setKeywords] =useState([])

  const BASE_URL = "http://127.0.0.1:8000"

  const onSubmit= ()=>{
    console.log("prompt:",prompt)
    // const result = fetch(`${process.env.BASE_URL}/generate_snippets_and_keywords?prompt=${prompt}`)
    fetch(`${BASE_URL}/generate_snippets_and_keywords?prompt=${prompt}`).then((res)=>res.json()).then(onResult)
  }

  const onResult = (data: any) => {
    setSnippet(data.snippet)
    setKeywords(data.Keywords)
  }

  return (
    <div className='border p-2 m-2 rounded-md w-[90%]'>
        <h1>Brandnest</h1>
        <h2>Your AI Branding Assistant</h2>
        <p>Let me help you with generating branding ideas for your product <br /> 
          Tell me what ypur brand is about
        </p>
        <PromptForm prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit}/>

        <PromptResult prompt={prompt} snippet={snippet} keywords={keywords} />
    </div>
  )
}

export default Brandnest