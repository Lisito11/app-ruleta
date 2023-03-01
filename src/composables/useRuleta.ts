import { storeToRefs } from "pinia";
import { useRuletaStore } from '../store/ruletaStore';
import { ref } from 'vue';

export const useRuleta = () => {

    const ruletaStore = useRuletaStore();

    const {ruleta, bet} = storeToRefs(ruletaStore);
    

    


    const girar = async () => {
        await ruletaStore.girar()
    };


    return {
        ruleta,
        bet,
        girar
    }
}