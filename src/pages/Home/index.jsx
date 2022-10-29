import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import bannerImage from '../../assets/banner.png';
import { Header } from "../../components/Header";

import { HomeContainer, TextContent, Title, TitleHighlight } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title='Começar agora' variant='secondary' onClick={() => null} />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </HomeContainer>
    </>
  )
}