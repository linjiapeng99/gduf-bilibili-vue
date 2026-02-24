import {format} from "date-fns";

export default {

    methods: {
        //把输入的时间转换为想要的形式
        formatDate(date, dateFormat){
            return format(new Date(date), dateFormat);
        }
    }

}