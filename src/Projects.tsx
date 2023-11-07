import { useEffect, useState } from 'react';
import './Projects.css';
import thumbnail1 from './assets/thumbnail-project-1-large.webp';
import thumbnail2 from './assets/thumbnail-project-2-large.webp';
import thumbnail3 from './assets/thumbnail-project-3-large.webp';
import thumbnail4 from './assets/thumbnail-project-4-large.webp';
import thumbnail5 from './assets/thumbnail-project-5-large.webp';
import thumbnail6 from './assets/thumbnail-project-6-large.webp';

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
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS'],
        code: '',
        site: 'https://alx29.github.io/',
    },
    {
        source: 2,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS'],
        code: '',
        site: '',
    },
    {
        source: 3,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
        code: '',
        site: '',
    },
    {
        source: 4,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
        code: '',
        site: '',
    },
    {
        source: 5,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
        code: '',
        site: '',
    },
    {
        source: 6,
        title: 'DESIGN PORTOFOLIO',
        languages: ['HTML', 'CSS', 'Javascript'],
        code: '',
        site: '',
    },
];

function Projects() {
    const [sources, setSources] = useState<string[]>([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        setSources([thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6]);
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
                                <div className='view' onClick={() => handleClick(site)}>VIEW PROJECT</div>
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
                            <div className='view'>VIEW PROJECT</div>
                            <div className='view'>VIEW CODE</div>
                        </div>
                    }
                </div>)
            })}
        </div>
    )
}

export default Projects