import icons from '../../constants/icons'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <img className='logo' src={icons.logo} />
      <div className='login'>
        <p>faça login</p>
        <img className='account_icon' src={icons.account}/>
      </div>
    </div>
  );
}
