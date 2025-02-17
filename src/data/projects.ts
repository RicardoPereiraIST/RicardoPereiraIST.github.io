export const projects = {
    openGLTutorials: {
        setup: {
            name: 'OpenGL Tutorials',
            url: "https://github.com/RicardoPereiraIST/OpenGL-Tutorials",
            description: `
                <p>Multiple applications written in C++ and OpenGL.<br>
                    The applications go from the very basics of OpenGL and GLSL, to implement multiple techniques like, but not limited to, lightning models, shadows, particle systems, SSAO, and PBR. It also contains a version of the game Breakout.</p>
                <p>Based on Joey de Vries OpenGL.</p>`,
        },
        mediaItems: [
            { type: 'image', src: '/Images/OpenGL_tutorials/model.PNG' },
            { type: 'image', src: '/Images/OpenGL_tutorials/pbr_textures.PNG' },
            { type: 'image', src: '/Images/OpenGL_tutorials/chaos.PNG' },
            { type: 'image', src: '/Images/OpenGL_tutorials/instancing.PNG' },
            { type: 'image', src: '/Images/OpenGL_tutorials/deferred_shading.PNG' },
            { type: 'image', src: '/Images/OpenGL_tutorials/ssao.PNG' },
        ]
    },
    snookerOnFire: {
        setup: {
            name: 'Snooker On Fire',
            url: "https://github.com/RicardoPereiraIST/rimachi-engine",
            description: `
                <p>A snooker simulation application developed in a game engine written in C++ and OpenGL for the Computer Graphics course.<br>
                    Using a basic physics engine, lighting model, animations, textures, snapshot saving, and post-processing, the main concept of this project is to provide a semi-realistic simulation of a billiards (we know) game, with a table, balls and a cue (scoring was not implemented).</p>
                <p>Project done by Marcelo Silva, Ricardo Pereira, Ricardo Silva and Vinícius Zuchi.</p>`,
        },
        mediaItems: [
            { type: 'image', src: '/Images/Snooker/opening_shot_1.png' },
            { type: 'image', src: '/Images/Snooker/followup_shot_2.png' },
            { type: 'image', src: '/Images/Snooker/post_processing_sepia_2.png' },
            { type: 'video', src: "/Videos/Snooker/demo.mp4", poster: "/Images/Snooker/followup_shot_2.png" },
        ]
    },
    shhh: {
        setup: {
            name: 'Shhh',
            description: `
                <p>A game developed in Unity3D for the course of Game Development Methodology.<br>
                    Shhh is an isometric stealth game, with minimalistic visuals, in which the player visibility is based on the amount of noise made. The main objective is to escape the strange place by avoiding multiple enemies, using multiple abilities and items.</p>
                <p>Project done by Marcelo Silva, Ricardo Pereira and Ricardo Silva.</p>`,
        },
        mediaItems: [
            { type: 'image', src: '/Images/Shhh/poster.png' },
            { type: 'image', src: '/Images/Shhh/snapshot_1.png' },
            { type: 'image', src: '/Images/Shhh/Silent_Enemy.png' },
            { type: 'image', src: '/Images/Shhh/snapshot_7.png' },
            { type: 'video', src: "/Videos/Shhh/demo.mp4", poster: "/Images/Shhh/snapshot_1.png" },
        ]
    },
    blackhole: {
        setup: {
            name: 'Black Hole',
            description: `
                <p>A game developed in GameMaker for the course of Game Design.<br>
                    Black Hole is a 2D platformer shooter/hack 'n' slash, with some puzzle elements added along the way. The game has a sci-fi theme, presenting different environments for each of the dimensions, making each one feel unique.</p>
                <p>Project done by André Saraiva, Ricardo Pereira and Vinícius Zuchi.</p>`,
        },
        mediaItems: [
            { type: 'image', src: '/Images/Blackhole/froggy_2.png' },
            { type: 'image', src: '/Images/Blackhole/cave_1.png' },
            { type: 'image', src: '/Images/Blackhole/cave_5.png' },
            { type: 'image', src: '/Images/Blackhole/grav_inversion_4.png' },
            { type: 'video', src: "/Videos/Blackhole/black_hole_trailer.mp4", poster: "/Images/Blackhole/cave_1.png" },
        ]
    },
    circumference: {
        setup: {
            name: 'Circumference',
            url: 'https://bitbucket.org/nocluepy/pygame',
            description: `
                <p>A game developed in python (with pygame) for a contest hosted in Instituto Superior Técnico.<br> Circumference is a 2D arcade game programmed and designed within 10 days. Each level has 4 phases, and becomes faster with time. The objective is to get the best score before the time ends. There are multiple powerups (and power downs) for the player to get.</p>
                <p>Project done by Manuel Silva and Ricardo Pereira.</p> `
        },
        mediaItems: [
            { type: 'image', src: '/Images/Circumference/circumference.PNG' },
            { type: 'image', src: '/Images/Circumference/initial_phase.PNG' },
            { type: 'image', src: '/Images/Circumference/fast_spawn_phase.PNG' },
            { type: 'image', src: '/Images/Circumference/radar_phase.PNG' },
            { type: 'image', src: '/Images/Circumference/mirror_powerup.PNG' },
            { type: 'image', src: '/Images/Circumference/shield_phase.PNG' },
            { type: 'video', src: "/Videos/Circumference/circumference_demo.mp4", poster: "/Images/Circumference/mirror_powerup.PNG" },
        ]
    }
};