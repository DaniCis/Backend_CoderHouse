import ordersModel from "../../schemas/orders.schema.js";

export class OrdersDAO {
  async getOrders() {
    const orders = await ordersModel.find().lean();
    return orders;
  }
  async getOrdersById(id) {
    const orders = await ordersModel.findOne({ _id: id });
    return orders;
  }
  async createOrders(payload) {
    const orders = await ordersModel.create(payload);
    return orders;
  }
  async updateOrders(id, payload) {
    const updateOrder = await ordersModel.updateOne(
      { _id: id },
      { $set:payload }
    );
    return updateOrder;
  }
}