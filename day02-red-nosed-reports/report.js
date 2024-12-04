export const safetyCheck = (report) => {
    let safe = true
    let reportDirection
  
    for (let i = 1; i < report.length; i += 1) {
      const prevLevel = report[i - 1]
      const level = report[i]
      const diff = prevLevel - level
  
      let direction
      if (diff > 0) {
        direction = 1
        if (!(diff >= 1 && diff <= 3)) {
          safe = false
        }
      } else if (diff < 0) {
        direction = -1
        if (!(diff <= -1 && diff >= -3)) {
          safe = false
        }
      } else {
        safe = false
      }
  
      if (reportDirection === undefined) {
        reportDirection = direction
      } else if (direction !== reportDirection) {
        safe = false
      }
  
      if (!safe) {
        i = report.length
      }
    }
  
    return safe
  }
  
  export const looseSafetyCheck = (report, bad = false, raw = true) => {
    let safe = true
    let badLevel = bad
    let reportDirection
  
    for (let i = 1; i < report.length; i += 1) {
      const prevLevel = report[i - 1]
      const level = report[i]
      const diff = prevLevel - level
  
      let direction
      if (diff > 0) {
        direction = 1
        if (!(diff >= 1 && diff <= 3)) {
          safe = false
        }
      } else if (diff < 0) {
        direction = -1
        if (!(diff <= -1 && diff >= -3)) {
          safe = false
        }
      } else {
        safe = false
      }
  
      if (reportDirection === undefined) {
        reportDirection = direction
      } else if (direction !== reportDirection) {
        safe = false
      }
  
      if (!safe) {
        if (!badLevel) {
          badLevel = true
          let modReport = [...report]
          modReport.splice(i, 1)
          safe = looseSafetyCheck(modReport, true, false)
          if (!safe) {
            modReport = [...report]
            modReport.splice(i - 1, 1)
            safe = looseSafetyCheck(modReport, true, false)
          }
          if (!safe && i - 2 === 0) {
            modReport = [...report]
            modReport.splice(0, 1)
            safe = looseSafetyCheck(modReport, true, false)
          }
        }
        i = report.length
      }
    }
  
    return safe
  }
  