import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { mobile } from "../../responsive";

const Container = styled.div``;


const Title = styled.h1`
  margin: 20px;
`;


const FilterContainer = styled.div`
  display:flex;
  justify-content: space-between;
`;


const Filter = styled.div`
  margin: 20px;
  ${mobile({margin:"0px 20px", display: "flex", flexDirection: "column"})}
`;


const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;


const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`;


const Option = styled.option`

`;


const ProductList = () => {

  const router = useRouter();
  const categoryFromUrl = router.query.category;
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
      
    });
  };


  return (
    <Container>
    <Navbar />
    <Announcement />
    <Title>{categoryFromUrl}</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select name="cor" onChange={handleFilters}>
          <Option disabled >
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select name="tamanho" onChange={handleFilters}>
          <Option disabled >
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={e=>setSort(e.target.value)}>
          <Option value="newest" >Newest</Option>
          <Option value="asc" >Price (asc)</Option>
          <Option value="desc" >Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products cat={categoryFromUrl} filters={filters} sort={sort}/>
    <Newsletter />
    <Footer params=""/>
  </Container>
  );
};

export default ProductList;
