export const welcomeEmailHtml = (userName) => {
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

    <title>Welcome to Lexauto!</title>

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
            <td style="padding: 50px 16px 24px">
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
                      Welcome to
                      <span style="font-weight: bold; color: #001d79"
                        >Lexauto!</span
                      >
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
                      We're thrilled to have you on board and excited to help
                      you unlock the power of AI in your legal practice.
                      <br />
                      <br />
                      Lexauto is more than just legal software; it's your
                      intelligent partner, designed to streamline your workflow
                      and empower you to achieve more. Imagine having a tireless
                      research assistant, a keen case analyst, a meticulous
                      contract reviewer, and a document automation whiz – all at
                      your fingertips.
                      <span style="font-weight: bold; font-style: italic">
                        That's the Lexauto advantage.
                      </span>
                    </p>
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
                    <p style="padding-bottom: 16px; margin: 0">
                      With Lexauto you can now:
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table
                width="100%"
                style="border-spacing: 0; padding: 0; margin-bottom: 16px"
              >
                <tr>
                  <td
                    style="
                      padding: 0 16px;
                      display: block;
                      max-width: 512px;
                      margin: 0 auto;
                      margin-bottom: 16px;
                    "
                  >
                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 4px;
                      "
                    >
                      <tr>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="30"
                            color="#001d79"
                            fill="none"
                            width="48"
                            style="border: 0"
                          >
                            <path
                              d="M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M2 7H21"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 16H11M6 16H7M10 12H14M6 12H7"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    </table>

                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        max-width: 400px;
                        min-width: 300px;
                      "
                    >
                      <tr>
                        <td>
                          <p
                            style="
                              margin: 0;
                              padding: 0;
                              font-style: italic;
                              font-weight: 700;
                            "
                          >
                            Research smarter, not harder with our AI-powered
                            legal engine.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 0 16px;
                      display: block;
                      max-width: 512px;
                      margin: 0 auto;
                      margin-bottom: 16px;
                    "
                  >
                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 4px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="30"
                            color="#001d79"
                            fill="none"
                            width="48"
                            style="border: 0"
                          >
                            <path
                              d="M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    </table>

                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        max-width: 400px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <p
                            style="
                              margin: 0;
                              padding: 0;
                              font-style: italic;
                              font-weight: 700;
                            "
                          >
                            Uncover hidden gems in cases with intelligent
                            analysis tools.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 0 16px;
                      display: block;
                      max-width: 512px;
                      margin: 0 auto;
                      margin-bottom: 16px;
                    "
                  >
                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 4px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="30"
                            color="#001d79"
                            fill="none"
                            width="48"
                            style="border: 0"
                          >
                            <path
                              d="M9.72727 2C6.46607 2 4.83546 2 3.70307 2.79784C3.37862 3.02643 3.09058 3.29752 2.8477 3.60289C2 4.66867 2 6.20336 2 9.27273V11.8182C2 14.7814 2 16.2629 2.46894 17.4462C3.22281 19.3486 4.81714 20.8491 6.83836 21.5586C8.09563 22 9.66981 22 12.8182 22C14.6173 22 15.5168 22 16.2352 21.7478C17.3902 21.3424 18.3012 20.4849 18.732 19.3979C19 18.7217 19 17.8751 19 16.1818V15.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M2 12C2 13.8409 3.49238 15.3333 5.33333 15.3333C5.99912 15.3333 6.78404 15.2167 7.43137 15.3901C8.00652 15.5442 8.45576 15.9935 8.60988 16.5686C8.78333 17.216 8.66667 18.0009 8.66667 18.6667C8.66667 20.5076 10.1591 22 12 22"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    </table>

                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        max-width: 400px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <p
                            style="
                              margin: 0;
                              padding: 0;
                              font-style: italic;
                              font-weight: 700;
                            "
                          >
                            Draft flawless contracts in record time with the
                            power of AI.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 0 16px;
                      display: block;
                      max-width: 512px;
                      margin: 0 auto;
                      margin-bottom: 16px;
                    "
                  >
                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 4px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="30"
                            color="#001d79"
                            fill="none"
                            width="48"
                            style="border: 0"
                          >
                            <path
                              d="M10 11.6273L5.07498 17.4215C4.41411 18.199 3.23201 18.2464 2.51138 17.5241C1.79074 16.8019 1.83795 15.6172 2.61376 14.9549L8.3953 10.019"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18 10.0667L13.0476 15.03M9.95238 2.00146L5 6.96472M9.33337 2.62183L5.61908 6.34428C5.61908 6.34428 7.47622 8.82591 9.33337 10.6871C11.1905 12.5484 13.6667 14.4096 13.6667 14.4096L17.381 10.6871C17.381 10.6871 15.5238 8.2055 13.6667 6.34428C11.8096 4.48306 9.33337 2.62183 9.33337 2.62183Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 11.659L22 10.019M20 14.9389L22 16.0322"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.002 21.9985H20.9998M12.2267 21.9985C12.7782 21.0111 13.19 19.1214 15.142 19.0155C15.7218 18.9841 16.3117 18.9841 16.8914 19.0155C18.8434 19.1214 19.2572 21.0111 19.8087 21.9985"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    </table>

                    <table
                      style="
                        border-spacing: 0;
                        display: inline-block;
                        vertical-align: middle;
                        max-width: 400px;
                      "
                    >
                      <tr>
                        <td style="padding: 0">
                          <p
                            style="
                              margin: 0;
                              padding: 0;
                              font-style: italic;
                              font-weight: 700;
                            "
                          >
                            Focus on what matters most – your clients and
                            strategy.
                          </p>
                        </td>
                      </tr>
                    </table>
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
                    <p style="margin: 0; padding: 0; padding-bottom: 32px">
                      Ready to Supercharge Your Practice??
                    </p>
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href=""
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
                      >Get Started</a
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
                      We're confident that LexAuto will become an indispensable
                      tool in your legal arsenal. Get ready to experience the
                      future of law. Let LexAuto empower you to practice
                      smarter, not harder.
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
                    <p style="margin: 0; padding: 0">Welcome aboard!</p>
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
