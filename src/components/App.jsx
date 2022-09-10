import Element from './Element';
import {Segment} from 'semantic-ui-react'
import Atom from './ModelView/Atom';

function App() {
    return (
        <div className='ui container fluid'>
            <Segment>
                <div>
                    <h1>Quemist</h1>
                    <p>Coming soon... A webapp to empower the Chemists in your life</p>
                </div>
                <div>
                    <Segment className="ui container fluid">
                        <Element/>
                    </Segment>
                </div>
            </Segment>
            <div className='ui container' style={{"display":"flex", "marginTop":"10px", "border":"black solid 10px"}}>
                <Atom />
            </div>
            

        </div>
    )
}

export default App;
