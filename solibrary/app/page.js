'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'

export default function Home() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build Your Own Recursive Ordinal</title>
  </head>
  <body style="margin: 0px">
    <div>
      <img style="width:100%;margin:0px" src="/content/01b00167726b0187388dd936" />
    </div>
  </body>
</html>`)
  const [language, setLanguage] = useState('html')

  const handleCodeChange = (value) => {
    setCode(value)
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6 bg-gray-800">
        <h1 className="text-lg font-semibold">solibrary</h1>
        <Button variant="outline" size="sm">
          Connect Wallet
        </Button>
      </header>
      <main className="flex flex-1 p-4 md:p-10">
        <div className="flex flex-1 gap-4">
          <div className="w-1/2 p-4 bg-gray-800 rounded-md">
            <div className="flex items-center justify-between pb-4 border-b">
              <Tabs defaultValue="HTML" onValueChange={(value) => setLanguage(value.toLowerCase())}>
                <TabsList>
                  <TabsTrigger value="HTML">HTML</TabsTrigger>
                  <TabsTrigger value="Image">Image</TabsTrigger>
                  <TabsTrigger value="SVG">SVG</TabsTrigger>
                  <TabsTrigger value="JSON">JSON</TabsTrigger>
                  <TabsTrigger value="P5.js">P5.js</TabsTrigger>
                  <TabsTrigger value="Other Files">Other Files</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="ghost">
                <RefreshCwIcon className="w-4 h-4" />
              </Button>
            </div>
            <CodeMirror
              value={code}
              height="400px"
              extensions={[language === 'html' ? html() : javascript()]}
              onChange={handleCodeChange}
              theme="dark"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 p-4 bg-gray-800 rounded-md">
            <iframe
              srcDoc={code}
              className="w-full h-[400px] mb-4 border border-gray-700"
              title="Preview"
            />
            <Button variant="outline">Preview in Full Screen</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}