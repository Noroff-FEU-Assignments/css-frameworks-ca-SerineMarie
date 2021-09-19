import React from 'react';
import Carousel from './CarouselContent'
import Tabs from './TabsContent'
import AccordionContent from './AccordionContent';
import Container from 'react-bootstrap/Container';


function Home() {
    return (
        <React.Fragment>
            <Carousel/>
            <Container>
            <h1>
                We do YAY things
            </h1>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend 
                finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, 
                consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa 
                euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
            </p>
            </Container>

            
            <Tabs/>
            <AccordionContent/>
        
        </React.Fragment>
    )
}

export default Home
