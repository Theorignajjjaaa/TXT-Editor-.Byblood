let dsi = document.querySelector('.tick')

dsi.onclick = () =>{
    if (confirm("Save ?")) {
        downloadFile();
      } else {
        alert("Screen cleared!")
        let contents = document.querySelector('.read');
        contents.innerText = ("");
      }
    
}

const downloadFile = () => {
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == "") {
        person ="no-name"
    } else if (person == null) {
        return;
    }
    
    
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

