const getTrack = async function (items, itemId) {
  console.log('ITEMS: ' + items)
  let diet = items
    .map(
      ({
        id,
        title,
        price, 
        href,
        bannerImage,
        description,
        images,
        details,
        exercises,
        date,
        stars,
        liked,
        likes,
        participants
      }) => ({
        id,
        title,
        bannerImage,
        description,
        date,
        stars,
        liked,
        likes,
        price, 
        href,
        exercises,
        participants,
        images,
        details,
      })
    )
    .find(({ id }) => {
      console.log('FOUND EXERCISE ', id)
      return id == itemId
    })

  console.log('FINAL OUND EXERCISE', diet)

  return diet
}

export default getTrack
