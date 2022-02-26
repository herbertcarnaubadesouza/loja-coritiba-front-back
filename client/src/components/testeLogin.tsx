import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 2200px;
    height: 2200px;
    border-radius: 50%;
    //teste
    background-color: #20bf55;
    background-image :linear-gradient(315deg, #00944f 0%, #00BFA6 74%);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }

  &.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;

    &:before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    //não sei se está certo
    &.sign-up-mode:before{
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;

    }
  }

  @media (max-width: 570px) {
    &:before{
      bottom: 72%;
      left: 50%;
    }

    &.sign-up-mode:before{
      bottom: 28%;
      left: 50%;

    }
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const PanelsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 870px) {   
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

export const SigninSignup = styled.div<{ signUp: boolean }>`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;

  transition: 1s 0.7s ease-in-out;

  //ternário
  left: ${({ signUp }) => (signUp ? `25%` : "")};

  @media (max-width: 870px) {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;


    //ternário
    top: ${({ signUp }) => (signUp ? `5%` : "")};
    transform: ${({ signUp }) => (signUp ? `translate(-50%, 0)` : "")};
    transform: ${({ signUp }) => (signUp ? `translate(-50%, 0)` : "")};
    left: ${({ signUp }) => (signUp ? `50%` : "")};
  }

  
`;

export const SignInForm = styled.form<{ signUp: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1/2;
  grid-row: 1/2;
  transition: 0.2s 0.7s ease-in-out;
  z-index: 2;

  //ternário
  z-index: ${({ signUp }) => (signUp ? `1` : "")};
  opacity: ${({ signUp }) => (signUp ? `0` : "")};


  @media (max-width: 570px) {
    padding: 0 1.5rem;
  }
`;

export const SignUpForm = styled.form<{ signUp: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 0 5rem;
  grid-column: 1/2;
  grid-row: 1/2;
  transition: 0.2s 0.7s ease-in-out;
  z-index: 1;
  opacity: 0;

  //ternário
  z-index: ${({ signUp }) => (signUp ? `2` : "")};
  opacity: ${({ signUp }) => (signUp ? `1` : "")};



  @media (max-width: 570px) {
    padding: 0 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }

  input::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;

export const I = styled.div`
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
`;

export const BtnSolid = styled.input`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #00BFA6;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  &:hover {
    background-color: #0f7466;
  }
`;

export const P = styled.p`
  padding: 0.7rem 0;
  font-size: 1rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3;

  &:hover {
    color: #02af98;
    border-color: #02af98;
  }
`;

export const LeftPanel = styled.div<{ signUp: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;

  pointer-events: all;
  padding: 3rem 17% 2rem 12%;

  //ternário
  pointer-events: ${({ signUp }) => (signUp ? `none` : `all`)};

  @media (max-width: 870px) {
    //padrão
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;

    //diferente
    grid-row: 1 /2;
  }
`;

export const RightPanel = styled.div<{ signUp: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;

  padding: 3rem 12% 2rem 17%;
  pointer-events: none;

  //ternário
  pointer-events: ${({ signUp }) => (signUp ? `all` : `none`)};

  @media (max-width: 870px) {
    //padrão
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;

    //diferente
    grid-row: 3 /4;
  }
`;

export const ContentLeft = styled.div<{ signUp: boolean }>`
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;

  h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
    padding: 0%.7rem 0;
  }

  //ternário
  transform: ${({ signUp }) =>
    signUp ? `translateX(-800px)` : `translateX(0)`};


@media (max-width: 870px) {
    //padrão
    padding-right: 15%;
    transition: 0.9s 0.8s ease-in-out;

    h3{
      font-size: 1.5rem;      
    }


    p{
      font-size: 0.9rem;
      
    }

    transform: ${({ signUp }) =>
    signUp ? `translateY(-300px)` : "translateX(0px)"};

  }


  @media (max-width: 570px) {
    padding: 5px;
  }
`;

export const ContentRight = styled.div<{ signUp: boolean }>`
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;

  h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
    padding: 0%.7rem 0;
  }


  //ternário
  transform: ${({ signUp }) =>
    signUp ? "translateX(0px)" : "translateX(800px)"};

  @media (max-width: 870px) {
    //padrão
    padding-right: 15%;
    transition: 0.9s 0.8s ease-in-out;
    //arrumar isso
    transform: ${({ signUp }) =>
    signUp ? `translateY(0px)` : "translateY(300px)"};      


    h3{
      font-size: 1.5rem;      
    }


    p{
      font-size: 0.9rem;
      padding: 5px;
    }
  }

  @media (max-width: 570px) {
    padding: 0.5rem 1rem;
  }


`;

export const BtnTransparentin = styled.button`
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 150px;
  height: 50px;
  font-weight: 600;
  font-size: 0%.8rem;
  border-radius: 49px;
  color: #fff;

  @media (max-width: 870px) {
    //padrão
    width: 110px;
    height: 45px;
    font-size: 0.8rem;
  }
`;

export const BtnTransparentup = styled.button`
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 160px;
  height: 60px;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 49px;
  color: #fff;


  @media (max-width: 870px) {
    //padrão
    width: 110px;
    height: 45px;
    font-size: 0.8rem;
  }

`;

export const ImageLogin = styled.img<{ signUp: boolean }>`
  width: 100%;
  transition: 1.1s 0.4s ease-in-out;

  //ternário
  transform: ${({ signUp }) =>
    signUp ? "translateX(0px)" : "translateX(800px)"};

  @media (max-width: 870px) {
    //padrão
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;
    //arrumar isso
    transform: ${({ signUp }) =>
    signUp ? `translateY(0px)` : "translateY(300px)"};   
  }


  @media (max-width: 570px) {
    display: none;
  }
`;

export const ImageRegister = styled.img<{ signUp: boolean }>`
  width: 100%;
  height: 65%;
  transition: 1.1s 0.4s ease-in-out;

  //ternário
  transform: ${({ signUp }) =>
    signUp ? `translateX(-800px)` : "translateX(0px)"};

  @media (max-width: 870px) {
    //padrão
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;

    transform: ${({ signUp }) =>
    signUp ? `translateY(-300px)` : "translateX(0px)"};
  }


  @media (max-width: 570px) {
    display: none;
  }
`;