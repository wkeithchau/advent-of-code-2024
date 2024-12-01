export const parseLists = (input) => {
    const leftList = []
    const rightList = []
    input.forEach((line) => {
      const [leftNum, rightNum] = line.split('   ').map((n) => Number(n))
      leftList.push(leftNum)
      rightList.push(rightNum)
    })
    return [leftList, rightList]
  }
  