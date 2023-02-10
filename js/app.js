let bottonStart = document.getElementById('gameStartBtn')

bottonStart.addEventListener('click', function () {

    bottonStart.innerHTML = 'Reset'

    let sideNumberOfCells = document.getElementById('levelRange')

    let numberOfCells = sideNumberOfCells.value * sideNumberOfCells.value

    const grillElement = document.getElementById('grill')

    grillElement.innerHTML = ''
    
    for (let i = 0; i < numberOfCells; i++) {

        let numberCycle = i + 1

        const cellElement = (`<div class="cell" style="width: calc(100% / ${sideNumberOfCells.value}); font-size: 12px;"> </div>`);

        grillElement.innerHTML += cellElement
    }

    const cellElements = document.querySelectorAll('.cell')

    for (let i = 0; i < cellElements.length; i++) {

        const cell = cellElements[i]

        cell.addEventListener('click', cellClicked)
    }

    function cellClicked (event){

        const cell = event.target

        cell.classList.add('bg-warning');

        cell.classList.add('cell-style');

        cell.removeEventListener('click', cellClicked)

        console.log(cell.innerHTML)
    }

    console.log(cellElements.length)

    console.log(cellElements.length / 5)

    bombsBox = []

    console.log(bombsBox)

    // generare numeri random(bombe): n. numeri in base al numero di caselle


    while(bombsBox <= (cellElements.length / 5)){

        bombs = Math.floor(Math.random() * ((cellElements.length) - 1 + 1) + 1);

        bombsBox.push(bombs)
    
        console.log('controllo', bombsBox < cellElements.length)

    }
})   






