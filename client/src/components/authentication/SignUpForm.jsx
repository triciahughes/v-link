import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../config/motion";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/customizer");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      console.log(values);
      // fetch("/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setUser(data);
      //     history.push("/createavatar");
      //   });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                id="username"
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                autoComplete="username"
              />
            </Grid>
            {formik.errors["username"] ? (
              <p style={{ color: "#D9381E" }}>{formik.errors["username"]}</p>
            ) : null}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="new-password"
              />
            </Grid>
            {formik.errors["password"] ? (
              <p style={{ color: "#D9381E" }}>{formik.errors["password"]}</p>
            ) : null}
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // <AnimatePresence>
    //   <motion.div
    //     className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    //     {...slideAnimation("right")}
    //   >
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //       {/* <img
    //       className="mx-auto h-10 w-auto"
    //       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //       alt="Your Company"
    //     /> */}
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Let's create your account!
    //       </h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form className="space-y-6" action="#" method="POST">
    //         <div>
    //           <label
    //             htmlFor="username"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Username
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="username"
    //               name="username"
    //               type="username"
    //               autoComplete="username"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex items-center justify-between">
    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Password
    //             </label>
    //             <div className="text-sm">
    //               {/* <a
    //               href="#"
    //               className="font-semibold text-indigo-600 hover:text-indigo-500"
    //             >
    //               Forgot password?
    //             </a> */}
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               required
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         {/* confirm password to be implemented later */}
    //         {/* <div>
    //         <div className="flex items-center justify-between">
    //           <label
    //             htmlFor="confirmpassword"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Confirm Password
    //           </label>
    //           <div className="text-sm">
    //           </div>
    //         </div>
    //         <div className="mt-2">
    //           <input
    //             id="confirmpassword"
    //             name="confirmpassword"
    //             type="confirm password"
    //             required
    //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div> */}

    //         <div>
    //           <button
    //             type="submit"
    //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             onClick={handleSubmit}
    //           >
    //             Sign up → Create Avatar
    //           </button>
    //         </div>
    //       </form>

    //       <p className="mt-10 text-center text-sm text-gray-500">
    //         Already have an account?{" "}
    //         <a
    //           href="/signin"
    //           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    //         >
    //           Sign in
    //         </a>
    //       </p>
    //     </div>
    //   </motion.div>
    // </AnimatePresence>
  );
};

export default SignUpForm;
