import React, { useEffect, useState } from "react";
import { fetchHomeData } from "../../services/api";
import {
  Wrapper,
  Sidebar,
  Main,
  Navbar,
  Content,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  SidebarItem,
  SidebarLink,
  Form,
  FormCheck,
  FormCheckInput,
  FormCheckLabel,
} from "./styles";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchHomeData();
        setData(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);

  return (
    <Wrapper>
      <Sidebar>
        <SidebarItem>
          <SidebarLink
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#location"
          >
            <i className="lni lni-map-marker"></i>
            <span>Preço</span>
          </SidebarLink>
          <div id="location" className="collapse">
            <Form action="home.html" method="GET">
              <FormCheck>
                <FormCheckInput
                  type="radio"
                  name="range"
                  id="low-price"
                  value="6.42,20"
                  defaultChecked
                />
                <FormCheckLabel htmlFor="low-price">Preço baixo</FormCheckLabel>
              </FormCheck>
              <FormCheck>
                <FormCheckInput
                  type="radio"
                  name="range"
                  id="medium-price"
                  value="21,40"
                />
                <FormCheckLabel htmlFor="medium-price">Médio</FormCheckLabel>
              </FormCheck>
              <FormCheck>
                <FormCheckInput
                  type="radio"
                  name="range"
                  id="high-price"
                  value="41,60"
                />
                <FormCheckLabel htmlFor="high-price">Alto</FormCheckLabel>
              </FormCheck>
              <Button type="submit">Filtrar</Button>
            </Form>
          </div>
        </SidebarItem>
        {/* Repeat for other filters */}
      </Sidebar>
      <Main>
        <Navbar>
          <a href="home.html">BabysitEase</a>
          <div className="d-flex align-items-center">
            <p>Olá João!</p>
          </div>
          <div className="dropdown">
            <img
              src="https://cdn-icons-png.freepik.com/512/64/64572.png"
              alt="User"
              height="40"
            />
            <div className="dropdown-menu">
              <a href="profile.html">Profile</a>
              <a href="edit-profile.html">Editar Perfil</a>
              <a href="logout.html">Logout</a>
            </div>
          </div>
        </Navbar>
        <Content>
          <div className="row">
            {data.map((babysitter) => (
              <Card key={babysitter.id}>
                <CardImg src={babysitter.image} alt={babysitter.name} />
                <CardBody>
                  <CardTitle>{babysitter.name}</CardTitle>
                  <CardText>{babysitter.description}</CardText>
                </CardBody>
                <CardFooter>
                  <small>Preço/Hora: R${babysitter.hourlyPrice}</small>
                </CardFooter>
                <CardFooter>
                  <a href="babysitter-details.html">Read More</a>
                  <form action="favorited-babysitter.html" method="POST">
                    <Button type="submit">
                      {babysitter.isFavorited ? "❤ Favorited" : "♡ Favorite"}
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Content>
      </Main>
    </Wrapper>
  );
};

export default Home;
