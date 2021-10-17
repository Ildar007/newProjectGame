const board = document.querySelector('#board')
const colors = [
  'rgb(29, 224, 211)',
  'rgb(57, 247, 10)',
  'rgb(242, 104, 219)',
  'rgb(99, 2, 13)',
  'rgba(237, 214, 9, 0.6)',
]
const SQUARES_NUMBER = 131
const ROW_LENGTH = 14

function createContainer() {
  const el = document.createElement('div')

  el.style.display = 'flex'

  return el
}

function fillBoard(rowLength) {
  let arr = []
  let controlLength = rowLength
  //
  //--------------------------------------------------------------------
  //
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    arr.push(square)
    if (arr.length === rowLength && controlLength === rowLength + 1) {
      fillContainer(rowLength)
    }

    if (arr.length === rowLength + 1 && controlLength === rowLength) {
      fillContainer(rowLength + 1)
    }
  }

  //____________________________________________________________________________
  // ------------functions - helpers ------------------------------------------
  //____________________________________________________________________________
  function createContainer() {
    const el = document.createElement('div')

    el.style.display = 'flex'

    return el
  }

  function fillContainer(length) {
    let container = createContainer()
    arr.forEach((elem) => {
      container.append(elem)
    })
    board.append(container)
    arr = []
    controlLength = length
  }
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px 2px ${color}, 0 0 10px 5px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = 'none'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

fillBoard(ROW_LENGTH)
