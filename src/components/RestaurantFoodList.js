import { React, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { device } from '../../constants/devices';
import { addProduct, getProducts, deleteProduct } from '../../WebAPIs';
// import Pagination from '../../components/Pagination';
// import Loader from '../../components/Loader';
const reuseInputAttributes = css`
  margin: 10px 10px;
  border-color: black;
  border-radius: 5px;
`;

const reuseButton = css`
  width: 95%;
  height: 80px;
  background: white;
  margin: 5px 5px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.11);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  };
`;

const Root = styled.div`
  width: 100%;
  background: #fefff8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0px;
`;

const AddProductContainer = styled.main`
  width: 80%;
  border-radius: 8px;
`;

const AddProductForm = styled.form`
  width: 100%;
  display: flex;
`;

const TextDetailContainer = styled.section`
  width: 576px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.section`
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 38px;
  ${reuseInputAttributes};

  @media ${device.mobileXS} {
    width: 184px;
  };
  @media ${device.mobileS} {
    width: 240px;
  };
  @media ${device.mobileM} {
    width: 260px;
  };
  @media ${device.tablet} {
    width: 400px;
  };
  @media ${device.laptop} {
    width: 350px;
  };
`;

const InputLong = styled.textarea`
  border-width: 2px;
  ${reuseInputAttributes};

  @media ${device.mobileXS} {
    width: 184px;
    height: 360px;
  };
  @media ${device.mobileS} {
    width: 240px;
  };
  @media ${device.mobileM} {
    width: 260px;
    height: 300px;
  };
  @media ${device.tablet} {
    width: 400px;
  };
  @media ${device.laptop} {
    width: 350px;
  };
`;

const InputLabel = styled.label`
  width: 86px;
  margin: 10px 10px;

  @media ${device.mobileXS} {
    text-align: center;
  };
  @media ${device.tablet} {
    text-align: left;
  };
`;

const Option = styled.option``;

const Select = styled.select`
  height: 38px;
  ${reuseInputAttributes};
 border-width: 2px;

  @media ${device.mobileXS} {
    width: 184px;
  };
  @media ${device.mobileS} {
    width: 240px;
  };
  @media ${device.mobileM} {
    width: 260px;
  };
  @media ${device.tablet} {
    width: 400px;
  };
  @media ${device.laptop} {
    width: 350px;
  };
`;
const AddButton = styled.button`
  width: 100%;
  height: 80px;
  background: rgba(163, 222, 162, 0.5);
  margin: 20px auto;
  border: none;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.11);
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  };
`;

const OptionContainer = styled.div`
  border-radius: 5px;
  display: flex;

  @media ${device.mobileXS} {
    flex-direction: column;
  };
  @media ${device.tablet} {
    flex-direction: row;
  };
`;

const ProductsOption = styled.div`
  border-bottom: 5px solid transparent;
  padding: 20px;
  font-weight: bold;
  color: #4b731f;
  cursor: pointer;

  &:hover {
    border-bottom: 5px solid rgba(247, 202, 24, 0.7);;
  };

  @media ${device.mobileXS} {
    font-size: 24px;
  };

  @media ${device.laptop} {
    font-size: 32px;
  };
`;

const ShowProductsContainer = styled.main`
  width: 80%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  width: 100%;
  background: rgba(247, 202, 24, 0.7);
  margin: 14px 0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductImageConatiner = styled.div`
  width: 300px;
  height: 300px;
`;

const ProductImage = styled.img`
  object-fit: cover;

  @media ${device.mobileXS} {
    width: 100%;
    height: 100%;
  };
`;

const ProductTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProductInfo = styled.p`
  width: 94%;
  margin: 10px;
`;

const ButtonsContainer = styled.section`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EditButton = styled(HashLink)`
  ${reuseButton};
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const DeleteButton = styled.button`
  ${reuseButton};
`;

const ErrMessage = styled.h5`
  text-align: center;
  color: red;
`;

export default function AdminMenu() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('Main');const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(filter)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [filter]);

  const indexOfLastProduct = currentPage * 10;
  const indexOfFirstProduct = indexOfLastProduct - 10;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Root>
      {/* Rest of the component */}
    </Root>
  );
}