import { defineStore } from "pinia";
import { Player } from '../interfaces/player';
import playerService from "../services/playerService";
import { capitalizeWord } from '../helpers/capitalize';
import { AlertType } from '../helpers/alertType';


interface LoginState {
    isLogin: boolean,
    player: Player,
    isNew: boolean,
    modal: boolean,
    status: AlertType,
}



export const useLoginStore = defineStore('login', {
    
    state: (): LoginState => ({
        isLogin: false,
        player: { name: '', amount: 100},
        isNew: true,
        modal: false,
        status: AlertType.NONE
    }),

    actions:{
        
        async login() {
            
            const {data} = await playerService.getPlayer(this.player);

            if (data) {
                this.isNew = false;
                this.player.name = capitalizeWord(data.name);
                this.player.amount = data.amount;
            } else {
                this.modal = true;
            }
            
            this.isLogin = true;
        },

        logout() {
            this.isLogin = false,
            this.player = { name: '', amount: 100},
            this.isNew = true,
            this.modal = false,
            this.status = AlertType.NONE
        },

        async savePlayer() {

            const {data} = await playerService.getPlayer(this.player);            
            
            if (data) {                
                const succeeded = await playerService.update(this.player);
                
                if (succeeded) {
                    this.status = AlertType.SUCCESS;
                    return;
                }
            } else {
                const {succeeded} = await playerService.create(this.player);
                if (succeeded) {
                    this.status = AlertType.SUCCESS;
                    return;
                }
            }

            this.status = AlertType.ERROR;

        }
    }
})