const getMember = (userId, data) => {
  let members = data,
      member = {};

  if (typeof members === 'object') {
    Object.keys(members)
      .filter(mber => {
        if(members[mber].id === userId) {
          member = members[mber]
          return true
        }
        else{
          return false
        }
      })
  } 
  return member
}

const fDate = (input) => {
  let d = new Date(input)
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                'August', 'September', 'October', 'November', 'December']
  
  let formatter = input => (input < 9) ? '0'+input : input 

  let getDay = () => days[d.getDay()]
  let getMonth = () => months[d.getMonth()]

  return `${getDay()} ${d.getDate()} ${getMonth()} ${d.getFullYear()} - ${formatter(d.getHours())}:${formatter(d.getMinutes())}:${formatter(d.getSeconds())}`

}

export { getMember, fDate }