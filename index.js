//Understanding difference between import and require
import { capitalizeString } from "./string_function.js"
import subtract from "./defaultExport.js";
const cap = capitalizeString("Hello..!");
console.log(cap);


//Create an Export fallback with export default
console.log(subtract(5,10));