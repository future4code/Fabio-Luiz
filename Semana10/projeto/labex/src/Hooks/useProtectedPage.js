import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { goToLogin } from '../pages/Router/Coordinator';

export const useProtectedPage =() => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!token) {
            goToLogin(history);
        }
    }, [history])
}
