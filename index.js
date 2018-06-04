var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (let i = 1; i <= katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i} in line.`
    }
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return katzDeli.slice(1)
  }
}

function currentLine(katzDeli) {
  let counter = 0
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    
  }
}