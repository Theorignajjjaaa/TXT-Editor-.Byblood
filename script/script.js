let dsi = document.querySelector('.tick')

dsi.onclick = () =>{
    alert("clears")
    let contents = document.querySelector('.read').innerText;
    contents = ("");
}

const downloadFile = () => {
    alert("file Downloaded");
    const link = document.createElement("a");
    let content = document.querySelector('.read').innerText;
    const file = new Blob([content],{ type: 'text, charset=utf-8' , endings: "native"});
    console.log(file)
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};

