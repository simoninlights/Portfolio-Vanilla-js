/* Setting the dynamic year displaying in the footer */

const year = new Date()
document.querySelector('.current-year').innerHTML = year.getFullYear()