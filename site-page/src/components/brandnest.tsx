"use client"

import React, { useState } from 'react'
import PromptForm from './form'
import PromptResult from './result'

const Brandnest = () => {
  const [prompt, setPrompt] = useState('')
  const [snippet, setSnippet] = useState("")
  const [keywords, setKeywords] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const BASE_URL = "https://brandnest.onrender.com"

  const onSubmit = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${BASE_URL}/generate_snippets_and_keywords?prompt=${encodeURIComponent(prompt)}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log("data:", data)
      onResult(data)
    } catch (error) {
      setError("An error occurred while fetching the data. Please try again.")
      console.error("Fetch error:", error)
    } finally {
      setIsLoading(false)
    }
  }
  

  const onResult = (data: any) => {
    setSnippet(data.snippet)
    setKeywords(data.Keywords || [])
  }

  return (
    <div className="h-[100vh] w-full bg-gradient-to-br from-purple-50 to-blue-50">
      <div className={`flex items-center justify-center mt-10 w-[350px] md:w-[600px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden${snippet ? "" : "top-50" } `}>
        <div className="p-6 sm:p-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">Brandnest</h1>
          <h2 className="text-xl text-purple-700 mb-4">Your AI Branding Assistant</h2>
          <p className="text-gray-600 mb-6">
            Let me help you with generating branding ideas for your product. <br />
            Tell me what your brand is about.
          </p>

          <PromptForm prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} />

          {isLoading && (
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            </div>
          )}

          {error && (
            <div className="mt-6 text-red-500 text-center">
              {error}
            </div>
          )}

          {snippet && (
            <PromptResult prompt={prompt} snippet={snippet} keywords={keywords} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Brandnest
