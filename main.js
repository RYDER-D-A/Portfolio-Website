const navButtons = document.querySelectorAll('.nav-buttons button');
const screens = document.querySelectorAll('.screen');

const projects = [
    {
        name: 'Axis Pro',
        type: 'Group',
        details: 'Product Design • DFMA • Mechatronics',
        page: {
            image: 'Assets/AxisProMain.jpg',
            paragraphs: [
                "This project involved detailed research into an underserved user group and the development of an electromechanical product designed around their needs. Through iterative design and user testing, we developed Axis Pro, a three-axis platform for holding miniature models during hobbyist painting.",
                "The final project included a working prototype, branding strategy, business case, DFMA analysis and a project video. As the designated CTO, I led the electromechanical design and DFMA aspects of the project.",
                "One of the main mechanical challenges was integrating two electromechanical mechanisms into a platform that also had to move vertically, this required a lot of mechanism placement considerations to also prevent bulkiness."
            ],
            collaborators: ['Aidan Ryder', 'Lucian Brand', 'Aaron Xu', 'Simon Xia'],
            outputs: [
                { label: 'Project Research', href: 'Files/PDE Research&Ideation.pdf' },
                { label: 'Project Development', href: 'Files/AxisPro Development.pdf' },
                { label: 'Project Report', href: 'Files/AxisPro Report.pdf' },
                { label: 'Project Video', href: 'https://www.youtube.com/watch?v=zU796ycaHGc' }
            ]
        }
    },
    {
        name: 'Prosthetic Running Leg',
        type: 'Individual',
        details: 'Structural Analysis • Modal Analysis • Fatigue Analysis • Design Optimisation',
        page: {
            image: 'Assets/Prosthetic Leg.jpg',
            paragraphs: [
                "This finite element analysis project involved designing and optimising a prosthetic running blade against predefined durability and dynamic-performance requirements. The blade was required to withstand at least one million loading cycles while maintaining a fundamental frequency above 50 Hz. An initial design was developed using theoretical relationships between stiffness, geometry and natural frequency, then evaluated using ANSYS Mechanical. The results informed a second geometry that reduced stress concentrations and successfully met the design criteria. CFRP and aluminium were also compared to investigate the trade-offs between fatigue life, mass and dynamic performance."
            ],
            collaborators: ['Aidan Ryder'],
            outputs: [
                { label: 'Report', href: 'Files/FEA Report.pdf' }
            ]
        }
    },
    {
        name: 'Car & Battery Cooling Plate Design 1',
        type: 'Individual',
        details: 'CFD Analysis • Itterative Design • Research',
        page: {
            image: 'Assets/Car Air flow.jpg',
            paragraphs: [
                "The first stage of this project consisted of two parts: studying the fundamentals of aerodynamics and applying them to a vehicle archetype, followed by research into battery cooling plates.",
                "For the aerodynamic study, I worked within the pickup-truck archetype. After ideating, I modelled the vehicle in Fusion 360 using the Form tool. ANSYS was then used to analyse the aerodynamic performance of the design. The final design performed slightly better than the two benchmarks used, the Cybertruck and Ford F-150 Raptor, achieving a drag coefficient of Cd = 0.31.",
                "The second part acted as preparation for the next stage of the project. I first defined the criteria used to assess a good battery cooling plate and identified the key performance metrics. I then researched existing cooling approaches and generated a range of pipe-layout concepts within the constraints set by the module brief."
            ],
            collaborators: ['Aidan Ryder'],
            outputs: [
                { label: 'Visual Report', href: 'Files/ThermoFluids.pdf' }
            ]
        }
    },
    {
        name: 'Car & Battery Cooling Plate Design 2',
        type: 'Group',
        details: 'CFD Analysis • ThermoFluids • Experimental Validation',
        page: {
            image: 'Assets/Cooling Plate.jpg',
            paragraphs: [
                "The second stage of this project consisted of two parts: experimentally validating the aerodynamic CFD results from the first stage through wind tunnel testing, and conducting further analysis and optimisation of the proposed battery cooling plates.",
                "For the wind tunnel testing, the aim was to experimentally validate the CFD results obtained during the first stage of the project. A scaled physical model was tested under controlled airflow conditions, and the measured aerodynamic behaviour was compared with the previously simulated results, focusing on drag, lift and flow separation. This allowed discrepancies between the numerical model and the physical experiment to be identified and analysed. The report then examined possible causes of these discrepancies, including surface roughness, mounting effects and Reynolds number differences.",
                "For the battery cooling plate, I carried out the majority of the simulation and analysis work. After a teammate modelled the cooling channels, I generated the computational mesh and led a mesh refinement study across the different cooling plate designs. I then used ANSYS to evaluate each design across key parameters including temperature distribution, pressure drop and coolant velocity. The results were compared to identify the strongest-performing design, which I then further optimised against the performance criteria established earlier in the project. From this optimisation, I concluded that substantial further improvements would require a change in channel topology rather than further refinement of the existing geometry, unless the mass flow rate was increased."
            ],
            collaborators: ['Aidan Ryder', 'Coe Ishikawa', 'Arda Kancal', 'Ananya Koteyar'],
            outputs: [
                { label: 'Visual Report', href: 'Files/Thermo Submission 2.pdf' }
            ]
        }
    },
    {
        name: 'PID Segway',
        type: 'Group',
        details: 'Control Systems · PID Control · Embedded Systems',
        page: {
            image: 'Assets/Segway.jpg',
            paragraphs: [
                "Placeholder description for the PID Segway project."
            ],
            collaborators: ['Aidan Ryder'],
            outputs: [
                { label: 'PID Segway Video', href: 'https://youtube.com/shorts/wG54i-aj1Ko' }
            ]
        }
    },
    {
        name: 'Aviation Seating Industry',
        type: 'Group',
        details: 'Research · Systems Design · Sustainable Design',
        page: {
            image: 'Assets/AviationSeat.jpg',
            paragraphs: [
                "Placeholder description for the Aviation Seating Industry project."
            ],
            collaborators: ['Aidan Ryder', 'Kyara Surtani', 'Lucian Brand', 'Muk Vivatanaprasert', 'Yasmin Fryer'],
            outputs: [
                { label: 'Industry Research', href: 'Files/Aviation seating industry.pdf' }
            ]
        }
    },
    {
        name: 'Gizmo',
        type: 'Group',
        details: 'Mechatronics · Embedded Systems · Interaction Design',
        page: {
            image: 'Assets/Gizmo.jpg',
            paragraphs: [
                "Placeholder description for the Gizmo project."
            ],
            collaborators: ['Aidan Ryder', 'Mayli Jones'],
            outputs: [
                { label: 'Report', href: 'Files/Gizmo Report.pdf' },
                { label: 'Video', href: 'https://youtu.be/QZKaqaUQEQc' }
            ]
        }
    },
    {
        name: 'Rhythm Rush',
        type: 'Group',
        details: 'User Research · Human centred Design · Prototyping',
        page: {
            image: 'Assets/Rhythm Rush.jpg',
            paragraphs: [
                "Placeholder description for the Rhythm Rush project."
            ],
            collaborators: ['Aidan Ryder', 'Amarie Fasoro', 'Ikem Enebeli', 'Ruaridh Murdoch', 'Yousuf Shahabuddin'],
            outputs: [
                { label: 'Research Report', href: 'Files/Rhythm Rush Research.pdf' },
                { label: 'Prototyping Report', href: 'Files/Rhythm Rush Prototyping.pdf' }
            ]
        }
    }
];

