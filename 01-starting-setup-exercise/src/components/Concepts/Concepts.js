import Concept from "./Concept";

const Concepts = (props) => {
    return <ul id="concepts">
        {props.items.map((item) => <Concept title={item.title} image={item.image} description={item.description}/>)}
    </ul>
};

export default Concepts;