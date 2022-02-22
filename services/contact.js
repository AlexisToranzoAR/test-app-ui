const getAllContacts = async () => {
  return fetch("https://node4059-cpd-example.host4u.cloud/contact").then((response) =>
    response.json()
  );
};

const saveContact = async (data) => {
  return fetch("https://node4059-cpd-example.host4u.cloud/contact", {
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
