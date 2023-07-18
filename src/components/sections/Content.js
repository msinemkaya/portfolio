import A from 'components/base/A';
import Container from 'components/base/Container';
import FlexBox from 'components/base/FlexBox';
import Image from 'components/base/Image';
import P from 'components/base/P';
import CardFlexBox from 'components/common/CardFlexBox';
import InfoCard from 'components/common/InfoCard';
import me from 'images/me.png'

export default function Content(){

  const technologies = ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'Laravel']

  return(
    <FlexBox className='md:flex-row flex-col gap-y-8'>
      <CardFlexBox>
        <InfoCard title='education'>
          <P>
            Adnan Menderes University - Computer Engineering(eng) / Turkey
          </P>
          <br/>
          <P>
            Opole Universiy of Technology - Erasmus++ for 6th semester in Computer Engineering / Poland
          </P>
        </InfoCard>
        <InfoCard title='Socials'>
          <A to='https://github.com/msinemkaya' className='block'>GitHub 😸</A>
          <A to='https://www.linkedin.com/in/melike-kaya-8bba11283/' className='block'>LinkedIn 😼</A>
        </InfoCard>
      </CardFlexBox>
      <Container className='flex-1'>
        <Image to={me} alt='me'/>
      </Container>
      <CardFlexBox>
        <InfoCard title='technologies'>
          {technologies.join(' • ')}
        </InfoCard>
        <InfoCard title='about me'>
          Hello 💅 I am a 22 years old who is very excited and enthusiastic about learning new stuff about software development 🫠
          I love what I do and I am trying to catch some new opportunities to bring myself further at this field. 👩‍💻
        </InfoCard>
      </CardFlexBox>
    </FlexBox>
  );
}