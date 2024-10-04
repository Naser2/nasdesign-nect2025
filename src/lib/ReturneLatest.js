export const ReturnLatest = (items) => {
  console.log('RETURN LATEST', items)
  let latest = items.map((b, a) => new Date(b.date) >= new Date(a.date))
  console.log('Latest', latest)
  return latest
}
