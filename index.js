// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, part){
  const check = RegExp("^"+part.toLowerCase())
  return drivers.filter(n => check.test(n.toLowerCase()))
}

function matchName(drivers, name){
  return drivers.filter(n => n.name === name)
}