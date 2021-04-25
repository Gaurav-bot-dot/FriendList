import axios from "axios";
const FRIEND_API_BASE_URL = "yaha pr postman se link dalna hai (VIDEO NUM 9)"

class FriendService{

    getFriends(){
        return axios.get(FRIEND_API_BASE_URL)
    }
    createFriend(friend){
        return axios.post(FRIEND_API_BASE_URL, friend)
    }

    getFriendById(friendId){
        return axios.get(FRIEND_API_BASE_URL + '/' + friendId)
    }
}

export default new FriendService();