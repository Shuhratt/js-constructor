import image from './assets/1.jpg'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from "./classes/block";

export const model = [
    new TitleBlock('Hello World JS', {
       tag: 'h2',
       styles: {
          background: '#333',
          color: '#fff',
          'text-transform': 'uppercase'
       }
    }),
    new TextBlock('Custom text Js 2'),
    new ColumnsBlock([
       '111111',
       '2222222',
       '33333333'
    ]),
   new ImageBlock(image)
]