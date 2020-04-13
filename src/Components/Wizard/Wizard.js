import React from 'react'
import { render } from '@testing-library/react'
import {Route} from 'react-router-dom'
import Step_1 from '../Step 1/Step_1'
import Step_2 from '../Step 2/Step_2'
import Step_3 from '../Step 3/Step_3'

const Wizard = () => {
    
   
   
    return (
        <div>
            Wizard
            <Route path='/wizard/step1' component={Step_1}/>
            <Route path='/wizard/step2' component={Step_2}/>
            <Route path='/wizard/step3' component={Step_3}/>
            {/* <button onClick={() => {
                props.clear();
                props.history.push('/')
            }} >Cancel</button> */}
        </div>
    )
    
}

export default Wizard