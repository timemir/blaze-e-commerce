import create from "zustand";
import { checkLoginStatus } from "../util/http/auth";
import { BASE_URL } from "../util/http/config";

// Initial state
const initialState = {
    userId: "",
    loginStatus: false,
    accessToken: "",
    refreshToken: "",
};
// get initial state from local storage
if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
        initialState.userId = JSON.parse(token).id;
        initialState.accessToken = JSON.parse(token).access;
        initialState.refreshToken = JSON.parse(token).refresh;
        initialState.loginStatus = Boolean(initialState.refreshToken);
    }
}

// Store
const useAuthStore = create((set) => ({
    ...initialState,
    // Mutations
    setUserId: (userId) => set({ userId }),
    setAccessToken: (accessToken) => set({ accessToken }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
    // Actions
    checkLoginStatus: async (refreshToken) => {
        // Send a request to the backend to check if the refresh token is valid
        try {
            const response = await checkLoginStatus(refreshToken);
            // if expired, returns error
            // if valid, returns {NEW accessToken, OLD refreshToken}
            const data = await response.json();
            console.log("checkLoginStatus Output", data);
            set({
                loginStatus: Boolean(data.refreshToken),
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            });
        } catch (error) {
            set({ loginStatus: false, accessToken: "", refreshToken: "" });
            console.log(error);
        }
        // If it is, save the new access token in local storage and set the login status to true
        // If it is not, set the login status to false
    },
    logout: () => {
        set({ loginStatus: false, accessToken: "", refreshToken: "" });
        localStorage.removeItem("token");
    },
}));

export default useAuthStore;
