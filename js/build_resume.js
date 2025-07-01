window.onload = function() {
    create_techprof_section();
    create_certs_section();
    create_profexp_section();

}


const fragment = document.createDocumentFragment();
const li = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);


////////// FUNCTIONS //////////

// Create the 'Technical Proficiencies' section
function create_techprof_section() {
    let toolbox = document.getElementsByClassName("toolbox")[0];

    techprof_list.forEach((toolbox_item) =>
        toolbox.innerHTML += '<div class="toolbox-item"><h5>' + toolbox_item + '</h5></div>' );
}

// Create the 'Certification & Awards' section
function create_certs_section() {
    let timeline = document.getElementsByClassName("timeline")[0];

    cert_list.forEach((cert_item) =>
        timeline.innerHTML +=
            `<div class="timeline-item">
                <div class="tl-icon">
                    <i class="fa-solid fa-certificate"></i>
                </div>
                <p class="tl-duration">${cert_item.year}</p>
                <h5>${cert_item.cert}<br/>
                    <span>${cert_item.org}</span>
                </h5>
              </div>`
    )

}

// Create the 'Professional Experience' section
function create_profexp_section() {
    let profexp_timeline = document.getElementById("prof_exp");
    let profexp_parse = JSON.parse(JSON.stringify(profexp_list));

    profexp_parse.forEach((profexp_item) => {
        profexp_timeline.innerHTML +=
            `<div class="timeline-item"><div class="tl-icon"><i class="fa-solid fa-briefcase"></i></div>
                <p class="tl-duration">${profexp_item.years}</p><h5>${profexp_item.role}<br><span>${profexp_item.company}</span></h5>
            <div class="tl-tools">`;

                profexp_item.tools.forEach(tool =>
                    profexp_timeline.innerHTML += `<div class="tl-item">${tool}</div>`);

        profexp_timeline.innerHTML +=
            `</div>        
            
            <div class="job-desc">
                <ul>
                    <li>${profexp_item.description}</li>
                </ul>
            </div>
        </div>`;
    })

}

    function create_tools_section(tools) {

        return (tools.forEach(tool =>
            `<div class="tl-item">${tool}</div>`,
            )
        )

}
////////// END FUNCTIONS //////////


