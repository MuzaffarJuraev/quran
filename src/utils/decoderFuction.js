export function decoderFuction(str) {
  return decodeURIComponent(JSON.parse('"' + str.replace(/\"/g, '"') + '"'));
}
