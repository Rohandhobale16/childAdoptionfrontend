import axios from "axios";
import { createUrl } from "../util";

export async function AddChild(data, user) {
  const url = createUrl("childhome/addchild");
  console.log(user);
  console.log(data);
  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${user.jwt} }` },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function getChildList() {
  const url = createUrl("childhome/allChildhomedetails");
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(response);
    console.log(response.status);
    console.log(data);
    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function getChildHomes(user) {
  const url = createUrl(`childhome/getchildhomedetails/${user.id}`);
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt} }` },
    });
    const data = response.data;
    // console.log(response);
    // console.log(data);
    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function updateChildHome(data, user, id) {
  console.log(id);
  const url = createUrl(`childhome/updatechildhome/${id}`);
  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${user.jwt} }` },
    });

    console.log(response);
    console.log(data);
    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function AddEvents(data, user) {
  const url = createUrl("childhome/addevents");
  //console.log(user);
  //console.log(data);
  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${user.jwt} }` },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function getChildren(user) {
  const url = createUrl(`childhome/getchilds/${user.id}`);
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching children:", error);
    return error.response;
  }
}

export async function getParents(user) {
  const url = createUrl(`employee/getrequest/${user.id}`);
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    //console.log(response);
    const data = response.data;
    console.log(data);
    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    console.error("Error adding child:", error);
    return error.response;
  }
}

export async function updateRequestStatus(data, user) {
  const url = createUrl("childhome/updatestatus");

  try {
    const response = await axios.put(url, data, {
      headers: { Authorization: `Bearer ${user.jwt} ` },
    });

    if (response.status === 200) {
      return response.data; // Return success message
    }
  } catch (error) {
    console.error("Error updating request status:", error);
    return error.response?.data || "Error occurred";
  }
}
