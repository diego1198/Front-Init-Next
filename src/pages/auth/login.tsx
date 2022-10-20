import { useForm, SubmitHandler } from "react-hook-form";
import { Alert } from "../../components/common/alert/alert";
import { Input } from "../../components/forms/input";
import { AlertTypeEnum } from "../../shared/enums/AlertType";
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHook";
import { login } from "../../store/thunks/users/user.thunks";

type LoginRequest = {
  userName: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginRequest> = (data) => dispatch(login(data));

  const { isLoading, error } = useAppSelector((state) => state.user);

  return (
    <div>
      <div className="container">
        <Alert
          title="Error"
          message="Credenciales incorrectas"
          type={AlertTypeEnum.Danger}
          open={error !== undefined}
        />
        <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="card-body block-el">
              <a href="index.html" className="brand text-center d-block m-b-20">
                <img src="/icon.png" alt="" width="150" height="150" />
              </a>
              <h5 className="sign-in-heading text-center m-b-20">SGC ARGOS</h5>
              <div className="form-group">
                <Input<LoginRequest>
                  name="userName"
                  type="text"
                  placeholder="Usuario"
                  register={register}
                  rules={{ required: "Por favor ingrese un usuario" }}
                  errors={errors}
                />
              </div>
              <div className="form-group">
                <Input<LoginRequest>
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  register={register}
                  errors={errors}
                  rules={{ required: "Ingrese una contraseña" }}
                />
              </div>
              <button
                className="btn btn-primary btn-rounded btn-floating btn-lg btn-block"
                type="submit"
                disabled={isLoading}
              >
                Ingresar
              </button>
              {isLoading && <div className="qt-block-ui" />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
