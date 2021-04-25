import React, {useState} from "react"

const CreateFriend = () => {
    
    const [name, setName] = useState("")
    const [address, setAdderss] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")

    const saveFriend = e => {
        e.preventDefault();
        const friend = {name: name,
        address :  address,
        email: email,
        contact : contact
        };
        console.log("friend => " + JSON.stringify(friend) )

        CreateFriend(friend).then((res)=>{
            friend.push('/FriList')
        })
    }

    return(
        <div>
        <div className="container">
        <div className="row">
        <div className="card col-lg-6 offset-md-3 ">
        <h3 className="text-center">Add Friend</h3>
        <div className="card-body text-left">
        <form id="reset">
        <div className="form-group">
        <label>Name:</label>
        <input placeholder="name" name="Name" className="form-control" type="text"
        value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Address:</label>
        <input placeholder="address" name="address" className="form-control" type="text"
        value={address} onChange={e => setAdderss(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Email:</label>
        <input placeholder="email" name="email" className="form-control" type="text"
        value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Contact:</label>
        <input placeholder="contact number" name="contact" className="form-control" type="text"
        value={contact} onChange={e => setContact(e.target.value)}/>
        </div>
        <button className="btn btn-success" onClick={saveFriend}>Save</button>
        <button className="btn btn-danger" onClick={""} style={{marginLeft: "10px"}}>Cancel</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default CreateFriend;