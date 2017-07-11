const backgroundColors = (alpha) => [
  `rgba(255, 99, 132, ${alpha})`,
  `rgba(54, 162, 235, ${alpha})`,
  `rgba(255, 206, 86, ${alpha})`,
  `rgba(75, 192, 192, ${alpha})`,
  `rgba(153, 102, 255, ${alpha})`,
  `rgba(255, 159, 64, ${alpha})`
]

const bgColors = backgroundColors(0.2)
const borderColors = backgroundColors(1.0)

function * backgroundColorsGen () {
  while (true) {
    yield * bgColors
  }
}

function * borderColorsGen () {
  while (true) {
    yield * borderColors
  }
}

let bgIter = backgroundColorsGen()
let borderIter = borderColorsGen()

const transformPayload = (key, data, labels) => {
  return {
    labels: labels,
    datasets: [{
      data: data,
      label: key,
      backgroundColor: Array(labels.length).fill().map((_, i) => bgIter.next().value),
      borderColor: Array(labels.length).fill().map((_, i) => borderIter.next().value),
      borderWidth: 1
    }]
  }
}

export { transformPayload }
