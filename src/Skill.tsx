import './Skill.css';

export interface ISkill {
    name: string;
    experience: number;
}

function Skill(props: ISkill) {
    const { name, experience } = props;

    return (
        <div className='skill'>
            <div className='skillName'>{name}</div>
            <div className='experience'>{experience} Years Experience</div>
        </div>
    )
}

export default Skill