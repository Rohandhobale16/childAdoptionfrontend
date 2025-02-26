import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function loginservice(email, password) {
  const url = createUrl("Login");
  const body = { email, password };
  try {
    const response = await axios.post(url, body);
    //console.log(response);
    const data = response.data;
    //console.log(data.message);
    //console.log(data);

    if (data.message === "success") {
      return data;
    } else {
      if (response.status === 400 || response.status === 401) {
        toast.warning(data.message || "Invalid credentials. Please try again.");
      } else if (response.status === 500) {
        toast.error("Internal Server Error. Please contact admin");
      } else {
        toast.warning("Login failed. Please check your credentials.");
      }
      return null;
    }
  } catch (error) {
    console.error("Login service error:", error);
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during login.";
      toast.error(errorMessage);
    } else {
      toast.error("A network error occurred. Please try again later.");
    }
    return null;
  }
}
