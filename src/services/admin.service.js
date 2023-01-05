import { axiosInstance } from './auth-header';

const API_URL = process.env.REACT_APP_API;

const getUsersAdmin = (page, limit, offset) => {
    return axiosInstance.post(API_URL + 'admin/user/pageable', {
        params: {
            page,
            page_size: limit,
            offset
        }
    });
};

const UnlockUser = (userId) => {
    return axiosInstance.post(API_URL + 'admin/user/unban/' +  userId);
};

const LockUser = (userId) => {
    return axiosInstance.post(API_URL + 'admin/user/ban/' +  userId);
};

const DeleteUser = (userId) => {
    return axiosInstance.delete(API_URL + 'admin/user/delete/' +  userId);
};


const adminService = {
    getUsersAdmin,
    UnlockUser,
    LockUser,
    DeleteUser
};

export default adminService;