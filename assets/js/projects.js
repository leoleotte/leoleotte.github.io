$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/auth-football.png',
            link: false,
            title: 'Auth Football',
            demo: false,
            technologies: ['Unity', 'Multiplayer'],
            description: "First person football/soccer game with custom ball physics, advanced controls and server-authorative multiplayer support (WIP).",
            categories: ['featured', 'unity', 'games']
        },
        {
            image: 'assets/images/pong64.jpg',
            link: 'https://github.com/leoleotte/pong64',
            title: 'Pong64',
            demo: false,
            technologies: ['N64', 'C'],
            description: "A homebrew N64 pong game with support for 4 players.",
            categories: ['featured', 'games', 'others']
        },
        {
            image: 'assets/images/pure-fire.jpg',
            link: 'https://leotte.itch.io/pure-fire',
            title: 'Pure Fire [Ludum Dare 37]',
            demo: 'https://leotte.itch.io/pure-fire',
            technologies: ['Unity', 'WebGL'],
            description: "A casual twin-stick shooter, with a cute-creepy mood! Made with love for the <a href='https://ludumdare.com/'>Ludum Dare 37 game jam</a>.",
            categories: ['featured', 'unity','games']
        },
        {
            image: 'assets/images/ninja-time-space-attack.jpg',
            link: false,
            title: 'Ninja Time - Space Attack!',
            demo: false,
            technologies: ['C++', 'Allegro'],
            description: "My first game, made for the Game Programming 2D (2010) course at Imagine School, using Allegro game library and C++.",
            categories: ['games']
        },
        {
            image: 'assets/images/adventures-edge.jpg',
            link: false,
            title: 'Adventure\'s Edge',
            demo: false,
            technologies: ['Unity'],
            description: "My second game, made for the Game Programming 3D (2011) course at Imagine School, using Unity for the first time.",
            categories: ['unity', 'games']
        },
        {
            image: 'assets/images/teletris.jpg',
            link: 'https://github.com/leoleotte/teletris',
            title: 'Teletris',
            demo: "https://port.leotte.dev/teletris/",
            technologies: ['Javascript', 'PixiJS', 'Telegram'],
            description: "A Telegram game inspired by falling blocks. Using pure javascript, <a href='https://pixijs.com/'>PixiJS</a>, full touch support and scores inside telegram chats.",
            categories: ['featured', 'games']
        },
        {
            image: 'assets/images/oculus-toolkit.jpg',
            link: 'https://github.com/leoleotte/oculus-toolkit',
            title: 'Oculus Toolkit',
            demo: false,
            technologies: ['C#', '.NET'],
            description: "A barebones Windows Forms app to enable/disable 'Oculus OVR' services.",
            categories: ['others']
        },
        {
            image: 'assets/images/unity-link.jpg',
            link: 'https://github.com/leoleotte/xboxunity_link_browser_addon',
            title: 'LiNK Stats Chrome Extension',
            demo: "https://chrome.google.com/webstore/detail/xboxunity-link/okpaoehinbobjokghdhcgghlgnnfnhlh",
            technologies: ['Javascript', 'Chrome Extension'],
            description: "A simple Chrome extension that shows LiNK stats in real-time.",
            categories: ['others']
        },
        {
            image: 'assets/images/botfather.jpg',
            link: 'https://github.com/leoleotte/nintendo-group-bot',
            title: 'Nintendo Brasil Telegram Group',
            demo: false,
            technologies: ['Python', 'Telegram'],
            description: "Bot for a community telegram group.",
            categories: ['others']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    let project_link = project.link ? project.link : '';
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project_link}">
                            <img src="${project.image}" alt="image" target="new" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `[<a href="${project.demo}">Demo</a>]` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}