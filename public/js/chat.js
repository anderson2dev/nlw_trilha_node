document.querySelector("#start_chat").addEventListener("click", (event) => {
  const chat_help = document.querySelector('#chat_help');
  chat_help.style.display = "none";
  const chat_in_support = document.querySelector('#chat_in_support');
  chat_in_support.style.display = "block";
  const socket = io();
  const description = document.querySelector("#txt_help").value;
  const email = document.querySelector("#email").value;
  
  socket.on("connect", () => {
    socket.emit('client_first_access', {description, email}, (call, error) => {
      if(err)
        console.trace(err);
      else
        console.log(call);
    });
  })
});
