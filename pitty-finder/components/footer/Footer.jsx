// css
import "./footer.css";

// constants
import foto from "../../constants/photos"

export default function Footer() {
  return (
    <div className="footer-bottom">
      <div className="footer">
        <div className="more">
          <div className="functions">
            <h4>recursos</h4>
            <p>logar</p>
            <p>adotar</p>
            <p>abrigos</p>
            <p>doar</p>
          </div>
          <div className="questions">
            <h4>perguntas</h4>
            <p>como posso adotar?</p>
            <p>como faço para encontrar os abrigos mais próximos?</p>
            <p>como posso ajudar?</p>
            <p>como posso entrar em contato?</p>
            <p>perguntar</p>
          </div>
        </div>
        <div className="footer-down">
          <p>
            ©2024 pitty finder, Inc. Privacidade - Termos - Informações da
            empresa
          </p>
          <div className="footer-icon">
            <img src={foto.facebook} />
            <img src={foto.instagram} />
            <img src={foto.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
