import { SESSIONITEMS } from './../sessions/sessionss';
import { session } from './../sessions/sessions';
import { card } from './card';
import { FORMATEURSITEMS } from '../formateurs/formateurs';
import { PARTICIPANTSITEMS } from '../participants/participants';
export const CARDSITEMS: card[] = 
[
    { 
    id:1,
    title:'Sessions',
    nombre: SESSIONITEMS.length ,
    imgpath: "assets/formations.PNG"
   
    },
    { 
        id:2,
        title:'Formateurs',
        nombre: FORMATEURSITEMS.length ,
        imgpath: "assets/formateurs.png"
   },  
    { 
      id:3,
      title:'Participants',  
      nombre: PARTICIPANTSITEMS.length ,
      imgpath: "assets/participants.PNG"
           
    },
];