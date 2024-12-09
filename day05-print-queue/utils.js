export const parsePrintOrder = (input) => {
  const ruleRegex = /\|/
  const updateRegex = /,/

  const rules = {}
  const updates = []
  input.forEach((line) => {
    if (line.match(ruleRegex)) {
      const [before, after] = line.split('|')
      if (rules[before] === undefined) {
        rules[before] = []
      }
      rules[before].push(after)
    } else if (line.match(updateRegex)) {
      updates.push(line.split(','))
    }
  })

  return [rules, updates]
}
