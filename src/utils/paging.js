export const calTotalPage = (items, limit, cb) => {
  let totalPage = Math.ceil(items.length / limit);
  console.log(items);
  cb(totalPage);
  return totalPage;
};

export const calItemsByNumberPages = (items, page, limit) => {
  const startItems = (page - 1) * limit;
  const endItems = page * limit;
  return items.slice(startItems, endItems);
};
