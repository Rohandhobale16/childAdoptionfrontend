import axios from 'axios';
import { createUrl } from '../util';
export async function deletes(id, user) {
  try {
    const url = createUrl(`admin/deleteperent/${id}`)
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}
/**try {
  const response = await axios.post(url, data, {
    headers: { Authorization: `Bearer ${user.jwt} }` },
  }); */
export async function homeC(user) {
  try {
    const url = createUrl('admin/parent')
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}
export async function viewSucess(user) {
  try {
    const url = createUrl('admin')
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}
export async function child(user) {
  try {
    const url = createUrl('admin/child')
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    })
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}
export async function deleteChild(id, user) {
  try {
    const url = createUrl(`admin/deletechildhome/${id}`)
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    })
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}
export async function feedback(id, user) {
  try {
    const url = createUrl(`admin/feedback/${id}`)

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${user.jwt}` },
    });
    return response.data
  }
  catch (r) {
    return { status: "error", error: r }
  }
}