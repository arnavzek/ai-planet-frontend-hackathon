export default function getSearch(theList, str) {
  return theList.filter((item) => {
    if (item.title.indexOf(str) !== -1) return true;
    if (item.summary.indexOf(str) !== -1) return true;
    if (item.description.indexOf(str) !== -1) return true;
    return false;
  });
}
