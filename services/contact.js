const getAllContacts = async () => {
  return fetch("http://localhost:3100/contact").then((response) =>
    response.json()
  );
};

const saveContact = async (data) => {
  return fetch("http://localhost:3100/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

module.exports = {
  getAllContacts,
  saveContact
};
