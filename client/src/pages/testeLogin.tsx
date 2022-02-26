import React, { useRef, useState } from "react";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  BtnSolid,
  BtnTransparentin,
  BtnTransparentup,
  Container,
  ContentLeft,
  ContentRight,
  FormsContainer,
  I,
  ImageLogin,
  ImageRegister,
  InputField,
  LeftPanel,
  P,
  PanelsContainer,
  RightPanel,
  SignInForm,
  SigninSignup,
  SignUpForm,
  SocialIcon,
  SocialMedia,
  Title,
} from "../components/testeLogin";

const index = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickSignUp = () => {
    containerRef.current?.classList.add("sign-up-mode");
    setSignUpMode(true);
  };

  const handleClickSignIn = () => {
    containerRef.current?.classList.remove("sign-up-mode");
    setSignUpMode(false);
  };

  return (
    <Container ref={containerRef}>
      <FormsContainer>
        <SigninSignup signUp={isSignUpMode}>
          <SignInForm signUp={isSignUpMode}>
            <Title>Login In</Title>
            <InputField>
              <I>
                <FontAwesomeIcon icon={faUser} />
              </I>
              <input type="text" placeholder="Usuário" />
            </InputField>
            <InputField>
              <I>
                <FontAwesomeIcon icon={faLock} />
              </I>
              <input type="password" placeholder="Senha" />
            </InputField>
            <BtnSolid type="submit" value="Entrar"></BtnSolid>

            <P>Ou entre pelas redes sociais</P>

            <SocialMedia>
              <SocialIcon>
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faGoogle} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialIcon>
            </SocialMedia>
          </SignInForm>

          {/* REGISTER */}
          <SignUpForm signUp={isSignUpMode}>
            <Title>Bem-Vindo</Title>
            <InputField>
              <I>
                <FontAwesomeIcon icon={faUser} />
              </I>
              <input type="text" placeholder="Usuário" />
            </InputField>
            <InputField>
              <I>
                <FontAwesomeIcon icon={faEnvelope} />
              </I>
              <input type="text" placeholder="Email" />
            </InputField>
            <InputField>
              <I>
                <FontAwesomeIcon icon={faLock} />
              </I>
              <input type="password" placeholder="Senha" />
            </InputField>
            <BtnSolid type="submit" value="Cadastrar"></BtnSolid>

            <P>Cadastre-se pelas redes sociais</P>

            <SocialMedia>
              <SocialIcon>
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faGoogle} />
              </SocialIcon>
              <SocialIcon>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialIcon>
            </SocialMedia>
          </SignUpForm>
        </SigninSignup>
      </FormsContainer>

      <PanelsContainer>
        <LeftPanel signUp={isSignUpMode}>
          <ContentLeft signUp={isSignUpMode}>
            <h3>Primeira vez ?</h3>
            <p>
              Faça parte do maior time de basquete de Curitiba! Viva o esporte!
              Viva o basquete! Viva o Coxa!
            </p>
            <BtnTransparentup onClick={handleClickSignUp} id="sign-ip-btn">
              Cadastar
            </BtnTransparentup>
          </ContentLeft>
          <ImageRegister signUp={isSignUpMode} src="images/greek.svg" alt="" />
        </LeftPanel>

        <RightPanel signUp={isSignUpMode}>
          <ContentRight signUp={isSignUpMode}>
            <h3>Já é um de nós ?</h3>
            <p>
              Bem-Vindo de volta Coxa Branca! Vamos voltar para onde estávamos!
              Viva o Coxa!
            </p>
            <BtnTransparentin onClick={handleClickSignIn} id="sign-up-btn">
              Entrar
            </BtnTransparentin>
          </ContentRight>
          <ImageLogin signUp={isSignUpMode} src="images/gameday.svg" alt="" />
        </RightPanel>
      </PanelsContainer>
    </Container>
  );
};

export default index;
