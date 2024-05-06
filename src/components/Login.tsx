import styled from 'styled-components';
import { signInWithKakao } from '../api/auth';

const Login = () => {
  return (
    <StMainWrapper>
      <h1>
        내가 여기 넣었나?
        <span>
          솔직히 요즘 한 채용사이트만 쓰는 사람없고 한 회사만 넣는 사람없습니다.
          근데 정리 안해놓으면 너무 헷갈려서 만들게 되었습니다. 지원하기 전 회사
          명을 입력해보세요!😉
        </span>
      </h1>
      <StButton onClick={signInWithKakao}>
        <StImg src="kakao_login.png" alt="이미지" />
      </StButton>
    </StMainWrapper>
  );
};

export default Login;

const StMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 93vh;

  h1 {
    font-size: 100px;
    margin: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px;

    span {
      font-weight: 800;
      font-size: 20px;
      margin: 100px;
      text-align: center;
      word-break: break-word;
    }
  }

  h2 {
    margin: 100px;
  }
  input {
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    border: none;
    margin-right: 50px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 40px;
      span {
        font-size: 20px;
        width: 330px;
        word-break: break-word;
        line-height: 30px;
      }
    }
  }
`;
const StButton = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StImg = styled.img`
  width: 300px;
  height: 40px;
  cursor: pointer;
`;
