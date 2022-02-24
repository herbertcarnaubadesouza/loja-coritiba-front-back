import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

interface FooterColor {
  params: string
}

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Container = styled.div<{"background-color" : string}>`
  display: flex;  
  background-color: ${(props) => props["background-color"]};

  ${mobile({flexDirection:"column"})}
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({backgroundColor:"#fdfff8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = ({params} : FooterColor) => {
  return (
    <Container background-color = {params}>        
      <Left>
        <Logo>CORITIBA</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero
          voluptas ducimus odio animi ab, placeat labore sit dolorum vitae neque
          exercitationem excepturi necessitatibus facere vero amet. Deserunt,
          soluta aliquam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight :"10px"}} /> 622 Dixie Path, South Tobinchester 98336</ContactItem>
        <ContactItem><Phone style={{marginRight :"10px"}} />+ 1 234 56 78</ContactItem>
        <ContactItem><MailOutline style={{marginRight :"10px"}} /> contact@lama.dev</ContactItem>

        <Payment src="/images/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
