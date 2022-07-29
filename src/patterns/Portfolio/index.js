import { en, pt } from '../../../text-contents/portfolio';
import Title from '../../components/Title';
import Project from '../../components/Project';
import GitHubLink from '../../components/GitHubLink';

export default function Portfolio ({ lang }) {
  const texts = lang === 'en' ? en : pt;
  
  return (
    <>
      <section id="portfolio">
        <Title>{texts.title}</Title>

        <Project texts={texts.mygnar}>
          {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3MLnwGRkcfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        </Project>

        <Project texts={texts.myWebsite} hiddenLinkToProject>
          <img src="/images/portfolio/portfolio-website.png" alt={texts.myWebsite.imgAlt} />
        </Project>

        <Project texts={texts.reactLyrics}>
          <img src="/images/portfolio/react-lyrics.jpg" alt={texts.reactLyrics.imgAlt} />
        </Project>
        <GitHubLink texts={texts.githubLink}/>
        
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        iframe {
          padding-bottom: 2rem;
        }

        img {
          max-width: 90vw;
          margin-bottom: 1rem; 
        }
      `}</style>
    </>
  );
}