import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { PaymentServices } from "./payment.service";

const getPayments = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentServices.getPaymentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Payments retrieved successfully",
    data: result,
  });
});

const getMyPayments = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;

  const result = await PaymentServices.getMyPaymentsFromDB(email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Payments retrieved successfully",
    data: result,
  });
});

const createPaymentCheckoutSession = catchAsync(
  async (req: Request, res: Response) => {
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
  getPayments,
  getMyPayments,
};
