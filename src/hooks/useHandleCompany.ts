import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCompany } from '../api/company';
import Swal from 'sweetalert2';
// import { addDataDataType } from '../types/addDataType';
import { deleteData, getUserDataById } from '../api/auth';

interface Props {
  company: string | null;
  userId: string | null;
}

export const useHandleCompany = ({ company, userId }: Props) => {
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserDataById(userId),
    enabled: !!userId,
  });

  const addCompanymutation = useMutation({
    mutationFn: addCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      Swal.fire({
        icon: 'success',
        text: `${company}등록 되었습니다!`,
      });
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        text: '이미 등록된 회사입니다',
      });
    },
  });

  const deleteCompanymutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      Swal.fire({
        icon: 'success',
        text: `"${company}"가 지원목록에서 삭제되었습니다!`,
      });
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        text: '오류입니다! 삭제되지 않았어요!',
      });
    },
  });

  return { addCompanymutation, deleteCompanymutation, user };
};
