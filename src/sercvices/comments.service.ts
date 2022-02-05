import {axiosService} from "./axios.service";
import {IComment} from "../interfaces";
import {urls} from "../Config";

export const commentsService = {

    getAll: () => axiosService.get<IComment>(urls.comments),

}