import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #343a40;
  padding: 15px;
  color: #fff;
  height: 100vh;
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #495057;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #dee2e6;
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
      a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: #343a40;
        &:hover {
          background-color: #f8f9fa;
        }
      }
    }
  }
`;

export const Content = styled.main`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h5`
  margin: 0 0 10px 0;
  text-transform: capitalize;
`;

export const CardText = styled.p`
  margin: 0;
`;

export const CardFooter = styled.div`
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  small {
    color: #6c757d;
  }
  a {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.favorite ? "red" : "#6c757d")};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  text-align: center;
`;

export const FormCheck = styled.div`
  padding: 10px;
`;

export const FormCheckInput = styled.input`
  margin-right: 10px;
`;

export const FormCheckLabel = styled.label`
  color: #fff;
  font-size: 14px;
`;
