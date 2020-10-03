import { model } from './model';
import './style/main.css';


let html = '' ;
const $site = document.getElementById('site') ;

model.forEach(bl => {
   $site.insertAdjacentHTML('beforeend', bl.toHTMl())
})

