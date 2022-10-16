const elements = document.querySelectorAll(".btn1")
elements.forEach(element =>{
    element.addEventListener('click', ()=>{

        let command = element.dataset['elements'];
        if(command == 'createlink || command == "insertImage')
        {
            let url = prompt("enter the link here","http://");
            document.execCommand(command,false,url);
            console.log(command);
        }
        document.execCommand(command,true,null); 
        console.log("clicked ") 

    });
})