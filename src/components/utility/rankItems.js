export default function rankItems(list, rankType) {
  if (rankType == "Dsc") return list.reverse();
  return list;
}
