export class Site {
   constructor(selector) {
      this.$selector = document.querySelector(selector)
   }

   render(data){
      data.forEach(block => {
         this.$selector.insertAdjacentHTML('beforeend', block.toHTMl())
      })
   }


}