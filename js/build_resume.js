function buildResume() {
    create_techprof_section();
    create_certs_section();
    create_profexp_section();
    create_prior_profexp_section();
    create_education_section();
}


////////// FUNCTIONS //////////

///// Create the 'Technical Proficiencies' section /////
function create_techprof_section() {
    let toolbox = document.getElementById("tech_prof");

    techprof_list.forEach((toolbox_item) =>
        toolbox.innerHTML += '<div class="toolbox-item"><h5>' + toolbox_item + '</h5></div>' );
}
// end technical proficiencies


///// Create the 'Certification & Awards' section /////
function create_certs_section() {
    let certs_timeline = document.getElementById("certs");

    cert_list.forEach((cert_item) =>
        certs_timeline.innerHTML +=
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
// end certification section


///// Create the 'Professional Experience' section /////
function create_profexp_section() {
    let profexp_timeline = document.getElementById("prof_exp");
    let profexp_parse = JSON.parse(JSON.stringify(profexp_list));

    profexp_parse.forEach((profexp_item) => {
        profexp_timeline.innerHTML +=
            `<div class="timeline-item"><div class="tl-icon"><i class="fa-solid fa-briefcase"></i></div>
                <p class="tl-duration">${profexp_item.years}</p><h5>${profexp_item.role}<br><span>${profexp_item.company}</span></h5>
            <div class="tl-tools"> 
                ${create_tools(profexp_item.tools)}
            </div> 
            
            <div class="job-desc">
                <ul>
                    ${create_details(profexp_item.description)}
                </ul>
            </div>
        </div>`;
    })
}

// Create and insert 'Tools'
function create_tools(tools) {
    let tool_list = "";

    for (let i = 0; i < tools.length; i++) {
        let tool = tools[i];
        tool_list += insert_tools(tool)
    }
    return tool_list;
}
function insert_tools(tool) {
    return ( `<div class="tl-item">${tool}</div>` );
}

// Create and insert 'Job Description/Details' //
function create_details(description) {
    let detail_list = "";

    for (let i = 0; i < description.length; i++) {
        let detail = description[i];
        detail_list += insert_details(detail)
    }
    return detail_list;
}
function insert_details(detail) {
    return (`<li>${detail}</li>`);
}
// end professional experience section


///// Create the 'Prior Professional Experience' section /////
function create_prior_profexp_section() {
    let prior_timeline = document.getElementById("prior-timeline");
    let prior_parse = JSON.parse(JSON.stringify(prior_profexp_list));

    prior_parse.forEach((prior_item) => {
        prior_timeline.innerHTML +=
            `<tr>
                <td>${prior_item.role}</td> 
                <td>${prior_item.company}</td> 
                <td>${prior_item.years}</td> 
            </tr>`;
    })
}

// Create and insert 'Tools'
function create_prior_tools(tools) {
    let tool_list = "";

    for (let i = 0; i < tools.length; i++) {
        let tool = tools[i];
        tool_list += insert_tools(tool)
    }
    return tool_list;
}
function insert_prior_tools(tool) {
    return ( `<div class="tl-item">${tool}</div>` );
}
// end prior professional experience section


///// Create the 'Education' section /////
function create_education_section() {
    let edu_timeline = document.getElementById("education");

    education_list.forEach((ed_item) =>
        edu_timeline.innerHTML +=
            `<div class="timeline-item">
                <p class="tl-duration">${ed_item.year}</p>
                <div class="tl-icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <h5>${ed_item.cert}<br><span>${ed_item.org}</span></h5>
            </div>`
    )
}
// end education section

////////// END FUNCTIONS //////////


