import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`    
    width: 100vw;
    height: 100vh;
    background: url("./images/register.png");
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
`;


const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
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
    flex-wrap: wrap;
`;


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;


const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;


    &:hover{
        background-color: #015252;
    }
`;

const Register = () => {
  return (        
        <Container>            
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
  );
};


export default Register
