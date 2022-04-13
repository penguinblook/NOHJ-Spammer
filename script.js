alert("NOHJ ChatTool\n\ncoded by zastix")
alert("Press ' \\' to open the UI")
window.addEventListener("keydown", function(e) {
        if (e.key == `\\`) {
            switch(Number(prompt("What would you like to do\n\nSpam - 1\nSpoof Username - 2\nChat-Breaker - 3\n\nMore soon!"))) {
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
                          socket.emit('chat message', {
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
                          socket.emit('chat message', {
                            message: `<text style='font-size:500000rem;background-color:black;'></text>`,
                            user: ""
                          })
                          }, 1000)
                    break;
            }
        }
    })
