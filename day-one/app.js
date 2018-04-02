addMission();
addZip();

// Adds representatives mission statement to the page
function addMission() {
    let rep = document.querySelector('#rep'),
        newSection = document.createElement('section'),
        mission = "My mission is to do good things";
    
    newSection.textContent = mission;
    rep.appendChild(newSection);
}

// Creates new attribute for representative to include zip code
function addZip() {
    let rep = document.querySelector('#rep');
    rep.setAttribute('congressional-district', '37209');
}