const projectsBody = document.getElementById('projects-body');
const projectDetailTitle = document.getElementById('project-detail-title');
const projectDetailImage = document.getElementById('project-detail-image');
const projectDetailText = document.getElementById('project-detail-text');
const projectCollaborators = document.getElementById('project-collaborators');const projectOutputs = document.getElementById('project-outputs');

function showScreen(id, navId = id) {
    screens.forEach(screen => {
        screen.classList.toggle('hidden', screen.id !== id);
    });

    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === navId);
    });
}

function showProjectDetail(project) {
    projectDetailTitle.textContent = project.name;

    if (project.page.image) {
        projectDetailImage.src = project.page.image;
        projectDetailImage.alt = project.name;
        projectDetailImage.classList.remove('hidden');
    } else {
        projectDetailImage.removeAttribute('src');
        projectDetailImage.classList.add('hidden');
    }

    projectDetailText.innerHTML = project.page.paragraphs.map(p => `<p>${p}</p>`).join('');
    projectCollaborators.textContent = `Collaborators: ${project.page.collaborators.join(' • ')}`;

    const outputs = project.page.outputs || [];
    projectOutputs.innerHTML = outputs.map(o =>
        `<li><a href="${encodeURI(o.href).replace(/&/g, '&amp;')}" target="_blank" rel="noopener">${o.label}</a></li>`
    ).join('');

    showScreen('project-detail');
}

function renderProjects() {
    projectsBody.innerHTML = projects.map((project, index) => `
        <div class="project-row" data-index="${index}">
            <span class="col-name">${project.name}</span>
            <span class="col-type">${project.type}</span>
            <span class="col-details">${project.details}<span class="arrow">&rarr;</span></span>
        </div>
    `).join('');

    projectsBody.querySelectorAll('.project-row').forEach(row => {
        row.addEventListener('click', () => {
            showProjectDetail(projects[row.dataset.index]);
        });
    });
}

renderProjects();

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        showScreen(button.dataset.target);
    });
});
