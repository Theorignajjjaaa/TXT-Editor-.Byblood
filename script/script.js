let dsi = document.querySelector('.tick')
let Comand_Dox = document.querySelector('.comand_Box')
let Write_Box = document.querySelector('.read')


Comand_Dox.addEventListener('keyup', (event) => {
    var name = event.key;
    let Comand_IN = Comand_Dox.value.toLowerCase();
    if (name === 'Enter') {
        alert(Comand_Dox.value);
        if (Comand_IN === "save"){
            alert("Save Comand Exicuted");
            downloadFile();
        }
        else if (Comand_IN === ""){
            alert("No Comand")
        }
        else if (Comand_IN === "clear"){
            alert("Clear Comand Exicuted");
            clear();
        }
        else if (Comand_IN === "new"){
            alert("New Comand Exicuted")
        }
        else if (Comand_IN.startsWith("c")){
            alert("Color Comand Exicuted")
        }
        else{"Invalid Command"};

        Comand_Dox.value = ("");
    }
  }, false);


dsi.onclick = () =>{
    if (confirm("Save ?")) {
        downloadFile();
      } else {
        clear();
      }
    
}

function clear(){
    alert("Screen cleared!");
    let contents = document.querySelector('.read');
    contents.innerText = ("");
}
const downloadFile = () => {
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == "") {
        person ="no-name"
    } else if (person == null) {
        return;
    }
    //rest//
    alert("File  Title( "+person+ " ) Downloaded");
    const link = document.createElement("a");
    let content = document.querySelector('.read').innerText;
    const file = new Blob([content],{ type: 'text, charset=utf-8' , endings: "native"});
    console.log(file)
    link.href = URL.createObjectURL(file);
    link.download = person+".txt";
    link.click();
    URL.revokeObjectURL(link.href);
};

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === '/' && 'ctrlKey') {
        Comand_Dox.focus();
    }
  }, false);