import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function addContactUsdata(data) {
  const url = createUrl("contactus");

  try {
    const response = await axios.post(url, data);

    //console.log(response);
    //console.log(response.data);

    const responsedata = response.data;
    //console.log(responsedata.message);
    if (responsedata.message === "success") {
      toast.warning("THanks For Contacting Us");

      return responsedata;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}
