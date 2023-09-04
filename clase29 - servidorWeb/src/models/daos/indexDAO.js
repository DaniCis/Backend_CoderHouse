import { BusinessDAO } from "./business/business.dao.js";
import { OrdersDAO } from "./orders/orders.dao.js";
import { ProductsDAO } from "./products/products.dao.js";
import { UsersDAO } from "./users/users.dao.js";

const userDao = new UsersDAO();
const ordersDao =new OrdersDAO();
const businessDao =new BusinessDAO();
const productsDao = new ProductsDAO();

export const getDAOS  =()=>{
    userDao,
    ordersDao,
    businessDao,
    productsDao
}