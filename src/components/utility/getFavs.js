export default function getFavs(theList) {
  return theList.filter((item) => {
    if (item.liked) return true;
    return false;
  });
}
