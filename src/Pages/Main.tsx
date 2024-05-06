import { useState } from 'react';
import styled from 'styled-components';
import { addDataDataType } from '../types/addDataType';
import { v4 as uuidv4 } from 'uuid';
import { useHandleCompany } from '../hooks/useHandleCompany';
import Swal from 'sweetalert2';
import { signOut } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';

const Main = ({ userId }: { userId: string | null }) => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    signOut();
    navigate('/login');
  };
  const [company, setCompany] = useState<string>('');
  const { addCompanymutation, user } = useHandleCompany({
    company,
    userId,
  });
  const companyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const filteredCompany = user?.filter((i) => {
    return i.company === company;
  });
  const success = ({ newCompany }: { newCompany: addDataDataType }) => {
    Swal.fire({
      icon: 'question',
      text: `${newCompany.company}이름으로 등록하시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: '예',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        addCompanymutation.mutate(newCompany);
      } else if (result.isDismissed) {
        setCompany('');
      }
    });
  };

  const addCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCompany: addDataDataType = {
      id: uuidv4(),
      company,
    };
    if (filteredCompany!.length > 0) {
      Swal.fire({
        icon: 'error',
        text: `${company} 은/는 이미 넣은 회사입니다!`,
      });
      return;
    }
    if (company.length >= 20) {
      Swal.fire({
        icon: 'warning',
        text: '회사명은 최대 20글자까지 입력 가능합니다!',
      });
      setCompany('');
      return;
    }
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
      <StMainWrapper>
        <StButton onClick={logOutHandler}>로그아웃</StButton>
        <h1>
          내가 여기 넣었나?
          <span>
            솔직히 요즘 한 채용사이트만 쓰는 사람없고 한 회사만 넣는
            사람없습니다. 근데 정리 안해놓으면 너무 헷갈려서 만들게 되었습니다.
            지원하기 전 회사 명을 입력해보세요!😉
          </span>
        </h1>
        <h2>현재 {user?.length}곳 지원하셨습니다.</h2>
        <form onSubmit={addCompany}>
          <input
            placeholder="사명 입력"
            value={company}
            onChange={companyHandler}
          />
          <StButton type="submit">등록하기</StButton>
        </form>
        <StCardWrapper>
          {user?.map((i) => {
            return <Cards key={i.id} company={i.company} id={i.id} />;
          })}
        </StCardWrapper>
      </StMainWrapper>
    </>
  );
};

export default Main;

const StCardWrapper = styled.div`
  background-color: #4f7670;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: #9cb4d4;
  font-size: 20px;
  cursor: pointer;
  margin: 10px;

  @media screen and (max-width: 768px) {
    color: aliceblue;
    width: 120px;
  }
`;

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
    margin: 50px;

    span {
      font-weight: 800;
      font-size: 20px;
      margin: 40px;
      text-align: center;
      word-break: break-word;
    }
  }
  form {
    margin-bottom: 30px;
  }
  h2 {
    margin: 60px;
  }
  input {
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    border: none;
    margin-right: 50px;
  }

  /* button {
    width: 100px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    font-size: 18px;
  } */

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
    h2 {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    form {
      /* background-color: red; */
      display: flex;
      align-items: center;

      input {
        width: 200px;
        margin-right: 20px;
      }
    }
  }
`;
