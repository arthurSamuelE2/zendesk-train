export const formatDate = (date) => {
  const temp = new Date(date)
  return `${temp.getDate()}-${temp.getMonth() + 1}-${temp.getFullYear()}`
}