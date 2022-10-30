import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';

export function Card() {
  return (
    <CardContainer>
      <ImageBackground src='https://alfredobottone.com.br/wp-content/uploads/2019/12/digital-innovation-one-750x400.jpg' />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/103227354?v=4' />
          <div>
            <h4>Ramon Dias</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de ReactJS</h4>
          <p>Projeto feito durante o bootcamp Orange da Digital Innovation One</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #React</h4>
          <p>
            <FiThumbsUp /> 18
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}