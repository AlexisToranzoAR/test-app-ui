import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { useFormik } from "formik";
import { contactSchema } from "../schemas/contact";
import { saveContact } from "../services/contact";

import TextField from "../components/TextField";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function Home() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (data, actions) => {
      try {
        await saveContact(data);
        MySwal.fire({
          icon: "success",
          title: "We have received your message",
          showConfirmButton: true,
        });
        actions.resetForm();
      } catch (error) {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Cloud Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://yourcloudworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            Your Cloud Works!
          </a>
        </h1>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="firstName"
                      formik={formik}
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="lastName"
                      formik={formik}
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      formik={formik}
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="phone"
                      formik={formik}
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="message"
                      formik={formik}
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </main>
    </div>
  );
}
