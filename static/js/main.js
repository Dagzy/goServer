let causes;
if(!causes){
    // fetch("http://localhost:9001/getBids")
    fetch("https://powerful-sands-61874.herokuapp.com//getBids")
    .then(res => res.json())
    .then(data => {
        causes = data.organizations;
        drawOrg(data.organizations);
    }).catch(err => {
        console.log(err);
    })
}

function drawOrg(orgs){
    const target = document.getElementById("cause-list");
    const i = Math.floor(Math.random() * orgs.length);
    const randomOrg = orgs[i]
    const panel = donatePanel(randomOrg);
    panel.appendChild(panelButtons(i));
    target.innerHTML = "";
    target.appendChild(panel)

}
function donatePanel(org){
    const panel = document.createElement("div");
    const panelHead = document.createElement("h2");
    const panelBody = document.createElement("div");
    const panelText = document.createElement("h3");
    const hr = document.createElement("hr");
    panelHead.innerText = `We found this organization that you may be interested in funding: \n \n ${org.name}`;
    panelText.innerText = `The current funding goal for this org is: \n \n $ ${org.goal} \n \n \n --Donate-- \n`;
    panel.appendChild(panelHead);
    panel.appendChild(hr);
    panel.appendChild(panelBody);
    panelBody.appendChild(panelText);
    return panel;
}
function panelButtons(org){
    const buttonPanel = document.createElement("div");
    const vals = [5, 10, 20, 50];
    vals.forEach((val) => {
        const button = document.createElement("button");
        button.innerText = `$ ${val}`;
        buttonPanel.appendChild(button);
        button.value = val;
        button.onclick = (e) => { 
            causes[org].goal -= val;
            alert(`Thanks for making a donation \n You make a difference! \n \n The new goal for this cause is: $${causes[org].goal}. \n \n Here's another organization that you may be interested in...`);
            drawOrg(causes)
        };
    })
    return buttonPanel
}