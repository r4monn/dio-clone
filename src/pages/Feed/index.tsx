import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";

import { UserInfo, } from "../../components/UserInfo";

export function Feed() {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={70} name='Ramon Dias' image='https://avatars.githubusercontent.com/u/103227354?v=4' />
          <UserInfo percentual={63} name='Usuário 2' image='https://avatars.githubusercontent.com/u/103227354?v=4' />
          <UserInfo percentual={42} name='Usuário 3' image='https://avatars.githubusercontent.com/u/103227354?v=4' />
          <UserInfo percentual={22} name='Usuário 4' image='https://avatars.githubusercontent.com/u/103227354?v=4' />
        </Column>
      </Container>
    </>
  )
}