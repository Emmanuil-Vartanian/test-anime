/* eslint-disable array-callback-return */
export const deleteLikeAnime = (likeAnime, deleteAnime) => {
  const newLickAnime = likeAnime
    .map(({ id }, index, array) => {
      if (id === deleteAnime.id) {
        delete array[index]
        const newLickAnime = array.filter(el => el !== undefined)
        return newLickAnime
      }
    })
    .filter(el => el !== undefined)[0]

  return newLickAnime
}
