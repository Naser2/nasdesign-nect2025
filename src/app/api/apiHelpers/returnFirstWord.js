export function getFirstWord(str) {
  let spaceIndex = str.indexOf(' ')
  return spaceIndex === -1 ? str : str.substring(0, spaceIndex)
}
