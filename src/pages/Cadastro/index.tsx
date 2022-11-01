import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { MdPerson, MdEmail, MdLock } from 'react-icons/md';

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
import { FormData } from "./types";

const schema = yup.object({
  name: yup.string().min(4, 'Insira um nome válido').required('Campo obrigatório'),
  email: yup.string().email('Este e-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'Insira no mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

export function Cadastro() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData: FormData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);

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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                errorMessage={errors?.name?.message}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
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
              <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleClickSignIn} />
            </form>
            <Row>
              <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
            </Row>
            <Row>
              <span>Já tenho conta.</span>
              <CriarText>Fazer login.</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </LoginContainer>
    </>
  )
}