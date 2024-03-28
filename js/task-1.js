const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
