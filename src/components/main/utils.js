
export const thirtyDays = function(month) {
  return (
    fetch(month)
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        console.log('there was an err: ' + err)
      })
  )
}

export const all = async function(all) {
  return (
    await fetch(all)
      .then(res => res.json())
      .then(function(data) {
        return data
      })
      .catch(err => {
        console.log('there was an err: ' + err)
      })
  )
}