import { HeaderContainer } from './styles';

interface headerProps {
    title: string;
    image: string;
    description_image: string;
}

const Header = (props: headerProps): JSX.Element => {
    return (
        <HeaderContainer>
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.description_image} />
        </HeaderContainer>
    );
}

export default Header;
