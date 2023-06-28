import React from "react";
import { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../config/motion";

const images = [
  "https://i.imgur.com/tgUZzzW.jpg",
  "https://i.imgur.com/Vh2IJ7I.jpg",
  "https://i.imgur.com/Hh13AJR.jpg",
  "https://i.imgur.com/KDQIlPn.jpg",
  "https://i.imgur.com/lWCDGYd.jpg",
  "https://i.imgur.com/012NZkH.jpg",
  "https://i.imgur.com/JbgIaSk.jpg",
  "https://i.imgur.com/Gz3MnU1.jpg",
];
const SignInForm = () => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map(
        (url) =>
          new Promise(async (resolve) => {
            const response = await fetch(url);
            const blob = await response.blob();
            const reader = new FileReader();

            reader.onloadend = () => {
              const base64data = reader.result;
              setLoadedImages((loadedImages) => {
                return [...loadedImages, base64data];
              });
              resolve();
            };

            reader.readAsDataURL(blob);
          })
      );
      await Promise.all(promises);
    };

    preloadImages();
  }, [setLoadedImages]);

  useEffect(() => {
    if (loadedImages.length === images.length) {
      const intervalId = setInterval(() => {
        setIndex((index) => (index + 1) % images.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [loadedImages]);

  return (
    <AnimatePresence>
      <div className=" flex flex-wrap gap-0 center">
        <motion.div
          key="custom-left"
          className="flex top-0 right-0 z-0 w-2/3 h-full"
          {...slideAnimation("right")}
        >
          <img
            className="w-full h-full"
            src={`${loadedImages[index]}`}
            alt="District X Avatar Images"
          />
        </motion.div>
        <motion.div
          key="custom-right"
          {...slideAnimation("left")}
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        >
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username address
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                Forgot password?
                </a>
              </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign up now
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SignInForm;
