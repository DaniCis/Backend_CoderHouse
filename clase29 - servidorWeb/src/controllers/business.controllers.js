import { BusinessService } from "../services/business.service.js";
import { HTTP_STATUS, successResponse } from "../utils/recursos.js";

const businessService = new BusinessService();

export class BusinessController {

  static async getBusiness(req, res, next) {
    try {
      const business = await businessService.getBusiness();
      const response = successResponse(business);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async getBusinessById(req, res, next) {
    const { bid } = req.params;
    try {
      const business = await businessService.getBusinessById(bid);
      const response = successResponse(business);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async createBusiness(req, res, next) {
    const businessPayload = req.body;
    try {
      const newBusiness = await businessService.createBusiness(businessPayload);
      const response = successResponse(newBusiness);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async addProductToBusiness(req, res, next) {
    const { bid } = req.params;
    const { product } = req.body;
    try {
      const updatedBusiness = await businessService.addProduct(bid, product);
      const response = successResponse(updatedBusiness);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}