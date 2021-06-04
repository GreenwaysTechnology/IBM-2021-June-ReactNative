import React from 'react';

export const Address = ({ address: { city, state } }) => <address>
    <span>City: {city} {","} {state}</span>
</address>