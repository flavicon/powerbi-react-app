import Header from "../../components/Header";

import { HomeContainer } from "./styles";
import avatar from '../../assets/avatar.svg';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header title="Home page" image={avatar} description_image="Avatar user" />
      <section>
        
      </section>
    </HomeContainer>
  );
}

export default Home;