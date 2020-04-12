// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, part){
  check = RegExp("^"+part)
  return drivers.filter(n => n.toLowerCase().includes(part.toLowerCase()))
}