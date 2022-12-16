import {getPictures} from "./data.js";
import { renderPicturesList } from "./pictures-list.js";
const pictures = getPictures(12);

console.log(pictures);
renderPicturesList(pictures)