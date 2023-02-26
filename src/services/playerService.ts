import { Player } from '../interfaces/player';
import ruletaApi from '../api/ruletaApi';


class PlayerService {
    async create(player: Player) {
        const {name, amount} = player;

        return ruletaApi.post("/user", {name, amount})
            .then((response) => {        
                return response.data;
            }).catch(({response}) => {
                return response.data;
            });
    }
  
    async update(player: Player) {
        const {name, amount} = player;

        return ruletaApi.put(`/user/${name}`, {name, amount})
            .then((response) => {        
                return response.status;
            }).catch(({response}) => {
                return response.data;
            });
    }
  
    async getPlayer(player: Player) {
        const {name} = player;

        return ruletaApi.get(`/user/${name}`)
            .then((response) => {        
                return response.data;
            }).catch(({response}) => {
                return response.data;
            });
    }
  
  
  }
  
  export default new PlayerService();
  