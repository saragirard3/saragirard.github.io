window.onload = function() {
    create_techprof_section();
    create_certs_section();
    create_profexp_section();

}

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

function create_profexp_section() {
    let profexp_timeline = document.getElementsByClassName("timeline")[1];

    profexp_list.forEach((profexp_item) =>
        profexp_timeline.innerHTML +=
            `<div class="timeline-item"><div class="tl-icon"><i class="fa-solid fa-briefcase"></i></div>
            <p class="tl-duration">${profexp_item.years}</p><h5>${profexp_item.role}<br><span>${profexp_item.company}</span></h5>
            <div class="tl-tools">
            <div class="tl-item">tool</div>
            <div class="tl-item">HTML/CSS</div>
            <div class="tl-item">Bootstrap</div>
            <div class="tl-item">JavaScript</div>
            <div class="tl-item">React</div>
            <div class="tl-item">Spring</div>
            <div class="tl-item">Java</div>
            <div class="tl-item">Azure</div>
            <div class="tl-item">.NET</div>
            <div class="tl-item">MySQL</div>
            <div class="tl-item">Security</div>
            <div class="tl-item">Agile</div>
            <div class="tl-item">Scrum</div>
    </div>
    <div class="job-desc">
        <ul>
            <li>Provide full stack development, maintenance, and system administration services
                for organizations</li>
            <li>Triage customer issues, prioritize, and fix root causes, paying attention to
                severity and proper logging practices</li>
            <li>Review and understand business system</li>
            <li>Create requirements based on specific clients' needs</li>
            <li>Build, schedule, and release new software and software improvements</li>
        </ul>
    </div>
</div>`

    )

}



////////// END FUNCTIONS //////////


