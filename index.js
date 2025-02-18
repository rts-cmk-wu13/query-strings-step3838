let favorites = readFromLocalStorage("favorites") || []
console.log(favorites);


fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")

        sectionElm.innerHTML = data.destinations.map(destination => {
            return `
            <article class="class">
                <figure class="card_imgcontainer">
                    <img style="view-transition-name: image-transition-${destination.id}" src="/img/${destination.imagie}">
                </figure>
                <button class="card__favoritebtn"> data-favid="${destination.id}">heart</button>
                <a href="destination.html?id=${destination.id}">
                    more
                </a>
            </article>
            `
        })
    })