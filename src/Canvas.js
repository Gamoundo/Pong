import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)

  let ballx= 400
  let paddleY=200
  const drawLeftPaddle = rect => {
    paddleY +=50
    rect.fillStyle = 'red'
    rect.fillRect(0,paddleY, 20, 100)
  }

  const drawRightPaddle = rect => {
    rect.fillStyle = 'red'
    rect.fillRect(780,200, 20, 100)
  }

  const drawBall = ctx => {
    ballx +=200
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(ballx, 400, 10, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    context.fillStyle = '#000000'
    context.fillRect(0, 0, 800, 800)
    drawLeftPaddle(context)
    drawRightPaddle(context)
    drawBall(context)
  }, [])
  
  return <canvas ref={canvasRef} width={800} height={800} {...props}/>
}

export default Canvas