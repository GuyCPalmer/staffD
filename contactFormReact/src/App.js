import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './getstaffedJZ.svg';
import './App.css';

let SignInForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">
    <div className="field">
      <div className="control">
      <label className="label">First Name</label>
        <Field name="firstName" component={renderField} type="text"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
      <label className="label">Last Name</label>
        <Field name="lastName" component={renderField} type="text"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
      <label className="label">Address</label>
        <Field name="address" component={renderField} type="text"/>
      </div>
    </div>
    <div className="field">
      <div className="control">
      <label className="label">City</label>
        <Field name="city" component={renderField} type="text"/>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <label className="label">State</label>
        <div className="select">
          <Field className="input" name="position" component="select">
            <option />
            <option value="">Alabama</option>
            <option value="">Alaska</option>
            <option value="">Arizona</option>
            <option value="">Arkansas</option>
            <option value="">California</option>
            <option value="">Colorado</option>
            <option value="">Connecticut</option>
            <option value="">Delaware</option>
            <option value="">Florida</option>
            <option value="">Georgia</option>
            <option value="">Hawaii</option>
            <option value="">Idaho</option>
            <option value="">Illinois</option>
            <option val ue="">Indiana</option>
            <option value="">Iowa</option>
            <option value="">Kansas</option>
            <option value="">Kentucky</option>
            <option value="">Louisiana</option>
            <option value="">Maine</option>
            <option value="">Maryland</option>
            <option value="">Massachusetts</option>
            <option value="">Michigan</option>
            <option value="">Minnesota</option>
            <option value="">Mississippi</option>
            <option value="">Missouri</option>
            <option value="">Montana</option>
            <option value="">Nebraska</option>
            <option value="">Nevada</option>
            <option value="">New Hampshire</option>
            <option value="">New Jersey</option>
            <option value="">New Mexico</option>
            <option value="">New York</option>
            <option value="">North Carolina</option>
            <option value="">North Dakota</option>
            <option value="">Ohio</option>
            <option value="">Oklahoma</option>
            <option value="">Oregon</option>
            <option value="">Pennsylvania</option>
            <option value="">Rhode Island</option>
            <option value="">South Carolina</option>
            <option value="">South Dakota</option>
            <option value="">Tennessee</option>
            <option value="">Texas</option>
            <option value="">Utah</option>
            <option value="">Vermont</option>
            <option value="">Virginia</option>
            <option value="">Washington</option>
            <option value="">West Virginia</option>
            <option value="">Wisconsin</option>
            <option value="">Wyoming</option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="email" component={renderField} type="email"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="age" component={renderField} type="number" label="Age"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Postion Desired</label>
        <div className="select">
          <Field className="input" name="position" component="select">
            <option />
            <option value="">Bartender</option>
            <option value="">Server</option>
            <option value="">Security</option>
            <option value="">Sales</option>
            <option value="">Promo Model</option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Gender</label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="male" />
          {' '}
          Male
        </label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="female" />
          {' '}
          Female
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Bio</label>
        <Field className="textarea" name="bio" component="textarea" />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>;
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

SignInForm = reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);

class App extends Component {

  handleSignIn = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Staff'D</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Registration Form
          </p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;
