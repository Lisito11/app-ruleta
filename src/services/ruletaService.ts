import ruletaApi from '../api/ruletaApi';
import { Bet } from '../interfaces/bet';


class RuletaService {
    async apostar(bet: Bet) {
        const {num, color, numberType, amount, betType, userName, ruleta} = bet;

        return ruletaApi.post("/ruleta/apostar", 
        {
            number: num,
            color,
            numberType,
            amount,
            betType,
            userName,
            ruleta
        }
        ).then((response) => {        
                return response.data;
        }).catch(({response}) => {
                return response.data;
        });
    }
  
    async girar() {
        return ruletaApi.get(`/ruleta/girar`)
            .then((response) => {        
                return response.data;
            }).catch(({response}) => {
                return response.data;
            });
    }
  
  }
  
  export default new RuletaService();