import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';
import { HeaderProps } from './types';

export function Header({ authenticated }: HeaderProps) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {authenticated ? <>
            <BuscarInputContainer>
              <Input placeholder='Buscar...' />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </> : null}
        </Row>
        <Row>
          {authenticated ? (
            <>
              <UserPicture src='https://avatars.githubusercontent.com/u/103227354?v=4' />
            </>
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )
          }

        </Row>
      </Container>
    </Wrapper>
  )
}