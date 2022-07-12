import botao from '../../assets/img/notification-icon.svg';
import './styles.css';
export default function NotificationButton(){
  return(
    <div className="dsmeta-red-btn">
      <img src={botao} alt="notificar" />
    </div>
  )
}