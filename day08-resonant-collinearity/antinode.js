export const collectAntPositions = (map) => {
  const dict = {}
  for (let i = 0; i < map.length; i++) {
    const row = map[i]
    for (let j = 0; j < row.length; j++) {
      const char = row[j]

      if (char !== '.') {
        if (!dict[char]) {
          dict[char] = []
        }
        dict[char].push([i, j])
      }
    }
  }
  return dict
}

export const genAntinodes = (ants, size) => {
  const antinodes = []
  for (let i = 0; i < ants.length; i += 1) {
    const ant1 = ants[i]
    for (let j = 0; j < ants.length; j += 1) {
      if (i !== j) {
        const ant2 = ants[j]
        const antinode = [ant1[0] * 2 - ant2[0], ant1[1] * 2 - ant2[1]]
        if (
          antinode[0] >= 0 &&
          antinode[0] < size &&
          antinode[1] >= 0 &&
          antinode[1] < size
        ) {
          antinodes.push(antinode)
        }
      }
    }
  }

  return antinodes
}

export const genHarmonicAntinodes = (ants, size) => {
  const antinodes = []
  for (let i = 0; i < ants.length; i += 1) {
    const ant1 = ants[i]
    for (let j = 0; j < ants.length; j += 1) {
      if (i !== j) {
        const ant2 = ants[j]
        const dist = [ant1[0] - ant2[0], ant1[1] - ant2[1]]

        let multi = 0
        while (multi >= 0) {
          let [x, y] = ant1
          x += dist[0] * multi
          y += dist[1] * multi

          if (x >= 0 && x < size && y >= 0 && y < size) {
            antinodes.push([x, y])
            multi += 1
          } else {
            multi = -1
          }
        }
      }
    }
  }

  return antinodes
}
