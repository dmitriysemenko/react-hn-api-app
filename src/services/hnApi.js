import axios from "axios";
import { selectFields } from "../selectors/selectFields";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => {
    const result = await axios
        .get(`${storyURL + storyId}.json`)
        .then(({ data }) => data && selectFields(data));
    return result;
};

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesURL).then(({ data }) => data);
    return result;
};
