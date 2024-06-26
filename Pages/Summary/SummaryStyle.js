import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  font-size: 30px;
  font-weight: 600;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  text-transform: uppercase;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HrStyled = styled.hr`
  margin: 4rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;