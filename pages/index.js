import Image from "next/image";
import { useState } from "react";

import TwitterLogo from "../assets/images/twitter-logo.svg";
import SignupModal from "../components/SignupModal";

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 grid grid-cols-12">
          <div className="h-full col-span-7 relative">
            <Image
              width={1302}
              height={955}
              layout="fill"
              src="/images/landing-page-image.png"
              alt="Twitter"
              className="object-cover"
            />
          </div>
          <div className="col-span-5 px-8 flex items-center">
            <div>
              <TwitterLogo className="w-10 h-10 text-primary" />

              <h1 className="text-6xl font-black mt-16">Happening now</h1>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8">Join Twitter today.</h2>

                <div className="w-72">
                  <button
                    className="w-full py-2 px-6 bg-primary text-white rounded-full font-bold"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign up with email
                  </button>
                  <div className="text-xs text-gray-400 mt-2">
                    By signing up, you agree to the{" "}
                    <a
                      className="text-primary"
                      href="https://twitter.com/en/tos"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="text-primary" href="Privacy Policy">
                      privacy policy
                    </a>
                    , including{" "}
                    <a className="text-primary" href="Cookie Use">
                      Cookie Use
                    </a>
                    .
                  </div>

                  <div className="mt-12">
                    <h2 className="text-lg font-bold">
                      Already have an account?
                    </h2>
                    <button className="mt-4 w-full py-2 px-6 border border-gray-200 text-primary rounded-full">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-100 py-4">
          <div className="container mx-auto text-sm flex justify-center space-x-4 text-gray-600">
            <a href="https://twitter.com">About</a>
            <a href="https://twitter.com">Help Center</a>
            <a href="https://twitter.com">Terms of Service</a>
            <a href="https://twitter.com">Privacy Policy</a>
            <a href="https://twitter.com">Imprint</a>
            <a href="https://twitter.com">Accessibility</a>
            <a href="https://twitter.com">Ads Info</a>
            <a href="https://twitter.com">Blog</a>
            <a href="https://twitter.com">Accessibility</a>
          </div>
        </footer>
      </div>

      <SignupModal
        open={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
    </>
  );
}
