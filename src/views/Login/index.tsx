import { useNotification } from 'context/notification';
import { useMutation } from 'customHooks/query';
import { useAuth } from 'context/auth';

const Login = () => {
  const notification = useNotification();
  const auth = useAuth();

  const handleSubmit = (evt:any) => {
    evt.preventDefault();
    requestLogin();
  }

  const handleError = () => {
    notification.error("Erro ao tentar fazer login");
  };
  const handleSuccess = (data:any) => {
    auth.login(data);
  }
  const { mutate: requestLogin, isLoading } = useMutation(
    { url: `v1/auth/login`, method: 'post', data: {username: 'asd',password: '123'} },
    { onSuccess: handleSuccess, onError: handleError }
  );
  return (
    <>
      <p>Login View</p>
      <form onSubmit={handleSubmit}>
        <button disabled={isLoading}>
          Logar
        </button>
      </form>
    </>
  );
};

export default Login;
