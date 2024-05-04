import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCompany } from '../api/company';
import Swal from 'sweetalert2';
import { addDataDataType } from '../types/addDataType';
import { getUserDataById } from '../api/auth';

interface Props {
  company: string | null;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  userId: string | null;
}

export const useHandleCompany = ({ company, setCompany, userId }: Props) => {
  const queryClient = useQueryClient();
  const success = ({ newCompany }: { newCompany: addDataDataType }) => {
    Swal.fire({
      icon: 'question',
      text: `${company}이름으로 등록하시겠습니까?`,
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

  return { addCompanymutation, success, user };
};
