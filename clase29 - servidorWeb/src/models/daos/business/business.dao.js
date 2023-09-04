import businessModel from "../../schemas/business.schemas.js";

export class BusinessDAO {
  async getBusiness() {
    const business = await businessModel.find().lean();
    return business;
  }
  async getBusinessById(id) {
    const business= await businessModel.findOne({ _id: id });
    return business;
  }
  async createBusiness(payload) {
    const business = await businessModel.create(payload);
    return business;
  }
  async addProduct(id, product) {
    const productoBusiness = await businessModel.updateOne(
      { _id: id },
      { $push: { products: product } }
    );
    return productoBusiness;
  }
}