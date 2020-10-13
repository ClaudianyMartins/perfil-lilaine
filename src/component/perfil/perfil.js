import React from "react";
import Liliane from "../../assects/Liliane.jpg";

export default class PerfilLiliane extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="upper-container">
            <div className="image-container">
              <img
                id="img-perfil"
                align="left"
                src={Liliane}
                alt="Perfil Liliane"
              />
            </div>
            <div className="title-container">
              <h1>Liliane Silva de Arruda</h1>
              <h4>Front-ent Developer jr.</h4>
            </div>
          </div>
          <div className="lower-container">
            <div className="personal-container">
              <br />
              <h3>Características</h3>
              <p>
                Considero-me uma pessoa determinada, comprometida, e muito
                dedicada a aprender.
              </p>
              <h3>Formação Acadêmica</h3>
              <p>
                <strong>
                  Curso Front End com ênfase em React - Start Latam - 2020
                </strong>
              </p>
              <p>
                <strong>Módulos </strong> <br />
                Módulo Ambientação Plataforma - 16 horas <br />
                Módulo inteligência Emocional Parte I - 20 horas <br />
                Lógica e Banco de Dados - 120 horas <br />
                Módulo Inteligência Emocional Parte II - 40 horas <br />
                Módulo Específica - 172 horas
              </p>
              <p>
                <strong>
                  FMT - Formação para o Mundo do Trabalho - ESPRO- 2017
                </strong>
              </p>
              <p>
                <strong>
                  Primeiros Socorros – SENAI Jaboatão dos Guararapes - 2017
                </strong>
              </p>
              <h3>Bons conhecimentos em:</h3>
              <ul>
                <li>Windows 7,8,10. </li>
                <li>Pacote Office </li>
                <li>Lógica de programação, HTML, CSS, Javascript. </li>
                <li>Metodologias ágeis: Scrum. </li>
              </ul>
            </div>
          </div>
          <footer className="footer">
            <h3>Contato: </h3>
            <p>
              <strong>Tefefone: </strong> (81) 99908-8863 / (81) 98501-2322
              <br />
              <strong>E-mail: </strong> liliane@gmail.com
              <br />
              <a
                href="https://www.linkedin.com/in/liliane-silva-2458581ab/"
                target="_blank"
              >
                <strong>Linked-in: </strong> liliane@gmail.com
              </a>
              <br />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}
