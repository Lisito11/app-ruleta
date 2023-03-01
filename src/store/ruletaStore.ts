import { defineStore } from "pinia";
import { AlertType } from '../helpers/alertType';
import { Ruleta } from '../interfaces/ruleta';
import { Bet } from '../interfaces/bet';
import ruletaService from "../services/ruletaService";
import { StatusBet } from '../interfaces/statusBet';


interface RuletaState {
    ruleta: Ruleta,
    bet: Bet,
    result: StatusBet
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
            amount: 0
        },
        result: {
            amount: 0,
            status: false
        }
    }),

    actions:{
        
        async girar() {
           const data: Ruleta = await ruletaService.girar();
           this.ruleta = data;
        },

        async apostar(): Promise<StatusBet> {
            const bet: Bet = {
                num: this.bet.num,
                color: this.bet.color,
                numberType: this.bet.numberType,
                amount: this.bet.amount,
                betType: this.bet.betType,
                userName: this.bet.userName,
                ruleta: this.ruleta
            }

            const {data, succeeded} = await ruletaService.apostar(bet);

            if (succeeded) {
                this.result = data;
            }

            return this.result;
            
        }
    }
})