import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Configure transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log("Mail transporter error:", error);
  } else {
    console.log("Mail transporter is ready to send emails");
  }
});

// Send cook registration email to admin
export const sendCookRegistrationEmail = async (cookData) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Cook Registration - CookHire",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">New Cook Registration</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${cookData.name}</p>
            <p style="margin: 10px 0;"><strong>Contact:</strong> ${cookData.contact}</p>
            <p style="margin: 10px 0;"><strong>Experience:</strong> ${cookData.experience || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Cuisine Specialization:</strong> ${cookData.cuisineSpecialization || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Work Type:</strong> ${cookData.workType || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Preferred Location:</strong> ${cookData.preferredLocation || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Notes:</strong> ${cookData.notes || "None"}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Registration Date: ${new Date().toLocaleString()}</p>
            <p>Please review this registration and take necessary action in the admin dashboard.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Cook registration email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending cook registration email:", error);
    return { success: false, error: error.message };
  }
};

// Send customer registration email to admin
export const sendCustomerRegistrationEmail = async (customerData) => {
  try {
    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "TEST - Find Cook Request",

      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #ddd;border-radius:8px;">
        <h2 style="color:#1B5C52;text-align:center;">
          New Find Cook Request
        </h2>

        <p><strong>Full Name:</strong> ${customerData.fullName}</p>

        <p><strong>Mobile Number:</strong> ${customerData.mobileNumber}</p>

        <p><strong>Email:</strong> ${
          customerData.email || "Not Provided"
        }</p>

        <p><strong>Location:</strong> ${customerData.location}</p>

        <p><strong>Food Preference:</strong> ${customerData.foodPreference}</p>

        <p><strong>Meals Required:</strong> ${customerData.mealsRequired}</p>

        <p><strong>Preferred Gender:</strong> ${customerData.genderPreference}</p>

        <p><strong>Family Size:</strong> ${customerData.familySize}</p>

        <p><strong>Additional Requirements:</strong> ${
          customerData.additionalRequirements || "None"
        }</p>

        <hr>

        <p>Submitted At: ${new Date().toLocaleString()}</p>
      </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Find Cook email sent:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};
