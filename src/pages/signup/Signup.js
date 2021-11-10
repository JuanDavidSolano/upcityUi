import { useForm } from "react-hook-form";

import logoupc from "../../assets/logoupc.png";
import "./style.css";
import Particles from "../../components/Particles";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    /* eslint-disable */
    mp.trigger("callServerEvent", "createAccount", JSON.stringify(data));
  };

  const showModal = (text) => {
    alert("test");
    const target = document.getElementById("modal");
    target.classList.add("is-active");
    const modalText = document.getElementById("modalText");
    modalText.innerHTML = text;
  };

  const closeModal = () => {
    const target = document.getElementById("modal");
    target.classList.remove("is-active");
  };

  return (
    <div>
      <div className="columns is-vcentered">
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
                <label className="label">Email</label>
                <div className="control has-icons-right">
                  <input className="input" type="text" {...register("email")} />
                  <span className="icon is-small is-right">
                    <i className="fa fa-envelope"></i>
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
                  value="Registrarse"
                />
              </div>
            </form>

            <div className="has-text-centered">
              <span className="text">Ya tienes una cuenta?</span>
              <a className="login-text" href="/login">
                {" "}
                Ingresa ahora!
              </a>
            </div>
          </section>
        </div>
        <div id="particles-js" className="interactive-bg column is-8">
          <Particles />
        </div>
        <div className="modal" id="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <h1 id="modalText" className="modalText"></h1>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            id="modalClose"
            onClick={closeModal}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Register;
