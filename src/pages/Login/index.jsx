import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MdEmail, MdLock } from 'react-icons/md';

import {
  LoginContainer,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from './styles';

import { api } from '../../services/api';

const schema = yup.object({
  email: yup.string().email('Este e-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'Insira no mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

export function Login() {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Usuário ou senha inválido')
      }
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </LoginContainer>
    </>
  )
}