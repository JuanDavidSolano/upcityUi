import { useForm } from "react-hook-form";

import logoupc from "../../assets/logoupc.png";
import "./style.css";
import Particles from "../../components/Particles";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    /* eslint-disable */
    mp.trigger("callServerEvent", "verifyUser", JSON.stringify(data));
  };

  return (
    <div className="columns is-vcentered" id="app">
      <div className="login column is-4">
        <section className="section">
          <div className="has-text-centered">
            <img className="login-logo" src={logoupc} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">Usuario</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="text"
                  {...register("username")}
                />
                <span className="icon is-small is-right">
                  <i className="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Contraseña</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="password"
                  {...register("password")}
                />
                <span className="icon is-small is-right">
                  <i className="fa fa-key"></i>
                </span>
              </div>
            </div>
            <div className="has-text-centered">
              <input
                className="button is-vcentered is-primary is-outlined"
                type="submit"
                value="Entrar"
              />
            </div>
          </form>

          <div className="has-text-centered">
            <span className="text">No tienes una cuenta? </span>
            <a className="register-text" href="/signup">
              Registrate ahora!
            </a>
          </div>
        </section>
      </div>
      <div className="interactive-bg column is-8">
        <Particles />
      </div>
    </div>
  );
}

export default Login;
