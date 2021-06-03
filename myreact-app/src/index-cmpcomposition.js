import React from 'react';
import ReactDOM from 'react-dom'

const Heading = () => <nav>
    <h1>IBM</h1>
</nav>

const Footer = () => <nav>
    <address>IBM Copyright; USA</address>
</nav>

const Main = () => <section>
    <p>
        International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924. IBM is incorporated in New York
   </p>
</section>

const App = () => <div>
    <Heading />
    <Main />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

