export async function findFeatured(items) {
  console.log('ITEMS', items)

  let featured = items.find((b) => b.featured)
  console.log('FEATURED ?', featured)
  console.log('TYPE OF FEATURED', typeof featured)

  if (featured === undefined) {
    console.log('UNDEFINDEDx')
    let sorted = items.sort((a, z) => new Date(z.date) - new Date(a.date))
    console.log('SORTED--->', sorted)
    let newest = sorted[0]
    return (featured = newest)
  }

  console.log('AAAAAA SORTED', featured)
  //   return b.featured === true )
  // return item.articles.find((b) => {
  //   // console.log('AAAAAA', item.articles)

  return featured
  // })
}
