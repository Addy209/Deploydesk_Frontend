const basePath = "http://localhost:5000/";

const Paths = {
  login: "user/login",
};

export const getFullURL = (type) => {
  return basePath + Paths[type];
};
