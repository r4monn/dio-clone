import { Container, NameText, Progress, UserPicture } from './styles';
import { UserInfoProps } from './types';

export function UserInfo({ name, image, percentual }: UserInfoProps) {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}