import React, { Component } from 'react';
import avatar from '../../images/avatar.svg';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount = () => {
    const personId = this.props.match.params.id;
    console.log(typeof personId); //The type is a String
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/',
    }).then(response => {
      this.setState({ data: response.data[Number(personId) - 1] });

      console.log(response.data);
    });
  };

  render() {
    const { name, username, email, phone } = this.state.data;

    return (
      <div className="container">
        <h1 className="font">Profile</h1>
        <hr />
        <div className="row">
          <div className="col-lg-2">
            <img
              className="img-fluid m-4"
              height="150"
              src={avatar}
              alt="avatar"
            />
          </div>
          <div className="col-lg-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-info font-weight-bold">
                  {name}
                </h5>
                <p>Pseudonyme : {username}</p>
                <p className="card-text">Émail : {email}</p>
                <p className="card-text">Phone : {phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
