const downloadFile = () => {
    alert("file Downloaded")
    const link = document.createElement("a");
    const content = document.querySelector('.read').textContent;
    const file = new Blob([content],{ type: 'text, charset=utf-8'});
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };