export class Site {
   constructor(selector) {

      this.$selector = document.querySelector(selector)
   }

   render(data){
      this.$selector.innerHTML = ''
      data.forEach(block => {
         this.$selector.insertAdjacentHTML('beforeend', block.toHTMl())
      })
   }


}