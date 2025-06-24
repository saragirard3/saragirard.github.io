window.onload = function() {
    create_techprof_section();
    create_certs();

}

////////// FUNCTIONS //////////

// Create the 'Technical Proficiencies' section
function create_techprof_section() {
    let toolbox = document.getElementsByClassName("toolbox")[0];

    techprof_list.forEach((toolbox_item) =>
        toolbox.innerHTML += '<div class="toolbox-item"><h5>' + toolbox_item + '</h5></div>' );
}

// Create the 'Certification & Awards' section
function create_certs() {
    let timeline = document.getElementsByClassName("timeline")[0];

    cert_list.forEach((cert_item) =>
        timeline.innerHTML +=
            `<div class="timeline-item">
                <div class="tl-icon"><i class="fa-solid fa-certificate"></i></div>
                <p class="tl-duration">` +
            cert_item.year +
            `</p><h5>` +
            cert_item.cert +
            `<br/><span>` +
            cert_item.org +
            `</span></h5></div>`
    )

}
////////// END FUNCTIONS //////////


