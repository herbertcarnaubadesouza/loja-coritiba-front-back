import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";

interface ProductsProps {
  cat: string | string[] | undefined;
  filters: {};
  sort: string;
}

interface Product {
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

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

const Products = ({ cat, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  //quando categoria mudar, ele entra nessa função
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(response.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  //tamanho e cor
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key] ? item[key].includes(value) : ""
          )
        )
      );
  }, [products, cat, filters]);

  // //ordem
  useEffect(() => {
    console.log(sort);
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.preco - b.preco)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.preco - a.preco)
      );
    }
  }, [sort]);

  console.log(filteredProducts);

  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => (
            <SingleProduct item={product} key={product._id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <SingleProduct item={product} key={product._id} />
            ))}
    </Container>
  );
};

export default Products;
