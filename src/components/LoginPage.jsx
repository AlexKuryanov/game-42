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
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <div>
          <label htmlFor="text">Имя</label>
          <input type="text" {...register("name")} />
        </div>
        <button className="btn btn-start">Начать игру!</button>
      </div>
    </form>
  );
};

export default LoginPage;
