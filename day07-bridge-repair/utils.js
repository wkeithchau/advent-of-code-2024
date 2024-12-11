export const parseEquations = (input) => {
  const equations = []
  for (let i = 0; i < input.length; i += 1) {
    const equation = input[i]
    const [value, sequence] = equation.split(': ')
    const numbers = sequence.split(' ').map((n) => Number(n))
    equations.push([Number(value), numbers])
  }
  return equations
}
