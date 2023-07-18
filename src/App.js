import Container from 'components/base/Container';
import Section from 'components/base/Section';
import Content from 'components/sections/Content';
import HeadingSection from 'components/sections/HeadingSection';
import {ReactComponent as Melike} from 'images/MELIKE.svg'


function App() {
  return (
   <Section className='min-h-screen h-full relative'>  
    <Container className='container mx-auto py-12 relative z-50'>
      <HeadingSection/>
      <Content/>
    </Container>
    <Container className='absolute inset-0'>
      <Melike className='w-screen h-screen p-6 opacity-70'/>
    </Container> 
   </Section>
  );
}

export default App;
