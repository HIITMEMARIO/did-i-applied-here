import { useState } from 'react';
import styled from 'styled-components';
import { addDataDataType } from '../types/addDataType';
import { v4 as uuidv4 } from 'uuid';
import { useHandleCompany } from '../hooks/useHandleCompany';
import Swal from 'sweetalert2';
import { signOut } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Main = ({ userId }: { userId: string | null }) => {
  console.log('asdfasdfasfasdfafasdf');
  const navigate = useNavigate();
  const logOutHandler = () => {
    signOut();
    navigate('/login');
  };
  const [company, setCompany] = useState<string>('');
  const { success, user } = useHandleCompany({ company, setCompany, userId });

  const companyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const addCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCompany: addDataDataType = {
      id: uuidv4(),
      company,
    };

    if (!company.length) {
      Swal.fire({
        icon: 'warning',
        text: '회사명을 넣어주세요!',
      });
    } else {
      success({ newCompany });
      setCompany('');
    }
  };

  return (
    <>
      <button onClick={logOutHandler}>카카오 로그아웃</button>
      <StMainWrapper>
        <h1>
          내가 여기 넣었나?
          <span>
            솔직히 요즘 한 채용사이트만 쓰는 사람없고 한 회사만 넣는 사람없다.
            근데 정리 안해놓으면 너무 헷갈린다. 그래서 만들었다.
          </span>
        </h1>
        <h2>현재 {user?.length}곳 지원하셨습니다.</h2>
        <form onSubmit={addCompany}>
          <input
            placeholder="사명 입력"
            value={company}
            onChange={companyHandler}
          />
          <button type="submit">등록하기</button>
        </form>
      </StMainWrapper>
    </>
  );
};

export default Main;

const StMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
      margin: 40px;
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

  button {
    width: 100px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
    border: none;
  }
`;
