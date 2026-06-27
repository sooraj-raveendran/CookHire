import CustomerRequest from "../models/CustomerRequest.js";
import { sendCustomerRegistrationEmail } from "../services/mailService.js";

export const createRequest = async (req, res) => {
  try {
    const request = await CustomerRequest.create(req.body);

    // Send email to admin
    await sendCustomerRegistrationEmail(request);

    res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};