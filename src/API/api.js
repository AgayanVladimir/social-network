import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0381b06b-554d-4a29-b830-d190edfd36cc",
  },
});

export const usersAPI = {
  getUsersPage: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  deleteFollow: (userId) => {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  postFollow: (userId) => {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};
export const profileAPI = {
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getProfileAvatar: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data.photos;
    });
  },
  getUserStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  getAuthMe: () => {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
