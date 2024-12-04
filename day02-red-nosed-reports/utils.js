export const parseReports = (input) =>
  input.map((data) => data.split(' ').map((level) => Number(level)))
