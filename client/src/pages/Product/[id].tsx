import { Add, Remove } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import { mobile } from "../../responsive";
import { publicRequest } from "../../requestMethod";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({padding:"10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
    flex:1;    
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;    
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding:5px;
`;


const FilterSizeOption = styled.option`
`;


const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`;


const AmountContainer = styled.div`
    display:flex;
    align-items: center;
    font-weight: 700;
`;


const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
`;


const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight: 700;

    &:hover{
        background-color: lightgray;
    }
`;



interface Product{
       
        [key: string]: any;
        titulo: string;
        _id: number;
        imagem: string;
        categorias: Array<string>;
        tamanho: Array<string>;
        cor: Array<string>;
        preco: number;
        inStock: Boolean;
        createdAt: string;          
   
}

const Product = () => {

    const router = useRouter();
    const id = router.query.id;
    
    const[product, setProduct] = useState<Product | undefined>(undefined);
    const[quantity, setQuantity] = useState<number | undefined>(1);
    
    const[color, setColor] = useState<string | undefined>("");
    const[size, setSize] = useState<string | undefined>("");

    const dispatch = useDispatch()
    
    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const response = await publicRequest.get(`/products/find/${id}`);
                setProduct(response.data);
                
            }catch{

            }
        } 
        getProduct()
    },[id])    


    const handleQuantity = (type : "dec" | "inc") =>{
        if(type === "dec" && quantity != null){
            if(quantity > 0){
                setQuantity(quantity - 1)
            }
        }else{
            if(quantity != null){
                setQuantity(quantity + 1)
            }
        }
    }

    const handleClick = () =>{
        if(product != null && quantity != null){            
            dispatch(
                addProduct({...product, quantity, color, size})
            )      
        }
    };

  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                <Image src ={product?.imagem} /> 
              </ImgContainer>
              <InfoContainer>
                  <Title>{product?.titulo}</Title>
                  <Desc>
                     {product?.descricao}
                    </Desc>
                  <Price>$ {product?.preco}</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          {product?.cor.map(c => (                              
                            <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                          ))}
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product?.tamanho.map(t => (                              
                              <FilterSizeOption key={t}>{t}</FilterSizeOption>
                                ))}                              
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec") }/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc") }/>                          
                      </AmountContainer>
                      <Button onClick={handleClick}>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer params=""/>
      </Container>
  );
};


export default Product
