import { model } from './model';
import './style/main.css';
import {Site} from './classes/site'

const site = new Site('#site') ;
site.render(model)

