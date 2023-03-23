import getSubmissions from "./getSubmissions";

export default function getItem(id) {
  let submissions = getSubmissions();
  for (let itm of submissions) {
    if (itm.id == id) return itm;
  }

  return null;
}
