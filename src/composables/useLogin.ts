import { storeToRefs } from "pinia";
import { useLoginStore } from '../store/loginStore';

export const useLogin = () => {

    const loginStore = useLoginStore();
    const {player, isLogin, isNew, modal, status} = storeToRefs(loginStore);
    
    const logout = () => {
        loginStore.logout()
    }

    const login = () => {
        if (!player.value.name) return;
        loginStore.login()  
    }

    const setAmount = () => {        
        if (player.value.amount <= 0) return;
        modal.value = false
    }

    const savePlayer = () => loginStore.savePlayer()
    


    return {
        player,
        isLogin, 
        isNew,
        modal,
        status,

        login,
        logout,
        setAmount,
        savePlayer
    }
}