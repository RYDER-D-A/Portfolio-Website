const navButtons = document.querySelectorAll('.nav-buttons button');
const screens = document.querySelectorAll('.screen');

const projects = [
    {
        name: 'Axis Pro',
        featured: true,
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
        name: 'Prosthetic Running Blade',
        featured: true,
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
        hidden: true,
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
        featured: true,
        type: 'Group',
        details: 'Research · Systems Design · Sustainable Design',
        page: {
            image: 'Assets/AviationSeat.jpg',
            paragraphs: [
                "This project consisted of two parts, both focused on economic, environmental and social sustainability. The main part was completed as group work and explored the aviation seating industry as a whole, while the secondary part was completed individually.",
                "Note: The research and design work shown here was developed over the full project period; the submitted individual report was assembled under a very short turnaround alongside several concurrent deadlines, including my Gizmo project.",
                "The industry report consisted of broad secondary research, conversations with industry leaders, and the dismantling of a commercial-grade economy seat. As a team member, I focused on the broader aviation and supply-chain research, as well as the material research. I also played a large role in the disassembly of the seat. The teardown identified problems including material identification, corrosion, adhesives, non-standardised fasteners and excessive tool changes.",
                "My main interest throughout the project was the consequences of the secrecy required within a highly competitive industry, particularly the economic and environmental losses it can create, as well as the inefficiencies it introduces at end of life.",
                "My individual solution explored a blockchain-based database that would allow trusted partners to share private information relating to material identification without openly exposing sensitive company data. This would allow disassemblers to understand what materials they were working with and separate them more effectively.",
                "The second focus of my individual work was reducing corrosion and disassembly time by redesigning parts of the seat to make end-of-life recovery more economically viable. This included investigating alternative fasteners, material choices, sacrificial adhesive interfaces and a more structured disassembly sequence.",
                "This was particularly important because our research identified that, at one point, around 1.5 million aircraft seats were in storage, where prolonged storage can contribute to corrosion and further reduce their recycling value."
            ],
            collaborators: ['Aidan Ryder', 'Kyara Surtani', 'Lucian Brand', 'Muk Vivatanaprasert', 'Yasmin Fryer'],
            outputs: [
                { label: 'Industry Research', href: 'Files/Aviation seating industry.pdf' },
                { label: 'Solution Report', href: 'Files/Aviation Solution Report.pdf' }
            ]
        }
    },
    {
        name: 'Gizmo',
        featured: true,
        type: 'Group',
        details: 'Mechatronics · Embedded Systems · Interaction Design',
        page: {
            image: 'Assets/Gizmo.jpg',
            paragraphs: [
                "Gizmo was a two person project in which we had to design an interactive electromechanical device. Me and my teammate came up with a playful skill checking machine based on RPG games.",
                "There were four main inputs: a lever, button/mic, capacitive touch sensor and a ToF sensor. These controlled the main parts of the device: the Wheel of Luck & Slides of Emotion, Insanity Tower, Broken Sign and Magic Diamonds. The different parts also interacted with each other. For example, when the lever was pulled and the wheel and slides were spinning, the lights on the Insanity Tower would also light up. If the user screamed loud enough to reach the maximum insanity level, the other parts of the system would go haywire.",
                "The code used enums, functions and state machines to keep the different systems modular. I also avoided delays by using millis(), which meant the different parts could run and react to each other at the same time.",
                "My part in the project was designing the Insanity Tower, the mechanical side of the Magic Diamonds, the electronics and most of the code. I also worked on integrating the code so that the separate parts could work together as one system."
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
        featured: true,
        type: 'Group',
        details: 'User Research · Human centred Design · Prototyping',
        page: {
            image: 'Assets/Rhythm Rush.jpg',
            paragraphs: [
                "Rhythm Rush was split into two 10-week stages: a research phase and a prototyping phase.",
                "The research phase began with the broad brief of urban play, requiring our team to identify a meaningful user group and opportunity area. We initially focused on elderly users, but after reaching a dead end we made a rapid decision to pivot towards digital urban play. This led us to study Outernet London, where I personally led over 20 public interviews alongside Ruaridh, supported by behavioural observations. We found that while many people said they were open to interacting with strangers, very few actually initiated interaction in public spaces. Further research suggested that people first needed to perceive a setting as inherently social, such as a bar, concert or event, before interaction felt natural.",
                "We then identified event queues as an interesting middle ground: people shared a common interest and had unavoidable downtime, but still lacked enough incentive to interact. This led us to hypothesise that games could act as a social lubricant. We tested this through public experiments comparing conventional conversation-based interaction with multiplayer games. The gaming condition produced significantly more engagement, attracted spectators and encouraged more natural conversation.",
                "These findings drove our ideation process and eventually led to Rhythm Rush: a motion-tracked dance game designed to encourage low-pressure social interaction within event queues.",
                "The second half of the project focused on prototyping, development and user validation. Throughout the project, I led much of the research strategy, identifying the next most valuable questions to investigate and planning user-testing activities around them. I also led the physical looks-like development, using low-fidelity prototypes to determine the product's scale and overall form before developing the CAD design with continued user input.",
                "The final concept combined physical queue infrastructure with a large interactive display and body-tracking system, with repeated testing used to refine factors such as accessibility, learnability, player positioning and social comfort. The project concluded with the team presenting the final Rhythm Rush concept, our research process, prototype development and validation findings."
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
    document.getElementById(id).scrollTop = 0;

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

const visibleProjects = projects.filter(project => !project.hidden);

function renderProjects() {
    projectsBody.innerHTML = visibleProjects.map((project, index) => `
        <div class="project-row" data-index="${index}">
            <span class="col-name">${project.name}</span>
            <span class="col-type">${project.type}</span>
            <span class="col-details">${project.details}<span class="arrow">&rarr;</span></span>
        </div>
    `).join('');

    projectsBody.querySelectorAll('.project-row').forEach(row => {
        row.addEventListener('click', () => {
            showProjectDetail(visibleProjects[row.dataset.index]);
        });
    });
}

renderProjects();

const carouselTrack = document.getElementById('carousel-track');
const featuredProjects = visibleProjects.filter(project => project.featured);

function renderCarousel() {
    carouselTrack.innerHTML = featuredProjects.map((project, index) => `
        <button class="carousel-card reveal" data-index="${index}">
            <span class="carousel-image"><img src="${encodeURI(project.page.image)}" alt="" loading="lazy"></span>
            <span class="carousel-name">${project.name}</span>
        </button>
    `).join('');

    carouselTrack.querySelectorAll('.carousel-card').forEach(card => {
        card.addEventListener('click', () => {
            showProjectDetail(featuredProjects[card.dataset.index]);
        });
    });

    document.querySelectorAll('.carousel-btn').forEach(button => {
        const direction = button.classList.contains('carousel-btn--prev') ? -1 : 1;
        button.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: direction * carouselTrack.clientWidth * 0.8, behavior: 'smooth' });
        });
    });
}

renderCarousel();

// Fade/draw elements in when they scroll into view, and reset them once they leave
// (including when switching to another page) so the animation replays next time
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Build the email link at runtime so the plain address isn't in the HTML for scrapers
const contactEmail = document.getElementById('contact-email');
const emailAddress = `${contactEmail.dataset.user}@${contactEmail.dataset.domain}`;
contactEmail.href = `mailto:${emailAddress}`;
contactEmail.textContent = emailAddress;

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        showScreen(button.dataset.target);
    });
});
