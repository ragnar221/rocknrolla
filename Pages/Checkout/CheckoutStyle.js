import styled from "styled-components";
export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  width: 90vw;
  gap: 1rem;
  margin-top: 10rem;
  height: 100vh;
  

  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    scale: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;