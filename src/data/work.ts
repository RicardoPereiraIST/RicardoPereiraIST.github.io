export const workExperience = {
    companies: [
        {
            name: "Crytek",
            positions: [
                {
                    role: "Systems Programmer for Hunt: Showdown",
                    date: "March 2021 - Present",
                    description: [
                        {text: "Maintained the game platform abstraction plugin: Xbox / PlayStation / Steam / Discord."},
                        {text: "Implemented lobbies, stream install, and save data on Xbox Series S/X and Playstation 5."},
                        {text: "Helped find and optimize critical sections of the game, such as boot, loading, and runtime stalls."},
                        {text: "Implemented a runtime validation system for file access errors."},
                        {text: "Contributed to CryEngine's crash reporting system and maintenance of the different crash handlers."},
                        {text: "Timesliced CryEngine's world object culling, minimizing stalls during runtime."},
                        {text: "Contributed to the overhaul of the VoIP system, and integration with Vivox."},
                        {text: "Implemented Event Tracing for Windows captures during runtime."},
                        {text: "Added watchdog support to gather information of the frozen thread."},
                        {text: "Helped with the hiring and interview process for new Systems and Tools programmers."},
                        {text: "Mentored and onboarded a new Senior Tools programmer."},
                    ],
                },
                {
                    role: "Junior Systems Programmer for Hunt: Showdown",
                    date: "May 2019 - February 2021",
                    description: [
                        {text: "Maintained the game platform abstraction plugin: Xbox / PlayStation / Steam / Discord."},
                        {text: "Contributed to the implementation of Xbox S/X and Playsation 4, and Discord integration."},
                        {text: "Expanded a file validation system to catch installation problems during boot."},
                        {text: "Implemented loading optional content into CryEngine: marking content as optional, deciding which content to load, transmitting data between server and client, loading the content, and added a debug layer tool."},
                        {text: "Added new features to an internal data tool: goto button, find references button, data validation, content search on files, and updated the tool to allow tracking via guids, allowing consistent operations."},
                        {text: "Optimized operations on CryEngine's Sandbox, such as hide and lock objects."},
                    ],
                },
            ],
        },
        {
            name: "Miniclip",
            positions: [
                {
                    role: "Summer Internship in Software Development",
                    date: "August 2015 - October 2015",
                    description: [
                        {text: "Worked for 2 months debugging and implementing new features in software used by other teams."},
                    ],
                },
            ]
        },
    ],
    education: [
        {
            name: "Instituto Superior Técnico",
            degrees: [
                {
                    name: "Master in Computer Engineer and Information Systems",
                    date: "2016 - 2018",
                    specialization: "Specialization in Games and Cyber-Security",
                    description: [
                        {
                            text: "Master's Thesis: Expressing Emotions Through Animated Speech Balloons",
                        },                        
                    ],
                },
                {
                    name: "Bachelor in Computer Engineer and Information Systems",
                    date: "2013 - 2016",
                },
            ],
        }
    ],
    publications: [
        {
            name: "Instituto Superior Técnico",
            papers: [
                {
                    name: "A cautionary tale of side-by-side evaluations while developing emotional expression for intelligent virtual agents",
                    date: "September 2022",
                    url: "https://www.researchgate.net/publication/363317145_A_cautionary_tale_of_side-by-side_evaluations_while_developing_emotional_expression_for_intelligent_virtual_agents",
                },
                {
                    name: "Interactive Empathic Virtual Coaches Based on the Social Regulatory Cycle",
                    date: "September 2029",
                    url: "https://www.researchgate.net/publication/338201315_Interactive_Empathic_Virtual_Coaches_Based_on_the_Social_Regulatory_Cycle",
                },
            ],
        },
    ],
};