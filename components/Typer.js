import React from 'react'
import Typewriter from 'typewriter-effect'

function Typer() {
  return (
    <div className="flex ">
      <Typewriter
        options={{
          strings: ['Hello', 'Hola', 'Привет', 'こんにちは', '你好'],
          autoStart: true,
          loop: true,
        }}
      />
      <h1>I'm Srujan</h1>
    </div>
  )
}

export default Typer
