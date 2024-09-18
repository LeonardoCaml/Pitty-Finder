import { useNavigate, useParams } from "react-router-dom";

// constant
import foto from "../../../constants/photos";

// component
import Footer from "../../../components/footer/Footer";

// database
import artigo from "../../../databases/artigo";

// css
import "./artigopage.css";

export default function ArtigoPage() {

  const navigate = useNavigate();

  const handleClickArtigo = (id) => {
    navigate(`/artigo/${id}`);
  };

  const { id } = useParams();

  const currentArticle = artigo.find((item) => item.id === parseInt(id, 10));

  const recommendedArticle = artigo
    .filter((item) => item.id !== parseInt(id, 10))
    .slice(0, 5);

  return (
    <div className="page">
      <header className="header">
        <div>
          <img className="logo-current" src={foto.logo} />
        </div>
      </header>
      <div className="content-artigo">
        <div className="information">
          <h1 className="information-title">{currentArticle.titulo}</h1>
          <h2 className="information-subtitle">{currentArticle.subtitulo}</h2>
          <p className="information-data">{currentArticle.data}</p>
          <div className="information-img" />
          <p className="information-content">{currentArticle.conteudo}</p>
        </div>
        <div className="other-information">
          <h3 className="other-information-title">recomendado</h3>
          <ul className="other-information-list">
            {recommendedArticle.map((item) => (
              <li className="artigo" key={item.id}>
                <img src={item.icon} alt="" className="artigo-img" />
                <h3 className="artigo-title">{item.titulo}</h3>
                <button
                  className="artigo-see-more"
                  onClick={() => handleClickArtigo(item.id)}
                >
                  saiba mais
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
