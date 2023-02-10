
let bottonStart = document.getElementById('gameStartBtn')

bottonStart.addEventListener('click', function () {

    bottonStart.innerHTML = 'Reset'

    let sideNumberOfCells = document.getElementById('levelRange')

    let numberOfCells = sideNumberOfCells.value * sideNumberOfCells.value

    const grillElement = document.getElementById('grill')

    grillElement.innerHTML = ''
    
    for (let i = 0; i < numberOfCells; i++) {

        let numberCycle = i + 1

        const cellElement = (`<div class="cell" style="width: calc(100% / ${sideNumberOfCells.value});" >${numberCycle}</div>`);

        grillElement.innerHTML += cellElement
    }

    const cellElements = document.querySelectorAll('.cell')

    for (let i = 0; i < cellElements.length; i++) {

        const cell = cellElements[i]

        cell.addEventListener('click', function () {

            cell.classList.add('bg-warning');

            cell.classList.add('shadow-button');

        })
    }
})    




