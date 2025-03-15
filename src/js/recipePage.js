import { data } from "./data.js"

export const recipePage = Vue.createApp({
    data: function() {
        return {
            data: data
        };
    }
});