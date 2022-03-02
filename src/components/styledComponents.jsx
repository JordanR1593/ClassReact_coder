import styled from "styled-components"
//Cart
const WrapperCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const ContentCart = styled.div`
  
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:25px;
  justify-content: space-between;
  width:20rem;
  height:20rem;
`;

const Product = styled.div`
  margin-top:30px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 10rem;
  height:10rem;
  object-fit:cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
export {WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail,  ProductPrice}