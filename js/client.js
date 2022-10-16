//  const socket = io('http://localhost:8000');
const socket = io('http://localhost:8000', { transports: ['websocket', 'polling', 'flashsocket'] });

// const form = document.getElementById('send-container');
// const msginput = document.getElementById('msginput');
// const msgcontainer = document.querySelector(".container");
 
 

const form = document.getElementById('send-container'); 
 
let msginput = document.getElementById('text-input'); 
let msgcontainer = document.querySelector(".container"); 
var audio = new Audio("ting.mp3");
 
const name = prompt("enter user to join ");
socket.emit('new-user-joined',name);

var append= (msg,position)=>{
    var messageelement = document.createElement('div');
    messageelement.innerHTML = msg;
    messageelement.classList.add('msg');
    messageelement.classList.add(position);
    msgcontainer.append(messageelement);
    console.log("input msg"+msginput.value);
    if(position == 'left')
    {
       audio.play();
    }
}

// form.addEventListener('submit',(e)=>{

//     e.preventDefault();
//     const message = msginput.value;
//     append(`You :${message}`,'right');
//     socket.emit('send',message);
//     msginput.value ='';
// })
 
form.addEventListener('submit',(e)=>{

  e.preventDefault();
  //  document.getElementById("msginput").innerHTML =te.value;
     
  var message = msginput.value;
  // var message = 
  console.log("form msg "+message);
    append(`You :${message}`,'right');
  // append(`You :${"hi"}`,'right');
  socket.emit('send',message);
  msginput.value ='';
})

socket.on('user-joined',name=>{

append(`${name} joined the chat`,'right');

});

socket.on('receive',data=>{

    append(`${data.name} : ${data.msg}`,'left');
  });
  socket.on('left',name=>{

    append(`${name} :  Left the chat`,'left');
  });
  // function my()
  // {
  //  document.getElementById("msginput").innerText=te.value;
  //     document.getElementById("a").innerText =te.value;
  // }
       