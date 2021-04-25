import React, { Component } from 'react';
import FriendService from '../services/FriendService';

class FriendsList extends Component {

    constructor(props){
        super(props)

        this.state = {
            friends : []
        }
        this.addFriend = this.addFriend.bind(this)
        this.editFriend = this.editFriend.bind(this)
    }

    componentDidMount(){
        FriendService.getFriends().then((res) => {
            this.setState({friends : res.data})
        });
    }

    addFriend(){
        this.props.history.push('/add');
    }


    editFriend (id){
        this.props.history.push(`/update/${id}`)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Friends List</h2>
                <div className="row">
                <button className="btn btn-primary" onClick={this.addFriend}>Add Friend</button>
                </div>
                <div className="row">
                <table className="table table-striped table-bordered">
                <thead>
                <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.friends.map(
                        friend => 
                        <tr key = {friend.id}>
                        <td>{friend.name}</td>
                        <td>{friend.address}</td>
                        <td>{friend.email}</td>
                        <td>
                        <button className="btn btn-info" onclick={()=> this.editFriend(friend.id)}>Update</button>
                        </td>
                        </tr>
                    )
                }
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default FriendsList;