import Image from "../UI/Image";
import keyConceptsImage from "../../assets/images/key-concepts.png";

const Header = (props) => {
    return <header>
        <Image src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
    </header>
};

export default Header;