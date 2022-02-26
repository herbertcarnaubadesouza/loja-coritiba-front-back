import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { logout } from "../redux/apiCalls";
import { useRouter } from "next/router";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 4rem;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const router = useRouter();

  const quantity = useSelector((state) => state.cart.quantity);

  const usuarioLogado = useSelector(state => state.user.currentUser);

  let logado :string = 'SIGN IN';

  if(usuarioLogado !== null){
    logado = 'Sair';
  }

  const dispatch = useDispatch();

  const handleLogoutClick = (e:any) => {     
    e.preventDefault();
    if(usuarioLogado !== null){
      logout(dispatch);
    }else{
      router.push("/Login")
    }
    
  } 


  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 18 }} />
            </SearchContainer>
          </Left>
          <Link href={"/"}>
            <Center>
              <Logo>CORITIBA BASQUETE</Logo>
            </Center>
          </Link>
          <Right>            
            <MenuItem onClick={handleLogoutClick}>
              {logado}
            </MenuItem>
            <Link href={"/Cart"}>
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
