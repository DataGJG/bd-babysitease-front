import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  background-color: #f8f9fa;
`;

export const NavbarWrapper = styled.nav`
  background-color: #fff;
  box-shadow: 0 0 2rem 0 rgba(33, 37, 41, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 25px;
    color: #746d8d;
    text-decoration: none;
  }

  p {
    margin: 0;
    font-weight: bold;
    font-size: 20px;
    color: #746d8d;
  }

  .dropdown {
    position: relative;
    img {
      cursor: pointer;
    }

    .dropdown-menu {
      position: absolute;
      right: 0;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
      display: none;
    }

    &:hover .dropdown-menu {
      display: block;
    }
  }
`;

export const ContentWrapper = styled.main`
  padding: 20px;
  display: flex;
  justify-content: center; /* Centraliza os cards horizontalmente */
  gap: 20px;
  max-width: 1200px; /* Define uma largura máxima para evitar que os cards se espalhem demais */
  margin: 0 auto; /* Centraliza o conteúdo */
  flex-direction: row; /* Ajusta a direção do flex para linha */
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 250px; /* Largura fixa para cada card */
  margin-bottom: 20px; /* Adiciona margem inferior para espaçamento entre as linhas de cards */
  margin-right: 20px; /* Adiciona margem direita para espaçamento entre os cards */
  margin-left: 20px; /* Adiciona margem esquerda para espaçamento entre os cards */
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #6c757d;
`;

export const CardFooter = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.favorite ? "#dc3545" : "#007bff")};
  border: none;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${(props) => (props.favorite ? "#c82333" : "#0056b3")};
  }
`;

export const Form = styled.form`
  padding: 10px;
  text-align: center;
`;

export const FormCheck = styled.div`
  margin-bottom: 10px;
`;

export const FormCheckInput = styled.input`
  margin-right: 5px;
`;

export const FormCheckLabel = styled.label`
  font-size: 14px;
  color: #6c757d;
`;
