import './Description.css';

function Description() {
  return (
    <div className='descriptionContainer'>
        <div className='title'>Nice to meet you!</div>
        <div className='title'>
            I'm <span className='name'>Alex Paraschiv</span>.
        </div>
        <div className='description'>
            Based in Romania, I’m a full-stack developer passionate about building responsive web apps that users love. 
            Through my involvement in both professional and academic projects, I have honed my problem-solving, teamwork, and time management skills.
        </div>
    </div>
  )
}

export default Description