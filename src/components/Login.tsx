// import { useNavigate } from 'react-router-dom';
import { signInWithKakao } from '../api/auth';

const Login = () => {
  console.log('로그인 컴포넌트 렌더링됨');
  return (
    <div>
      <button onClick={signInWithKakao}>카카오 로그인</button>
    </div>
  );
};

export default Login;
