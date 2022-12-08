import React from "react";

export default function LoginFooter() {
  return (
    <div className="w-full flex flex-col">
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center px-4">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">or</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-2 mb-3 flex justify-center">
        <span className="mr-1">New on our platform?</span>
        <a
          className="text-violet-600 hover:text-violet-800"
          href="/account/register?returnUrl=%2Foauth%2Fauthorize%3Fclient_id%3Dapp%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3031%252Foidc-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%26state%3Dfc41374c3536498287b261de600ea4f4%26code_challenge%3DM0kGaNGIjFVI3U71eyuVCabE1LzhVXvX4FmfmLSh9JE%26code_challenge_method%3DS256%26response_mode%3Dquery"
        >
          <span>Create an account</span>
        </a>
      </p>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
      </div>
      <p className="text-center text-muted text-[#b9b9c3]">
        <small>
          <a
            rel="noreferrer"
            href="https://vectigal.s3.eu-west-1.amazonaws.com/public/terms-and-conditions.pdf"
            target="_blank"
            className="hover:text-gray-600"
          >
            Terms &amp; Conditions
          </a>{" "}
          |{" "}
          <a
            rel="noreferrer"
            href="https://vectigal.s3.eu-west-1.amazonaws.com/public/privacy-policy.pdf"
            target="_blank"
            className="hover:text-gray-600"
          >
            Privacy Policy
          </a>
        </small>
      </p>
    </div>
  );
}
