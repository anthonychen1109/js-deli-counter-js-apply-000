var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name)
  for (let i = 0; i < katzDeli.length; i++) {
    if (katzDeli[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`
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