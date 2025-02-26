import axios from "axios";
import { createUrl } from "../util";
import { toast } from "react-toastify";

export async function fetchEvents() {
  const url = createUrl("childhome/allEventsDetails");

  try {
    const response = await axios.get(url);
    console.log(response);
    const data = response.data;
    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
