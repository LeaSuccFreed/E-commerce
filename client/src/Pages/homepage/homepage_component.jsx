    import React , {Profiler} from 'react';

import Directory from '../../Components/directory/directory_component'

import {HomePageContainer} from './homepage_style'

const HomePage = () => (
        
    <HomePageContainer>
        <Profiler id="Directory" onRender={(id, phase, actualDuration) => 
            console.log({
                id,
                phase,
                actualDuration
            })
        }>
            <Directory />
        </Profiler>
    </HomePageContainer>
    ) 

export default HomePage;