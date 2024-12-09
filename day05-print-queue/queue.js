export const checkUpdate = (update, rules) => {
  const queue = []
  let check = true

  for (let i = 0; i < update.length; i += 1) {
    const page = update[i]

    const rule = rules[page]
    if (rule !== undefined) {
      for (let j = 0; j < rule.length; j += 1) {
        if (queue.includes(rule[j])) {
          check = false
          break
        }
      }
    }
    queue.push(page)
  }

  return check
}

export const findMiddlePage = (update) => {
  const centerPos = Math.floor(update.length / 2)
  return update[centerPos]
}

export const correctUpdateOrder = (update, rules) => {
  const queue = []

  for (let i = 0; i < update.length; i += 1) {
    const page = update[i]

    let added = false
    const rule = rules[page]
    if (rule !== undefined) {
      const index = queue.findIndex((element, index, array) =>
        rule.includes(element)
      )

      if (index >= 0) {
        queue.splice(index, 0, page)
        added = true
      }
    }
    if (added === false) {
      queue.push(page)
    }
  }

  return queue
}
