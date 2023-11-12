import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { logIn, user } = useAuthContext();

  useEffect(() => {
    if (user) {
      console.log(true);
      navigate("/");
    }
  }, [user, navigate]);

  const submit = (data) => {
    console.log(data);
    logIn(data.name);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} className="login-form">
        <div className="login-container">
          <div>
            <label htmlFor="text">Укажи своё имя</label>
            <input type="text" {...register("name")} />
            <button className="btn btn-start">Начать игру!</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
