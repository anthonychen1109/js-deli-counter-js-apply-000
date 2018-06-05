var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {
  let counter = 0
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    katzDeli.map(name, index) {
  }
}