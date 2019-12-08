const monArray = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

export const calculateDateInFormat = (date) => {
  const d = new Date(date);
  return `${d.getDate()} ${monArray[d.getMonth()]}`
}  
