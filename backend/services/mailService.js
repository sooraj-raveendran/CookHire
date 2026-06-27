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
      subject: "New Customer Request - CookHire",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;"> New Customer Request</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${customerData.name || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Contact:</strong> ${customerData.contact || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${customerData.email || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Event Type:</strong> ${customerData.eventType || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Event Date:</strong> ${customerData.eventDate || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Number of Guests:</strong> ${customerData.numberOfGuests || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Cuisine Preference:</strong> ${customerData.cuisinePreference || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Budget:</strong> ${customerData.budget || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Location:</strong> ${customerData.location || "Not specified"}</p>
            <p style="margin: 10px 0;"><strong>Special Requirements:</strong> ${customerData.specialRequirements || "None"}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Request Date: ${new Date().toLocaleString()}</p>
            <p>Please review this request and connect it with suitable cooks in the admin dashboard.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Customer registration email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending customer registration email:", error);
    return { success: false, error: error.message };
  }
};
