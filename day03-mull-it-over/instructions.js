export const parseMuls = (input) => {
  const ops = []
  const regex = /mul\(\d{1,3},\d{1,3}\)/g

  input.forEach((line) => {
    ops.push(...line.match(regex))
  })

  return ops
}

export const executeMul = (instruction) => {
  const regex = /\d{1,3}/g
  const [numA, numB] = instruction.match(regex)
  return numA * numB
}

export const parseAdvanceMuls = (input) => {
  const ops = []
  const regex = /(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g

  input.forEach((line) => {
    ops.push(...line.match(regex))
  })

  return ops
}
