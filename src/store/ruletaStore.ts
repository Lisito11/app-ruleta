import { defineStore } from "pinia";
import { AlertType } from '../helpers/alertType';
import { Ruleta } from '../interfaces/ruleta';
import { Bet } from '../interfaces/bet';
import ruletaService from "../services/ruletaService";


interface RuletaState {
    ruleta: Ruleta,
    bet: Bet
}



export const useRuletaStore = defineStore('ruleta', {
    
    state: (): RuletaState => ({
        ruleta: {
            randomNumber: 0,
            color: '',
            numberType: undefined
        },
        bet: {
            userName: '',
        }
    }),

    actions:{
        
        async girar() {
           const data: Ruleta = await ruletaService.girar();
           this.ruleta = data;
        }
        
    }
})