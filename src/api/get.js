import instance from "../service/request";

export function getList(){
    console.log("开始发起请求")
    return instance({
        // url:"/v1_0/channels"
        url:"/random.php"
    })
}