import React from 'react';
import './style.css';

import Email from './Email';
import Gender from './Gender';

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: '',
      emailId: '',
      gender: '',
      roleAppliedFor: 'react',
      terms: '',
      errors: {
        candidateName: null,
        emailId: null,
        gender: null,
        roleAppliedFor: null,
        terms: null
      }
    };
  }

  handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'terms') {
      value = checked;
    }

    const errors = { ...this.state.errors };

    switch (name) {
      case 'candidateName': {
        errors.candidateName = !value ? 'Name is required' : null;
        break;
      }
      case 'emailId': {
        if (!value) {
          errors.emailId = 'Email is required';
        } else if (!validateEmail.test(value)) {
          errors.emailId = 'Email is invalid';
        } else {
          errors.emailId = null;
        }
        break;
      }
      case 'gender': {
        errors.gender = !value ? 'Gender is required' : null;
        break;
      }
      case 'terms': {
        errors.terms = !value ? 'Accept terms' : null;
        break;
      }
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Job Application Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Candidate Name : </label>
            <input
              type="text"
              name="candidateName"
              value={this.state.candidateName}
              onChange={this.handleChange}
              required
            />
            <span>
              {this.state.errors.candidateName ? (
                this.state.errors.candidateName
              ) : (
                <></>
              )}
            </span>
          </div>
          <br />
          <Email
            emailId={this.state.emailId}
            handleChange={this.handleChange}
            errors={this.state.errors.emailId}
          />
          <br />
          <Gender
            gender={this.state.gender}
            handleChange={this.handleChange}
            errors={this.state.errors.gender}
          />
          <br />
          <div>
            <label>Role Applied : </label>
            <select
              name="roleAppliedFor"
              value={this.state.roleAppliedFor}
              onChange={this.handleChange}
            >
              <option value="react">React Developer</option>
              <option value="node">Node Developer</option>
              <option value="mern">MERN Stack Developer</option>
            </select>
          </div>
          <br />
          <div>
            <input
              name="terms"
              type="checkbox"
              checked={this.state.terms}
              onChange={this.handleChange}
            />
            <label>Please accept terms and conditions</label>
            <br />
            <span>
              {this.state.errors.terms ? this.state.errors.terms : <></>}
            </span>
          </div>
          <br />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
