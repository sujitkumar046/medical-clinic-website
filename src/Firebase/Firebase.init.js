import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';



const intialAuthetication = () => 
{
    initializeApp(firebaseConfig);
}

export default intialAuthetication

