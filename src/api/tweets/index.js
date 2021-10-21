import axios from "axios";

const ENDPOINT_BASE = "https://nodejs-server-apero.herokuapp.com";
const ENDPOINT_TWEETS = ENDPOINT_BASE + '/tweets';

export const fetchTweets = async (param) => {
    try {
        const date = new Date().getTime();
        const url = `${ENDPOINT_TWEETS}/hashtag/${param}/date/${date}`;
        const response = await axios.get(url);
        if (typeof response.data[0] !== 'undefined' && response.data[0]['code'] === 88) {
            throw 'KO';
        }

        return response.data;

    } catch (e) {
        console.log("error fetchTweets", { e });
        return { code: 200, message: 'KO' };
    }
};