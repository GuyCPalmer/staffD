import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './getstaffedJZ.svg';
import './App.css';


let Login = props => {
    const { handleSubmit } = props;
    return <form onSubmit= {handleSubmit} className= "form">
        <div className="field">
            <div className="control">
                <label className="label"> User Name </label>
                <field name ="userName" component={renderField} type="text"/>
            </div>
        </div>
    </form>
}; // end of login