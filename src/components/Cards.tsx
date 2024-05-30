import styled from "styled-components";
import Swal from "sweetalert2";
import { useHandleCompany } from "../hooks/useHandleCompany";
import { RootState } from "../redux/config/configStore";
import { useSelector } from "react-redux";
import Button from "./UI/Button";

interface CardProps {
  company: string;
  id: string;
  platform: string;
  created_at: string;
}

const Cards = ({ company, id, platform, created_at }: CardProps) => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const { deleteCompanymutation } = useHandleCompany({ company, userId });

  const handleDelete = () => {
    Swal.fire({
      icon: "question",
      text: `${company}의 지원을 취소하실건가요?`,
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompanymutation.mutate(id);
      }
    });
  };

  return (
    <StCardWrapper>
      <h3>{company}</h3>
      <StContentBox>
        <span>{platform}</span>
        <span>{created_at}</span>
      </StContentBox>
      <Button variant="primary" onClick={handleDelete}>
        지원취소
      </Button>
    </StCardWrapper>
  );
};

export default Cards;

const StCardWrapper = styled.div`
  width: 300px;
  background-color: #9cb4d4;
  height: 180px;
  margin: 15px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
  position: relative;
  word-break: break-all;
  flex-direction: column;
  align-items: center;

  h3 {
    height: 40px;
    font-size: 30px;
    margin: 30px;
  }
`;

const StContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;
