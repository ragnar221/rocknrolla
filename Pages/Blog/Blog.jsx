import React, { useState } from "react";
import {
  BlogHeroContainer,
  BlogSubTitle,
  BlogTitle,
  BlogWrapper,
  CardsContainer,
  ContainerRecetas,
  ContainerTips,
  RecipeLog,
  TipsInfo,
  RecipePaper,
  RecipeLabel,
  RecipeLabelContainer,
  WorkshopImg
} from "./BlogStyle";
import { useSelector } from "react-redux";
import DrinksCards from "../../src/Components/drinksCards/DrinksCards";

const Blog = ({ id }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const recetas = useSelector((state) => state.recetas.recetas);

  return (
    <BlogWrapper>
      <BlogHeroContainer>
        <BlogTitle>¡Bienvenido!</BlogTitle>
        <BlogSubTitle>¡permitenos contarte un poco mas sobre nosotros!</BlogSubTitle>
      </BlogHeroContainer>

      <ContainerTips>
        <BlogSubTitle>Somos Fabricantes con 15 años de expeciencia</BlogSubTitle>
        <TipsInfo>
          durante los ultimos 15 años nos hemos dedicado a la fabricacion y confeccion de prendas de cuero totalmente artesanales.
          desde abrigos formales hasta chaquetas para motociclistas e incluso diseños totalmente avant garde.
        </TipsInfo>
        <BlogSubTitle>Nuestro taller</BlogSubTitle>
        <TipsInfo>
          Para la fabricacion de nuestros productos utilizamos solo los mejores materiales locales con el objetivo de ofrecerte un producto de
          excelente calidad a precio accesible.
        </TipsInfo>
          <WorkshopImg src="https://res.cloudinary.com/dfpp4mriw/image/upload/v1697048279/workshop_ns2zau.jpg" alt="taller" />
      </ContainerTips>
      <ContainerRecetas>
        <RecipePaper square>
        <BlogSubTitle>Ahora permitenos mostrarte algunos de los diseños que hemos hecho a pedido</BlogSubTitle>
          
          <RecipeLog sx={{ padding: 2 }}>
            {recetas.map(
              (receta) =>
                tabIndex === receta.recetaNumber && (
                  <CardsContainer>
                    <DrinksCards key={receta.id} {...receta} />
                  </CardsContainer>
                )
            )}
          </RecipeLog>
        </RecipePaper>
      </ContainerRecetas>
    </BlogWrapper>
  );
};

export default Blog;