import { stat } from "fs";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./images/login.png");
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 24px;
  font-weight: 300;
`;

const Error = styled.span`
  color:red;
`


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
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
  &:hover {
    background-color: #015252;
  }
  &::disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export default Login;

function Login() {

  
  const user = useSelector(state => state.user.currentUser)

  if(user !== null){    
    Router.push('/'); 
  }


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=> state.user);

  const handleLoginClick = (e:any) => {     
    e.preventDefault();
    login(dispatch, {username, password});
  }  

  return (  
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLoginClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something Went Wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
