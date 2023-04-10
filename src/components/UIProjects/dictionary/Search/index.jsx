import { Search } from 'react-feather';
import { useState, createContext } from 'react';
import axios from 'axios';

export const DictionaryContext = createContext();

export default function index() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
        console.log(dictionaryUrl);
        axios.get(dictionaryUrl).then((res) => {
            console.log(res);
            setResults(res.data);
            console.log('rrr', results);
        });
    };
    return (
        <div>
            <DictionaryContext.Provider value={search}>
                <div className='w-full'>
                    <form
                        className='flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4]'
                        onSubmit={handleSearch}
                    >
                        <input
                            placeholder='Search for any word...'
                            type='text'
                            className='text-xl w-full bg-transparent border-none outline-none leading-8 font-bold'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type='button'>
                            <Search />
                        </button>
                    </form>
                </div>
                {search && (
                    <div className='w-full'>
                        {results.map((result, i) => (
                            <div key={i}>
                                <h1 className='text-5xl font-extrabold'>
                                    {result.word}
                                </h1>
                                <p>
                                    {
                                        result.meanings[0].definitions[0]
                                            .definition
                                    }
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </DictionaryContext.Provider>
        </div>
    );
}
