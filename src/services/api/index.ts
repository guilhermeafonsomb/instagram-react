import axios from "axios";

const loremPicsumApi = axios.create({
    baseURL: "https://picsum.photos/v2/",
  });

  export { loremPicsumApi };
