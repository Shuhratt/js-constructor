export function row(content) {
   return `<div class="row">${content}</div>`
}

export function col(content) {
   return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
   const keys = Object.keys(styles)
   return keys.map(item => `${item}: ${styles[item]}`).join(';')
}