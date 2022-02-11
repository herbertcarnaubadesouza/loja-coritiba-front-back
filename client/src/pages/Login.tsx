import router from "next/router";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`    
    width: 100vw;
    height: 100vh;
    background: url("./images/login.png");
    display:flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;


const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;

    ${mobile({width:"75%"})}
`;

const Title = styled.h1`
    margin: 0px;
    font-size: 24px;
    font-weight: 300;
`;


const Form = styled.form`
    display:flex;
    flex-direction: column;
`;


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{
        background-color: #015252;
    }
`;


const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`;

const Login = () => {
    const user = true;

    if(user){
        router.push('/index');
    }


    return(    
    <Container>            
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />                       
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  );
};


export default Login