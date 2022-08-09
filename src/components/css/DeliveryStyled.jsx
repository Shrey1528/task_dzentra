import styled from "styled-components";

export const DeliveryStyled = styled.div`
  .delivery-con {
    width: 105%;
    margin-top: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 0 0.5rem;
    font-family: "Montserrat", sans-serif;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      font-family: "Montserrat", sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      color: #818386;
      .search {
        width: 60%;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        padding: 1rem;
        input {
          width: 50%;
          height: 0.5rem;
          padding: 1rem;
          border-radius: 10px;
          border-color: #84909d;
        }
        select {
          padding: 0 2rem;
          border-color: #84909d;
          background: none;
          border-radius: 10px;
        }
      }
    }
    .customer-con {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 1rem;
      .card {
        padding: 1rem;
        .details {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 700;
          color: #818386;
          margin-top: -1rem;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .delivery-con {
      margin-left: -1rem;
      width: 85vw;
      .header {
        font-size: 1rem;
        justify-content: flex-start;
        .search {
          select {
            width: 10px;
          }
        }
      }
      .customer-con {
        display: flex;
        flex-direction: column;
        width: auto;
      }
    }
  }
`;

export const CardStyled = styled.div`
  border: 1px solid ${(props) => props.color};
  box-shadow: -6px 0px 0px 0px ${(props) => props.color};
  border-radius: 12px;
`;
export const DivStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  background-color: ${(props) => props.bgcolor};
  padding: 0.5rem;
  border-radius: 15px;
  margin-bottom: -0.5rem;
`;
