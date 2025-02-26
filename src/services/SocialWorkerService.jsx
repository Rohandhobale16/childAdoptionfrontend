import axios from "axios";
import { toast } from "react-toastify";
import { createUrl } from "../util";

export async function registerSocialworker(socialWorkeDdata, user) {
  console.log(socialWorkeDdata);
  const url = createUrl("childhome/addemployee");
  console.log(socialWorkeDdata);
  try {
    const response = await axios.post(url, socialWorkeDdata, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
    });
    console.log(response.data);

    if (response.status === 200 || response.status === 201) {
      //  toast.success("Social Worker Registered Successfully");
      return response.data;
    } else {
      toast.warning("Please try again.");
      return null;
    }
  } catch (error) {
    console.error("Registration service error:", error);

    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Registration.";
      toast.error(errorMessage);
    } else {
      toast.error("A network error occurred. Please try again later.");
    }

    return null;
  }
}

export async function getSocialworkerProfile(user) {
  const url = createUrl(`employee/getemployeedetails/${user.id}`);
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${user.jwt} }` },
  });
  console.log(response);
  console.log(response.data);
  const resdata = response.data;
  if (response.status === 200) {
    return resdata;
  } else {
    return null;
  }
}

export async function updateSocialworker(id, socialWorkeDdata, user) {
  try {
    const url = createUrl(`employee/updateemployee/${id}`);
    const response = await axios.put(url, socialWorkeDdata, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    console.log(response.data);
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Registration service error:", error);
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Registration.";
      toast.error(errorMessage);
    } else {
      toast.error("A network error occurred. Please try again later.");
    }
    return null;
  }
}

export async function getAllRequest(user) {
  const url = createUrl(`employee/getrequestdetails`);
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${user.jwt}` },
  });
  console.log(response);
  console.log(response.data);
  const resdata = response.data;
  if (response.status === 200) {
    return resdata;
  } else {
    return null;
  }
}

export async function changeStatus(id, status, user) {
  try {
    console.log(status);
    const url = createUrl(`employee/updaterequest/${id}`);
    const response = await axios.post(url, status, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    console.log(response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Status Change service error:", error);
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred during Changing Status.";
      toast.error(errorMessage);
    } else {
      toast.error("A network error occurred. Please try again later.");
    }
    return null;
  }
}
