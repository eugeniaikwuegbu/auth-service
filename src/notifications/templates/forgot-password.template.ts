export const forgotPasswordEmailHtml = (userName, passwordResetLink) => {
  return ` 
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1=
    .0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;60=
    0;700&display=swap"
          rel="stylesheet"
        />
    
        <title>Forgot Password</title>
    
        <style>
          .ExternalClass {
            width: 100%;
          }
        </style>
      </head>
    
      <body style="margin: 0; background-color: #e6eaf0">
        <div>
          <center
            style="
              margin: 0 auto;
              width: 100%;
              table-layout: fixed;
              background-color: #e6eaf0;
              padding-bottom: 150px;
            "
          >
            <table
              width="100%"
              style="
                border-spacing: 0;
                font-family: 'Inter', sans-serif;
                background-color: #ffffff;
                margin: 0 auto;
                width: 100%;
                max-width: 640px;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #526581;
              "
            >
              <tr>
                <td height="4" style="background-color: #001d79; padding: 0"></td>
              </tr>
    
              <tr>
                <td style="padding: 50px 16px 20px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <a rel="nofollow noopener noreferrer">
                          <img
                            src="https://res.cloudinary.com/dkhqzhiqh/image/upload/v1715187874/lexauto/logo_efrqge.svg"
                            alt="lexauto logo"
                            width="40"
                            title="lexauto"
                            style="border: 0"
                          />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="padding: 0 16px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <p
                          style="
                            font-size: 23px;
                            padding-bottom: 32px;
                            margin: 0;
                            line-height: 21px;
                          "
                        >
                          Forgot Password
                        </p>
                        <p
                          style="
                            padding-bottom: 16px;
                            margin: 0;
                            justify-content: center;
                            text-align: justify;
                            text-justify: inter-word;
                          "
                        >
                          Hi ${userName}!
                          <br />
                          <br />
                          No worries if you've forgotten your Lexauto password.
                          We've all been there! Click the button below to reset your
                          password and get back to leveraging the power of AI in
                          your legal practice:
                          <br />
                          <br />
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 16px 32px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <a
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                          href="${passwordResetLink}"
                          style="
                            display: block;
                            text-decoration: none;
                            background-color: #001d79;
                            width: 100%;
                            border: none;
                            padding: 8px 0;
                            color: white;
                            text-align: center;
                            border-radius: 8px;
                          "
                          >Reset Your Password</a
                        >
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="padding: 0 16px 32px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <p style="margin: 0; padding: 0">
                          <span style="font-weight: bold; font-style: italic"
                            >Get back to what matters most.
                          </span>
                          Reset your password today and reclaim your Lexauto
                          advantage.
                        </p>
                        <br />
                        <p style="margin: 0; padding: 0">
                          For any questions or assistance, feel free to reach out to
                          our friendly support team at
                          <a
                            rel="nofollow noopener noreferrer"
                            ymailto="mailto:support@lexauto.ai"
                            target="_blank"
                            href="mailto:support@lexauto.ai"
                            style="text-decoration: none; color: #3657c4"
                          >
                            support@lexauto.ai
                          </a>
                          and we will be happy to help you.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="padding: 0 16px 32px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <p style="margin: 0; padding: 0">We're here to help!</p>
                        <p
                          style="
                            margin: 0;
                            margin-top: 4px;
                            padding: 0;
                            font-size: 16px;
                            font-weight: 600;
                          "
                        >
                          The Lexauto Team.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
    
            <table
              width="100%"
              style="
                border-spacing: 0;
                font-family: 'Inter', sans-serif;
                background-color: #ffffff;
                margin: 0 auto;
                width: 100%;
                max-width: 640px;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #526581;
                margin-top: 48px;
              "
            >
              <tr>
                <td style="padding: 32px 16px">
                  <table
                    width="100%"
                    style="border-spacing: 0; max-width: 512px; margin: 0 auto"
                  >
                    <tr>
                      <td style="padding: 0">
                        <center>
                          <p
                            style="
                              font-weight: 600;
                              color: #1a3a50;
                              margin: 0;
                              padding: 0;
                              padding-bottom: 16px;
                            "
                          >
                            Got Questions?
                          </p>
                          <p
                            style="
                              margin: 0;
                              padding: 0;
                              padding-bottom: 16px;
                              max-width: 398px;
                            "
                          >
                            Simply reach out to us via <br />
                          </p>
                        </center>
    
                        <center style="max-width: 512px; margin: 0 auto">
                          <a
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            href=""
                            style="padding-right: 28.8px; color: transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              color="#526581"
                              fill="none"
                              width="24"
                              style="border: 0"
                            >
                              <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M17.5078 6.5L17.4988 6.5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
    
                          <a
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            href=""
                            style="padding-right: 28.8px; color: transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              color="#526581"
                              fill="none"
                              style="border: 0"
                            >
                              <path
                                d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                          <a
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                            href=""
                            style="padding-right: 28.8px; color: transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              color="#526581"
                              fill="none"
                              style="border: 0"
                            >
                              <path
                                d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                          <a
                            rel="nofollow noopener noreferrer"
                            ymailto="mailto:support@lexauto.ai"
                            target="_blank"
                            href="mailto:support@lexauto.ai"
                            style="color: transparent"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              color="#526581"
                              fill="none"
                              style="border: 0"
                            >
                              <path
                                d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        </center>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </div>
      </body>
    </html>
    `;
};
