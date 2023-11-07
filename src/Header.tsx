import './Header.css';
import Github from './icons/Github';
import FrontendMentor from './icons/FrontendMentor';
import Linkedin from './icons/Linkedin';
import Twitter from './icons/Twitter';

function Header() {
  return (
    <div className='header'>
        <div className='name'>adamkeys</div>
        <div className='icons'>
          <div onClick={() => {window.open('https://github.com/alx29?tab=repositories', '_blank');}}><Github/></div>
          <div onClick={() => {window.open('https://www.frontendmentor.io/profile/alx29', '_blank');}}><FrontendMentor /></div>
          <div onClick={() => {window.open('https://www.linkedin.com/in/alex-paraschiv-a770a51b5/', '_blank');}}><Linkedin /></div>
          <div onClick={() => {window.open('https://twitter.com/', '_blank');}}><Twitter /></div>
        </div>
    </div>
  )
}

export default Header