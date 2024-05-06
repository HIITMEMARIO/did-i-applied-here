import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useHandleCompany } from '../hooks/useHandleCompany';
import { RootState } from '../redux/config/configStore';
import { useSelector } from 'react-redux';

interface CardProps {
  company: string;
  id: string;
}

const Cards = ({ company, id }: CardProps) => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const { deleteCompanymutation } = useHandleCompany({ company, userId });

  const handleDelete = () => {
    Swal.fire({
      icon: 'question',
      text: `${company}의 지원을 취소하실건가요?`,
      showCancelButton: true,
      confirmButtonText: '예',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompanymutation.mutate(id);
      }
    });
  };

  return (
    <StCardWrapper>
      <div>{company}</div>
      <button onClick={handleDelete}>지원취소</button>
    </StCardWrapper>
  );
};

export default Cards;

const StCardWrapper = styled.div`
  width: 300px;
  background-color: #9cb4d4;
  height: 100px;
  margin: 15px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 20px;
  font-size: 18px;
  position: relative;
  word-break: break-all;

  div {
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  button {
    width: 80px;
    position: absolute;
    right: 10px;
  }

  @media screen and (max-width: 768px) {
  }
`;
