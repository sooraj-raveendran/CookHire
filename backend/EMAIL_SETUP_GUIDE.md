# Email Notification Setup Guide

This guide explains how to set up email notifications to the admin when cooks or customers register successfully.

## Implementation Summary

### What Was Added:

1. **Mail Service** (`backend/services/mailService.js`)
   - Configured nodemailer transporter
   - Email templates for cook registrations
   - Email templates for customer requests
   - Error handling and logging

2. **Controller Updates**
   - `CookController.js` - Sends email when cook registers
   - `CustomerRequestController.js` - Sends email when customer submits request

3. **Environment Configuration**
   - `.env.example` - Template file with all required variables

## Setup Instructions

### Step 1: Configure Email Environment Variables

Copy `.env.example` to `.env` (if not already done):

```bash
cd backend
cp .env.example .env
```

### Step 2: Set Up Gmail (Recommended)

If using Gmail:

1. **Enable 2FA** on your Gmail account (if not already enabled)
2. **Generate App Password**:
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Click "App passwords"
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password generated

3. **Update `.env`**:
   ```
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_SECURE=false
   MAIL_USER=your_email@gmail.com
   MAIL_PASSWORD=your_16_char_app_password
   MAIL_FROM=your_email@gmail.com
   ADMIN_EMAIL=admin@cookhire.com
   ```

### Step 3: For Other Email Providers

Adjust the mail configuration in `.env`:

**Example - SendGrid:**
```
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=apikey
MAIL_PASSWORD=SG.your_sendgrid_api_key
```

**Example - Outlook:**
```
MAIL_HOST=smtp-mail.outlook.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your_email@outlook.com
MAIL_PASSWORD=your_password
```

### Step 4: Restart Backend Server

```bash
npm run dev
```

You should see:
```
Mail transporter is ready to send emails
```

## How It Works

### Cook Registration Email Flow:
1. Cook fills form and submits
2. Data saved to MongoDB
3. Email sent to `ADMIN_EMAIL` with:
   - Cook's name, contact, experience
   - Cuisine specialization, work type, location
   - Registration timestamp

### Customer Request Email Flow:
1. Customer submits request
2. Data saved to MongoDB
3. Email sent to `ADMIN_EMAIL` with:
   - Customer details, event type, date
   - Number of guests, cuisine preference, budget
   - Special requirements

## Email Templates

The emails are HTML-formatted with:
- Professional styling
- All relevant information organized clearly
- Timestamp of submission
- Call to action for admin review

## Troubleshooting

### "Mail transporter error"
- Check your email credentials in `.env`
- Ensure 2FA and App Password are set correctly (for Gmail)
- Verify the SMTP host and port are correct

### Emails not sending
- Check `ADMIN_EMAIL` is correctly set
- Look at console logs for detailed error messages
- Verify email credentials have permission to send

### Gmail rejection
- Make sure you're using 16-character App Password, not your regular password
- Enable "Less secure apps" or use App Password (recommended)

## Testing

To test the email functionality:

1. Submit a cook registration form from frontend
2. Check the backend console for "Cook registration email sent"
3. Verify email arrives in `ADMIN_EMAIL` inbox

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MAIL_HOST` | SMTP server hostname | smtp.gmail.com |
| `MAIL_PORT` | SMTP server port | 587 |
| `MAIL_SECURE` | Use TLS (true for 465) | false |
| `MAIL_USER` | Email account username | user@gmail.com |
| `MAIL_PASSWORD` | Email account password or app password | your_password |
| `MAIL_FROM` | Sender email address | user@gmail.com |
| `ADMIN_EMAIL` | Admin email to receive notifications | admin@cookhire.com |

## Next Steps (Optional Enhancements)

1. **User Confirmation Email**: Send confirmation email to the registering user
2. **Email Templates**: Move HTML templates to separate files for cleaner code
3. **Email Queue**: Implement job queue (Bull, RQ) for reliable email delivery
4. **Admin Dashboard**: Create interface to manage email notifications preferences
5. **Email Analytics**: Track email delivery success/failure rates
