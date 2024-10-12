import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { PaymentServices } from "./payment.service";

const createPaymentCheckoutSession = catchAsync(
  async (req: Request, res: Response) => {
    console.log("req.body", req.body);

    const result = await PaymentServices.stripePaymentIntoDB(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Payment completed successfully",
      data: result,
    });
  }
);

export const PaymentController = {
  createPaymentCheckoutSession,
};
