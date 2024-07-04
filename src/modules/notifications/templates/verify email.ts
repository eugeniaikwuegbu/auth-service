export const verificationEmailHtml = (userName, otp) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification - ProductHub</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            color: #333333;
        }
        .otp-code {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 5px;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #888888;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="content">
            <p>Hello ${userName}</p>
            <p>Thank you for signing up with ProductHub! Please use the following OTP code to verify your email address:</p>
            <div class="otp-code">${otp}</div>
            <p>This code is valid for the next 10 minutes. If you did not request this code, please ignore this email.</p>
            <p>If you have any questions, feel free to reply to this email or visit our <a href="/">support center</a>.</p>
            <p>Best regards,<br>The ProductHub Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 ProductHub. All rights reserved.</p>
            <p><a href="/">Unsubscribe</a> | <a href="/">Privacy Policy</a></p>
        </div>
    </div>
</body>
</html>

  `;
};
