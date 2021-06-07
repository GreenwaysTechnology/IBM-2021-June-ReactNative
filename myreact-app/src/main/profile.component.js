import { render } from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

export const ProfileDetails = (props) => <>
    <h1>{props.title}</h1>
    <h2>FirstName {props.firstName}</h2>
    <h2>Last Name {props.lastName}</h2>
    <h2>City {props.city}</h2>
    <h2>State {props.state}</h2>
    <h2>Active {props.active ? 'Active' : 'Not Active'}</h2>
    <h2>Likes {props.likes}</h2>
    <h2>Contact {props.contact.email} {props.contact.phone}</h2>
</>


export const Profile = props => <>
    {/**Without spread operator */}
    <ProfileDetails
        firstName={props.firstName}
        lastName={props.lastName}
        city={props.city} state={props.state}
        active={props.active}
        likes={props.likes}
        contact={props.contact}
        title={"Profile Master Details"}
    />
    {/**with spread operator */}
    <ProfileDetails {...props} title={"Profile Master Details"} />

</>;

