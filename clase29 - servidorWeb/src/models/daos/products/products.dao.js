import productsModel from "../../schemas/products.schema.js";

export class ProductsDAO {
  async getProducts() {
    const products = await productsModel.find().lean();
    return products;
  }
  async getProductById(id) {
    const product = await productsModel.findOne({ _id: id });
    return product;
  }
}