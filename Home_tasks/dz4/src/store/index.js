import { v4 as uuidv4 } from "uuid"; //Модуль для генерування ID

export default {
  //Метод для зчитування списку товарів (масиву об"єктів-товарів) з localStorage
  readProducts: function () {
    if (localStorage.getItem("productsList"))
      return JSON.parse(localStorage.getItem("productsList"));
    else return [];
  },
  //Метод для запису списку товарів у  localStorage
  writeProducts: function (products) {
    localStorage.setItem("productsList", JSON.stringify(products));
  },
  //Метод для додавання нового товару до списку у localStorage
  addProduct: function (productName, productNumber,productCountry) {
    //Створюємо новий об"єкт-товар
    const product = {
      id: uuidv4(),
      name: productName,
      number: productNumber,
      country:productCountry
    };
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    productsList.push(product); //Додаємо новий об"єкт-товар у список
    this.writeProducts(productsList); //Зберігаємо список товарів у localStorage
  },
  deleteProduct: function (idToDelete) {
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    productsList = productsList.filter((name) => name.id !== idToDelete); //Видалили з масиву продукт
    this.writeProducts(productsList); //Зберігаємо список товарів у localStorage
  },
  updateProduct(product) {
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    const productIndex = productsList.findIndex(
      (name) => name.id === product.id
    );
    if (productIndex >= 0)
      productsList[productIndex] = {
        ...product,
      };
    this.writeProducts(productsList); //Зберігаємо список товарів у localStorage
  },
  getProductById(id) {
    let productsList = this.readProducts(); //Зчитуємо список (масив) товарів з localStorage
    return productsList.find((name) => name.id === id);
  },
};
