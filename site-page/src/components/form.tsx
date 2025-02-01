'use client';

import React from 'react'

interface PromptFormDetails {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void
}

const PromptForm = ({
  prompt,
  setPrompt,
  onSubmit
}: PromptFormDetails) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., coffee shop, eco-friendly products"
        className="flex-grow p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Generate Ideas
      </button>
    </form>
  )
}

export default PromptForm