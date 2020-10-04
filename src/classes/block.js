import {col, css, row} from "../utilits";

class Block {

   constructor(value, options = {}) {
      this.value = value;
      this.options = options
   }

   toHTMl() {
      throw Error('Ошибка, метод не реализован')
   }

}

export class TitleBlock extends Block {

   constructor(value, options) {
      super( value, options);
   }

   toHTMl() {
      return row(col(`<${this.options.tag} style="${css(this.options.styles)}">${this.value}</${this.options.tag}>`))
   }

}

export class TextBlock extends Block {

   constructor(value, options) {
      super( value, options);
   }

   toHTMl() {
      return row(col(`<p style="${css(this.options.styles)}">${this.value}</p>`))
   }

}

export class ColumnsBlock extends Block{

   constructor(value, options) {
      super(value, options);
   }

   toHTMl() {
      const html = this.value.map(item => col(`<p>${item}</p>`)).join('')
      return row(html);
   }
}

export class ImageBlock extends Block{

   constructor(value, options) {
      super( value, options);
   }

   toHTMl() {
      return row(`<img src="${this.value}" alt="" />`)
   }
}
