import axios from "axios";

const axiosUnsplash = axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID e1OzOZlC6YEmEr-z81pfENvAayvW5DttvKyW1TYUZKk",
	},
});

export default axiosUnsplash;
