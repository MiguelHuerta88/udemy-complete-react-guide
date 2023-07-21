import Image from "../UI/Image";

const Concept = (props) => {
    return <li className='concept'>
        <Image src={props.image} alt={props.title}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </li>
};

export default Concept;