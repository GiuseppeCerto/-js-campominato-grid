
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

        let divString = `<div class="cell" style="width: calc(100% / ${sideNumberOfCells});" >${numberCycle}</div>`
        console.log(divString)

        const cellElement = document.createTextNode(`<div class="cell" style="width: calc(100% / ${sideNumberOfCells});" >${numberCycle}</div>`);

        grillElement.append(cellElement)
    }
})