/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`data/initData.json`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// export default {
//   async getUsers() {
//     const { data } = await axios.get("data/initData.json");
//     return data;
//   },
// };

export { fetchUsers };
