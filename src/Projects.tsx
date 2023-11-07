import { useEffect, useState } from 'react';
import './Projects.css';
import old_portofolio from './assets/old_portofolio.jpg';
import maze from './assets/maze.jpeg';
import project_management from './assets/project_management.jpeg';
import password_generator from './assets/password_generator.jpeg';
import my_portofolio from './assets/my_portofolio.jpeg';

interface IProject {
    source: number;
    title: string;
    languages: string[];
    code: string;
    site: string;
}

const TABLET_SIZE = 768;

const projects: IProject[] = [
    {
        source: 1,
        title: 'MY PORTOFOLIO',
        languages: ['React', 'Typescript', 'CSS'],
        code: 'https://github.com/alx29/my-portofolio',
        site: 'https://alex-paraschiv-resume.netlify.app/',
    },
    {
        source: 2,
        title: 'PASSWORD GENERATOR',
        languages: ['React', 'Redux', 'Typescript', 'CSS'],
        code: 'https://github.com/alx29/Password-Generator',
        site: 'https://axp-password-generator.netlify.app/',
    },
    {
        source: 3,
        title: 'PROJECT MANAGEMENT APP FE',
        languages: ['React', 'CSS', 'Tailwind'],
        code: 'https://github.com/alx29/Project-Management-App-FE',
        site: '',
    },
    {
        source: 4,
        title: 'PROJECT MANAGEMENT APP BE',
        languages: ['Nest Js', 'Mongo DB', 'Typescript'],
        code: 'https://github.com/alx29/Project-Management-App-BE',
        site: '',
    },
    {
        source: 5,
        title: 'MY OLD PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/alx29/alx29.github.io',
        site: 'https://alx29.github.io/',
    },
    {
        source: 6,
        title: 'MAZE GAME',
        languages: ['HTML', 'Javascript'],
        code: 'https://github.com/alx29/maze-game',
        site: 'https://alx29.github.io/maze-game/',
    },
];

function Projects() {
    const [sources, setSources] = useState<string[]>([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        setSources([my_portofolio, password_generator, project_management , project_management, old_portofolio, maze]);
    }, []);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', updateWindowDimensions);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const handleClick = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className='projects'>
            {projects.map((project) => {
                const {source, title, languages, site, code} = project;
                const src = sources[source - 1];

                return (
                <div className='project' key={source}>
                    <div className='imageContainer'>
                        <img className='projectImage' src={src}></img>
                        {screenWidth > TABLET_SIZE && 
                            <div className='buttonContainer'>
                                {site !== '' && <div className='view' onClick={() => handleClick(site)}>VIEW PROJECT</div>}
                                <div className='view' onClick={() => handleClick(code)}>VIEW CODE</div>
                            </div>
                        }
                    </div>
                    <div className='projectTitle'>{title}</div>
                    <div className='languages'>
                        {languages.map((language) => {
                            return (
                            <div key={language} className='language'>
                                {language}
                            </div>)
                        })}
                    </div>
                    {screenWidth <= TABLET_SIZE && 
                        <div className='buttonContainer'>
                            {site !== '' && <div className='view'>VIEW PROJECT</div>}
                            <div className='view'>VIEW CODE</div>
                        </div>
                    }
                </div>)
            })}
        </div>
    )
}

export default Projects