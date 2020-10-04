import { block } from "../utilits";
import {Block, TextBlock, TitleBlock} from "./block";

export class Sidebar {

   constructor(selector, callback) {
      this.$el = document.querySelector(selector)
      this.update = callback
      this.init()
   }


   init(){
      this.$el.innerHTML = ''
      this.$el.insertAdjacentHTML('afterbegin', this.teamplete)
      this.$el.addEventListener('submit', this.addBlock.bind(this)) // ??? bind
   }

   get teamplete(){
      return [
         block('text'),
         block('title')
      ].join('')
   }

   addBlock(e){
      e.preventDefault()
      const type = e.target.name
      let value = e.target.valueEl.value
      let styles = e.target.styles.value

      const textBlock = new TextBlock(value, {styles})
      this.update(textBlock)

      e.target.valueEl.value = ''
      e.target.styles.value = ''

   }


}

