import { useContext,useState,useEffect } from 'react'
import { DictionaryContext } from './Search/index'
import Search from './Search/index'
import Header from './Header/index'
export default function index() {
  const [results, setResults] = useState([])
  const search = useContext(DictionaryContext)

  useEffect(() => {
    console.log('search', search)
  }, [search])


  return (
    <div>
      <Header />
       <div
      className='w-[50rem]  mx-auto mt-5 mb-5'>
      <Search/>
      </div>

      <section className="dictionary">
      <div className="dictionary__head">
        <div className="dictionary__word-wrapper">
          {/* <p className="dictionary__word">{results?.data.word}dd</p> */}
          <p className="dictionary__phonetics">/ˈkiːbɔːd/</p>
        </div>
        <img
          className="dictionary__play"
          src="/assets/dictionary/assets/images/icon-play.svg"
          alt="play button"
        />
      </div>
      <div className="dictionary__first-partOfSpeech-element">
        <p className="dictionary__first-partOfSpeech">noun</p>
        <div className="dictionary__line"></div>
      </div>
      <p className="dictionary__meaning">Meaning</p>
      <ul className="dictionary__list-noun">
        <li className="dictionary__definition">
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li className="dictionary__definition">
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </li>
        <li className="dictionary__definition">
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </li>
      </ul>
      <div className="dictionary__synonyms">
        <p className="dictionary__synonym-name">Synonyms</p>
        <p className="dictionary__synonym">electronic keyboard</p>
      </div>
      <div className="dictionary__second-partOfSpeech-element">
        <p className="dictionary__second-partOfSpeech">verb</p>
        <div className="dictionary__line"></div>
      </div>
      <p className="dictionary__meaning">Meaning</p>
      <ul className="dictionary__list-verb">
        <li className="dictionary__definition">To type on a computer keyboard.</li>
      </ul>
      <p className="dictionary__example">
        "Keyboarding is the part of this job I hate the most."
      </p>
      <div className="dictionary__line"></div>
      <p className="dictionary__source">Source</p>
      {/* <div className="dictionary__link-wrapper">
        <a className="dictionary__link" href="#">https://en.wiktionary.org/wiki/keyboard</a>
        <img src="//assets/dictionary/assets/images/icon-new-window.svg" alt="new window" />
      </div> */}
    </section>
    </div>
  )
}
