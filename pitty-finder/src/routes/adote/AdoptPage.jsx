import foto from "../../../constants/photos.js";

import CustomInput from "../../../components/input/CustomInput.jsx";
import Button from "../../../components/button/Button.jsx";

import './adoptpage.css'

export default function AdoptPage() {
  return (
    <div className="page">
      <header className="header-current">
        <div>
          <img className="logo-current" src={foto.logo} />
        </div>
        <div className="title-current">
          <h1>Adoção</h1>
        </div>
      </header>
      <div className="filter">
        <h1>filtro</h1>
        <div className="search-inputs">
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <Button tittle='buscar'/>
        </div>
      </div>
    </div>
  );
}
