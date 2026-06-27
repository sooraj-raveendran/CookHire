import CustomerRequest from "../models/CustomerRequest.js";
import { sendCustomerRegistrationEmail } from "../services/mailService.js";

export const createRequest = async (req, res) => {
  try {
    console.time("MongoDB");

    const request = await CustomerRequest.create(req.body);

    console.timeEnd("MongoDB");

    console.time("Email");

    // await sendCustomerRegistrationEmail(request);

    console.timeEnd("Email");

    res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      data: request,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};