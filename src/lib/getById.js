const getById = async function (items, itemId) {
  console.log('ITEMS: ' + items)
  let diet = items
    .map(
      ({
        _id,
        title,
        category,
        imageUrl,
        description,
        execution,
        date,
        stars,
        likes,
        shares,
        equipment,
        comments,
        benefits,
        author,
        progress,
        tags,
        mainImage,
        categories,
        caption,
        time,
        liked,
        _type,
        _updatedAt
      }) => ({
        _id,
        title,
        category,
        imageUrl,
        description,
        execution,
        date,
        stars,
        likes,
        shares,
        equipment,
        comments,
        benefits,
        author,
        progress,
        tags,
        mainImage,
        categories,
        caption,
        time,
        liked,
        _type,
        _updatedAt
        
      })
    )
    .find(({ _id }) => {
      console.log('FOUND EXERCISE ', _id)
      return _id == itemId
    })

  console.log('FINAL OUND EXERCISE', diet)

  return diet
}

export default getById
