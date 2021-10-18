
import { useEffect, useState } from 'react';

const Usedata = () => {
    
    const [services, Setservices] = useState([])

    useEffect (() => {
        fetch('/Servicedata.json')
        .then (res => res.json())
        .then (data => 
            Setservices(data))
    }, [])
    


    return {
        services, 
    }
};

export default Usedata;

// const services = [ 
//     { id: 1, name: 'NEUROLOGY' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img :'' }, 
//     { id: 2, name: 'HAEMATOLOGY' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img :'' }, 
//     { id: 3, name: 'CARDIOLOGY' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img :'' }, 
//     { id: 4, name: 'MRI' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img:'' }, 
//     { id: 5, name: 'LABORATORY SERVICES' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img:'' }, 
//     { id: 6, name: 'X-RAY DIAGNOSTIC' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !', img:'' }, 

// ]