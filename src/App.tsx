import { ReactElement, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import './App.css'

function App (): ReactElement {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  function greetHandler (): void {
    // Learn more about Tauri commands at
    // https://tauri.app/v1/guides/features/command
    invoke<string>('greet', { name }).then((greetOutput) => {
      setGreetMsg(greetOutput)
    }).catch(() => {
      setGreetMsg('Error')
    })
  }

  return (
    <div>
      <h1>Welcome to Tauri!</h1>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <div>
        <input
          id="greet-input"
          onChange={(e) => { setName(e.currentTarget.value) }}
          placeholder="Enter a name..."
        />
        <button type="button" onClick={greetHandler}>
          Greet
        </button>
      </div>
      <p>{greetMsg}</p>
    </div>
  )
}

export default App
