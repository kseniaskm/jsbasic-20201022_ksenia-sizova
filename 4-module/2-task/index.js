/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let redCell = table.rows[i].cells[i];
    redCell.style.backgroundColor = 'red';
  }
}
