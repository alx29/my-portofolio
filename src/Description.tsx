import './Description.css';

function Description() {
  return (
    <div className='descriptionContainer'>
        <div className='title'>Nice to meet you!</div>
        <div className='title'>
            I'm <span className='name'>Adam Keys</span>.
        </div>
        <div className='description'>
            Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
        </div>
    </div>
  )
}

export default Description