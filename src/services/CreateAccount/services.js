const url = "http://localhost:3000";

export const createUser = async (
  document,
  firstName,
  lastName,
  email,
  password
) => {
  const response = await fetch(`${url}/create-people`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      document: document,
      name: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }),
  });

  const res = await response.json();

  switch (response.status) {
    case 200:
      return {
        message: res.message,
        status: res.status,
        open: true,
        severity: "success",
        loading: false,
      };

    case 400:
      return {
        message: res.message,
        status: res.status,
        open: true,
        severity: "error",
        loading: false,
      };

    case 409:
      return {
        message: res.message,
        status: res.status,
        open: true,
        severity: "error",
        loading: false,
      };

    case 500:
      return {
        message: res.message,
        status: res.status,
        open: true,
        severity: "error",
        loading: false,
      };

    default:
      return {
        message: res.message,
        status: res.status,
        open: true,
        severity: "error",
        loading: false,
      };
  }
};
