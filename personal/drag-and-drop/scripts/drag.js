//Drag and drop functionality
const allowDrop = (allowdropevent) => {
    allowdropevent.preventDefault();
}

const drag = (dragevent) => {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

const drop = (dropevent) => {
    dropevent.preventDefault();
    let data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
}