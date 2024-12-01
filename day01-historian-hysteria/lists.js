export const sortList = (list) => list.sort((a, b) => a - b)

const findDistance = (a, b) => Math.abs(a - b)

export const distanceBetweenLists = (listA, listB) => {
    let totalDistance = 0
    for (let i = 0; i < listA.length; i += 1) {
        totalDistance += findDistance(listA[i], listB[i])
    }
    return totalDistance
}

export const similarityBetweenLists = (listA, listB) => {
    const tally = {}
    let score = 0

    for (let i=0; i < listB.length; i += 1) {
        const entry = listB[i]
        if (tally[entry] === undefined) {
            tally[entry] = 1
        } else {
            tally[entry] += 1
        }
    }
    for (let i=0; i < listA.length; i += 1) {
        const entry = listA[i]
        const count = tally[entry]
        
        if (count !== undefined) {
            score += entry * count
        }
    }

    return score
}