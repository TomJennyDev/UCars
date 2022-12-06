export const calTotalPage = (items, limit) => {
  return Math.ceil(items?.length / limit);
};

export const calItemsByNumberPages = (items, page, limit) => {
  const startItems = (page - 1) * limit;
  const endItems = page * limit;
  return items?.slice(startItems, endItems);
};
