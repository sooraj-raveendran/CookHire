import FindCook from "../models/CustomerRequest.js";
import { sendCustomerRegistrationEmail } from "../services/mailService.js";

export const submitFindCook = async (req, res) => {
  try {
    const enquiry = await FindCook.create(req.body);
    

    res.status(201).json({
      success: true,
      message: "Request submitted successfully",
      enquiry,
    });
    await sendCustomerRegistrationEmail(enquiry);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};