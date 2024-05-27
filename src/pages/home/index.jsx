import React, { useEffect, useState } from "react";
import { fetchHomeData } from "../../services/api";
import {
  Wrapper,
  FilterWrapper,
  Main,
  NavbarWrapper,
  ContentWrapper,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Form,
  FormCheck,
  FormCheckInput,
  FormCheckLabel,
} from "./styles";

const Home = () => {
  const [data, setData] = useState([]);
  const [priceRange, setPriceRange] = useState("6.42,20");
  const [rating, setRating] = useState("3");
  const [experience, setExperience] = useState("1");
  const [languages, setLanguages] = useState("english");

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

  const handleSubmit = (filterName, filterValue) => {
    const queryParams = new URLSearchParams({
      [filterName]: filterValue,
    }).toString();
    const url = `http://localhost:8000/home?${queryParams}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erro ao enviar os parâmetros do filtro ${filterName}`
          );
        }
        // Trate a resposta conforme necessário
      })
      .catch((error) => {
        console.error(
          `Erro ao enviar os parâmetros do filtro ${filterName}:`,
          error
        );
      });
  };

  return (
    <Wrapper>
      <Main>
        <NavbarWrapper>
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
        </NavbarWrapper>
        <FilterWrapper>
          <Form>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="range"
                id="low-price"
                value="6.42,20"
                checked={priceRange === "6.42,20"}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <FormCheckLabel htmlFor="low-price">Preço baixo</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="range"
                id="medium-price"
                value="20.01,50"
                checked={priceRange === "20.01,50"}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <FormCheckLabel htmlFor="medium-price">
                Preço médio
              </FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="range"
                id="high-price"
                value="50.01,100"
                checked={priceRange === "50.01,100"}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <FormCheckLabel htmlFor="high-price">Preço alto</FormCheckLabel>
            </FormCheck>

            <Button
              type="button"
              onClick={() => handleSubmit("priceRange", priceRange)}
            >
              ENVIAR
            </Button>
          </Form>
          <Form>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="rating"
                id="one-star"
                value="1"
                checked={rating === "1"}
                onChange={(e) => setRating(e.target.value)}
              />
              <FormCheckLabel htmlFor="one-star">⭐</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="rating"
                id="two-stars"
                value="2"
                checked={rating === "2"}
                onChange={(e) => setRating(e.target.value)}
              />
              <FormCheckLabel htmlFor="two-stars">⭐⭐</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="rating"
                id="three-stars"
                value="3"
                checked={rating === "3"}
                onChange={(e) => setRating(e.target.value)}
              />
              <FormCheckLabel htmlFor="three-stars">⭐⭐⭐</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="rating"
                id="four-stars"
                value="4"
                checked={rating === "4"}
                onChange={(e) => setRating(e.target.value)}
              />
              <FormCheckLabel htmlFor="four-stars">⭐⭐⭐⭐</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="rating"
                id="five-stars"
                value="5"
                checked={rating === "5"}
                onChange={(e) => setRating(e.target.value)}
              />
              <FormCheckLabel htmlFor="five-stars">⭐⭐⭐⭐⭐</FormCheckLabel>
            </FormCheck>
            <Button
              type="button"
              onClick={() => handleSubmit("rating", rating)}
            >
              ENVIAR
            </Button>
          </Form>
          <Form>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="experience"
                id="one-year"
                value="1"
                checked={experience === "1"}
                onChange={(e) => setExperience(e.target.value)}
              />
              <FormCheckLabel htmlFor="one-year">- de 3 anos</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="experience"
                id="three-years"
                value="3"
                checked={experience === "2"}
                onChange={(e) => setExperience(e.target.value)}
              />
              <FormCheckLabel htmlFor="three-years">3 - 5 anos</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="experience"
                id="five-years"
                value="5"
                checked={experience === "3"}
                onChange={(e) => setExperience(e.target.value)}
              />
              <FormCheckLabel htmlFor="five-years">+ de 5 anos</FormCheckLabel>
            </FormCheck>

            <Button
              type="button"
              onClick={() => handleSubmit("experience", experience)}
            >
              ENVIAR
            </Button>
          </Form>
          <Form>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="languages"
                id="english"
                value="english"
                checked={languages === "english"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              <FormCheckLabel htmlFor="english">Inglês</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="languages"
                id="spanish"
                value="spanish"
                checked={languages === "spanish"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              <FormCheckLabel htmlFor="spanish">Espanhol</FormCheckLabel>
            </FormCheck>
            <FormCheck>
              <FormCheckInput
                type="radio"
                name="languages"
                id="french"
                value="french"
                checked={languages === "french"}
                onChange={(e) => setLanguages(e.target.value)}
              />
              <FormCheckLabel htmlFor="french">Francês</FormCheckLabel>
            </FormCheck>

            <Button
              type="button"
              onClick={() => handleSubmit("languages", languages)}
            >
              ENVIAR
            </Button>
          </Form>
        </FilterWrapper>
        <ContentWrapper>
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
                    <Button type="submit" favorite={babysitter.isFavorited}>
                      {babysitter.isFavorited ? "❤ Favorited" : "♡ Favorite"}
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ContentWrapper>
      </Main>
    </Wrapper>
  );
};

export default Home;
