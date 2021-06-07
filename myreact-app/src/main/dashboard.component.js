import { Address } from "./address.component";
import { Skills } from "./skills.component";
import PropTypes from 'prop-types'

export const DashBoard = (props) => {
  console.log(props)
  //can this comopnent update props
  //props are read only
  // props.firstName = "something"
  const { firstName, age, isActive, address, skills } = props;

  return <div className="container">
    <h3 style={{ backgroundColor: 'yellow' }}>DashBoard</h3>
    <p>Name : {firstName}</p>
    <p>age : {age}</p>
    <p>IsActive : {isActive ? "Active" : "InActive"}</p>
    <Address address={address} />
    <Skills skills={skills} title="Full Stack Developer Skills" />

    {/* <address>
      {address.city} {","} {address.state}
    </address>
    <h3>Skills</h3>
    <ul className="list-group">
      {
        skills.map((skill, index) => <li
          className="list-group-item list-group-item-action" key={index} >{skill.name}</li>)

      }
    </ul> */}
  </div>
}

//default props
DashBoard.defaultProps = {
  firstName: 'firstName',
  age: 18,
  isActive: false,
  address: {
    city: 'city',
    state: 'state'
  },
  skills: []
}

//Validation
DashBoard.propTypes = {
  //validation rule
  age: PropTypes.number.isRequired
}