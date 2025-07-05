// Create the 'Portfolio' page view
function buildPortfolio() {
    let portfolios = document.getElementById("portfolios");
    let parsed_portfolio_list = JSON.parse(JSON.stringify(portfolio_list));

    parsed_portfolio_list.forEach((portfolio_item) =>
        portfolios.innerHTML +=
            `<div class="portfolio-item">
                    <div class="image">
                        ${create_image(portfolio_item.image_file)}
                    </div>
                    <div class="hover-item">
                        <h3>${portfolio_item.example_name}</h3>
                        <div class="icons">
                            ${create_link(portfolio_item.links)}
                        </div>
                        <br/>
                        <p class="portfolio-text">
                            ${portfolio_item.tools}
                        </p>
                    </div>
                </div>
        `)
    }


// Create and insert 'Image'
function create_image(images) {
    let image_list = "";

    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        image_list += insert_image(image)
    }

    return image_list;
}

function insert_image(image) {
    return ( `<img alt="${image.alt}" src="${image.src}"/>` );
}

// Create and insert 'Links'
function create_link(links) {
    let link_list = "";

    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link_list += insert_link(link)
    }

    return link_list;
}

function insert_link(link) {
    return ( `<a class="icon" href="${link.link}" target="_blank">
                    <i class="${link.type}"></i>
                </a>` );
}