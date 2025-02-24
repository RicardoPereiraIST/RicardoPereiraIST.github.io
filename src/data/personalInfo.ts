export const personalInfo = {
    setup: {
        name: "Ricardo Pereira",
        picture: "/Photos/Ricardo_Pereira.jpg",
        links: [
            {
                icon: "fa fa-file-pdf",
                url: "/CV/curriculum_vitae_web.pdf",
            },
            {
                icon: "fab fa-github",
                url: "https://github.com/RicardoPereiraIST",
            },
            {
                icon: "fab fa-linkedin",
                url: "https://www.linkedin.com/in/ricardo-pereira-aa5542116",
            }
        ],
        info: [
            {
                icon: "fa-briefcase",
                text: "Senior Systems Programmer",
            },
            {
                icon: "fa-home",
                text: "Lisbon, Portugal",
            },
        ],
    },
    about: {
        title: {
            icon: "fa-info-circle",
            text: "About me",
        },
        information: `
            <p>I have a Master's degree in Computer Engineering and Information Systems and have been working as a C++ Systems Programmer in the gaming industry.<br>
                I have experience with Xbox, PlayStation, and Steam APIs, and enjoy working on engine systems.
            </p>`,
    },
    languages: {
        title: {
            icon: "fa-earth-americas",
            text: "Languages",
        },
        information: [
            {
                flag: "🇵🇹",
                text: "Portuguese (Native)",
            },
            {
                flag: "🇬🇧",
                text: "English (B2-C1)",
            },
            {
                flag: "🇯🇵",
                text: "Japanese (A1)",
            },
        ],
    },
};