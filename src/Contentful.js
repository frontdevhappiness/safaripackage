import { createClient } from "contentful";
//const contentful = require("contentful");

export default createClient({
//export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
 accessToken: process.env.REACT_APP_API_ACCESS_TOKEN

});
