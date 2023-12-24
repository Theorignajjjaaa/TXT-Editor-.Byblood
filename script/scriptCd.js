let Comand_Dox = document.querySelector('.comand_Box')



Comand_Dox.addEventListener('keyup', (event) => {
    var name = event.key;
    let Comand_IN = Comand_Dox.value.toLowerCase();
    if (name === 'Enter') {
        alert(Comand_Dox.value);
        if (Comand_IN === "save"){
            alert("Save Comand Exicuted");
        }
        else if (Comand_IN === ""){
            alert("No Comand")
        }
        else if (Comand_IN === "clear"){
            alert("Clear Comand Exicuted")
        }
        else if (Comand_IN === "new"){
            alert("New Comand Exicuted")
        };

        Comand_Dox.value = ("");
    }
  }, false);

