import data from './data.js'

export async function getItems(name) {
  let items = data.filter((i) => {
    console.log('GET_ITEMS-CATEGORY-NAME:', i.category)
    console.log('GET_ITEMS-CATEGORY:', i)
    return i.category === name
  })
  // let sorted = diets.sort((a, z) => new Date(z.date) - new Date(a.date))
  console.log('CATEGORIES', items)
  return items
}
