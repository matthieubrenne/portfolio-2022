import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthieu Brenne | Développeur Front-end</title>
        <meta
          charset="utf-8"
          name="description"
          content="Je suis Matthieu, développeur Front-End. N'hesitez pas a visiter mon portfolio afin de découvrir mon univers !"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
