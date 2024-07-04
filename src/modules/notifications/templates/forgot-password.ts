export const forgotPasswordEmailHtml = (userName, passwordResetLink) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - ProductHub</title>
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
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
        }
        .content {
            padding: 20px;
        }
        .content p {
            font-size: 16px;
            color: #333333;
        }
        .content .center {
            text-align: center;
            margin-top: 20px;
        }
        .content a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
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
            <h1>Reset Your Password</h1>
        </div>
        <div class="content">
            <p>Hello ${userName},</p>
            <p>We received a request to reset your password for your ProductHub account. Click the button below to reset your password:</p>
            <div class="center">
                <a href="${passwordResetLink}">Reset Password</a>
            </div>
            <p>If you did not request a password reset, please ignore this email. This reset link will expire in 30 minutes.</p>
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
