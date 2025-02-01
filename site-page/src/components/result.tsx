import React from 'react'

interface PromptResultDetails {
  prompt: string;
  snippet: string;
  keywords: string[];
}

const PromptResult = ({
  prompt,
  snippet,
  keywords
}: PromptResultDetails) => {
  return (
    <div className="mt-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-2">Your Prompt:</h2>
        <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">{prompt}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-2">Generated Snippet:</h2>
        <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">{snippet}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-2">Keywords:</h2>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PromptResult