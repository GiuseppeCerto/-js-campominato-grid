
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

        let cellElement = document.createElement(<div></div>)
    }

    const celleElements = document.querySelectorAll('.cell')

    for (let i = 0; i < celleElements.length; i++) {
        const cell = celleElements[i]

        cell.addEventListener('click', function () {
            console.log(i + 1)
        })
    }
})