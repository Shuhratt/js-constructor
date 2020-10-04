export function row(content) {
   return `<div class="row">${content}</div>`
}

export function col(content) {
   return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
   if(typeof styles === 'string'){
      return styles
   }
   const keys = Object.keys(styles)
   return keys.map(item => `${item}: ${styles[item]}`).join(';')
}

export function block(type) {
   return `
      <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
          <input type="text" class="form-control" name="valueEl" placeholder="value" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="styles" placeholder="styles" />
        </div>
        <button type="submit" class="btn btn-primary">Обновить</button>
      </form>
      <hr />
  `
}