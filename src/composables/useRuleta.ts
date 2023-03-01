import { storeToRefs } from "pinia";
import { useRuletaStore } from '../store/ruletaStore';
import { useLogin } from './useLogin';
import { ref } from 'vue';

export const useRuleta = () => {

    const ruletaStore = useRuletaStore();

    const {ruleta, bet, result} = storeToRefs(ruletaStore);

    const {player, isLogin} = useLogin()

    const error = ref({
        text: '',
        status: false
    })


    const girar = async () => {        
        if (!isLogin.value) {
             error.value.text = 'Debe de ingresar un jugador.'
             error.value.status = true;
             return;
        }

        if (bet.value.amount! <= 0) {            
            error.value.text = 'La apuesta debe de ser mayor a 0'
            error.value.status = true;            
            return;
        }

        if (player.value.amount < bet.value.amount!) {
            error.value.text = 'El monto de la apuesta debe de ser menor o igual al que tienes.'
            error.value.status = true;            
            return;
        }

        if (bet.value.betType === undefined) {
            error.value.text = 'Debes elegir un tipo de apuesta'
            error.value.status = true;            
            return;
        }

        error.value.status = false;     
        bet.value.userName = player.value.name;       
        await ruletaStore.girar();
        const resultBet = await ruletaStore.apostar();

        if (resultBet.status) {
            player.value.amount += resultBet.amount;
        } else {
            player.value.amount -= bet.value.amount!;
        }

        bet.value.amount = 0;
        bet.value.betType = undefined;
        

        
    };


    return {
        ruleta,
        bet,
        girar,
        error,
        result
    }
}