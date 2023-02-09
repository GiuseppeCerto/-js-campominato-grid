
const bottonStart = document.getElementById('gameStartBtn')

bottonStart.addEventListener('click', function () {

    let sideNumberOfCells = document.getElementById('levelRange')

    console.log(sideNumberOfCells.value)

    let numberOfCells = sideNumberOfCells.value * sideNumberOfCells.value

    console.log(numberOfCells)

    const grillElement = document.getElementById('grill')

    for (let i = 0; i < numberOfCells; i++) {

        let numberCycle = i + 1
        
        console.log(numberCycle)

        const cellElement = (`<div class="cell" style="width: calc(100% / ${sideNumberOfCells.value});" >${numberCycle}</div>`);

        grillElement.innerHTML += cellElement
    }
})