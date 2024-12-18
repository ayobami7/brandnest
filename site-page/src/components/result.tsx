import React from 'react'

interface PromptResultDetails{
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
    <div className='py-2'>
        <div>
            <h1>Prompt:</h1>
            {prompt}
        </div>
        <div>
            <h1>Snippet:</h1>
            {snippet}
        </div>
        <div>
            <h1>Keywords:</h1>
            {keywords}
        </div>
    </div>
  )
}

export default PromptResult