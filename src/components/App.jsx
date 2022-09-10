import Element from './Element';
import {Segment} from 'semantic-ui-react'

function App() {
    return (
        <div className='ui container fluid'>
            <Segment>
            <div>
              <h1>Quemist</h1>
              <p>Coming soon... A webapp to empower the Chemists in your life</p>
            </div>
                <Segment className="ui container fluid">
                    <Element/>
                </Segment>
            </Segment>

        </div>
    )
}

export default App;
