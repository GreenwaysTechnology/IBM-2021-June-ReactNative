import { getByTitle } from '@testing-library/dom';
import React from 'react';
//import React, { Fragment } from 'react'
/**
 * 
 * Fragment syntax
 * 1.React.Fragment <React.Fragment>
 * 2.import React, { Fragment } from 'react'
      <Fragment>
    3. <>
 */

export const Skills = ({skills,title}) => <>
    <h3>{title}</h3>
    <ul className="list-group">
        {
            skills.map((skill, index) => <li
                className="list-group-item list-group-item-action" key={index} >{skill.name}</li>)

        }
    </ul>
</>