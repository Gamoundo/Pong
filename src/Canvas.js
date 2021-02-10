import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)

  const drawLeftPaddle = rect => {
    rect.fillStyle = 'red'
    rect.fillRect(0,200, 20, 100)
  }

  const drawRightPaddle = rect => {
    rect.fillStyle = 'red'
    rect.fillRect(780,200, 20, 100)
  }

  const drawBall = ctx => {
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(400, 400, 10, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, 800, 800)
    drawLeftPaddle(context)
    drawRightPaddle(context)
    drawBall(context)
  }, [drawLeftPaddle])
  
  return <canvas ref={canvasRef} width={800} height={800} {...props}/>
}

export default Canvas