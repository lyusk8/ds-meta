import axios from 'axios';
import botao from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/requests';
import './styles.css';

type props = {
  saleId : number;
}
export default function NotificationButton({saleId} : props){

  function sendMessage(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
      console.log("SUCESSO!!")
    })
  }
  return(
    <div className="dsmeta-red-btn" onClick={() => sendMessage(saleId)}>
      <img src={botao} alt="notificar" />
    </div>
  )
}