addMission();

function addMission() {
    let rep = document.querySelector('#rep'),
        newNode = document.createElement('section'),
        mission = "My mission is to do good things";
    
    newNode.textContent = mission;
    rep.appendChild(newNode);
}
