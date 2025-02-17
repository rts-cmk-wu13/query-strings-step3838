fetch("/data/destinations.json")
    .then (response => response.json())
    .then (data => {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination => `<a href="destination.html?id=${destination.id}">
            ${destination.title}
            </a>`).join("")
            document.querySelector("#root").append(sectionElm)
    }) 

/*     fetch("/data/destinations.json")
    .then (response => response.json())
    .then (data => {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination => `<a href="index.html?id=1">heknek</a>`).join("")
            document.querySelector("#root").append(sectionElm)
    })
 */