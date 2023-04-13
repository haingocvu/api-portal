export const getListProject = async () => {
  return fetch('./../productlist.json').then((res) => res.json());
};
