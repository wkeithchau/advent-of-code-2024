const addOps = (a, b) => a + b

const multiplyOps = (a, b) => a * b

const concatOps = (a, b) => Number(String(a) + String(b))

const applyOps = (numbers, ops) => {
  let result = numbers[0]
  for (let i = 0; i < ops.length; i += 1) {
    const op = ops[i]
    result = op(result, numbers[i + 1])
  }
  return result
}

export const checkTrueEquation = ([value, numbers], opCount = 2) => {
  const opCountMin = 2
  const opCountMax = 3
  if (opCount < opCountMin && opCount > opCountMax) {
    console.log(`opCount must have a range within ${opCountMin}-${opCountMax}`)
  }

  const numOfOps = numbers.length - 1
  const numOfCombos =
    parseInt(String().padStart(numOfOps, opCount - 1), opCount) + 1

  let match = false
  for (let i = 0; i < numOfCombos; i += 1) {
    const ops = Number(i).toString(opCount).padStart(numOfOps, '0')
    if (ops.length > numOfOps) {
      break
    }

    const opFns = ops.split('').map((op) => {
      if (op === '0') {
        return addOps
      } else if (op === '1') {
        return multiplyOps
      } else {
        return concatOps
      }
    })
    const result = applyOps(numbers, opFns)

    if (result === value) {
      match = true
      break
    }
  }

  return match
}
