import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function fetchParent(user) {
  const url = createUrl(`api/parent/profile/${user.id}`);
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${user.jwt}` },
  });
  const data = response.data;
  // console.log(data);
  if (response.status === 200) {
    return data;
  } else {
    if (response.status === 200 || response.status === 200) {
      //  toast.warning(data.); // Display message from server if available
    } else if (response.status === 500) {
      toast.error("Internal Server Error. Please contact admin");
    } else {
      console.log("");
      // toast.warning("Login failed. Please check your credentials."); // Generic message
    }
    return null;
  }
}
