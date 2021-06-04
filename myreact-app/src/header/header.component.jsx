import React from 'react';


//styles
const styles = {
   color:'pink',
   fontSize:50,
   fontStyle:'italic',
   textShadown:'2px 2px #ff0000'
}

export const Heading = () => <nav class="App-header">
    <h1 style={{ color: 'yellow', fontFamily: 'hack' }}>IBM</h1>
    <h3 style={styles}>Think 2021,now on demand </h3>
</nav>


