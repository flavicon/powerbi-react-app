import { SignInContainer, SignInBox, SignInArt } from "./styles";

import logoAcal from '../../assets/logo_acal.svg';
import ilustrationBi from '../../assets/Humaaans.png';

const Login = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignInArt>
        <p>
          Painel de analise setorial
        </p>
        <img src={ilustrationBi} alt="Ilustration Bi" />
      </SignInArt>
      <SignInBox>
        <form method="POST">
          <img src={logoAcal} alt="Acal Home Center" />
          <div className="contentForm">
            <div className="formInput">
              <label htmlFor="login">Login</label>
              <input type="text" name="login" id="login" />
            </div>
            <div className="formInput">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" />
            </div>
            <button>
              Entrar
            </button>
            <a href="/login">Recuperar senha</a>
          </div>
        </form>
      </SignInBox>
    </SignInContainer>
  );
}

export default Login;