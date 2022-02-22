import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getAllContacts } from "../../services/contact";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllContactsFromApi = async () => {
    const response = await getAllContacts();
    setContacts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllContactsFromApi();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Cloud Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          See the contacts to{" "}
          <a
            href="https://yourcloudworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            Your Cloud Works!
          </a>
        </h1>
        {loading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {contacts.length === 0 && !loading && (
          <h3 className={styles.description}>
            It seems that you still have no contacts to see 😎
          </h3>
        )}
        {contacts.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table with contacts">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map((contact, i) => (
                  <TableRow key={contact.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{contact.firstName}</TableCell>
                    <TableCell>{contact.lastName}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </main>
    </div>
  );
}
