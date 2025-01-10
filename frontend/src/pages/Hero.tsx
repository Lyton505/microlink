import {useState} from 'react';
import Avatar from '../assets/Avatar_Thinking_1.svg';

function Hero() {
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(link);
  };

  return (
    <main className="flex flex-col items-center justify-center flex-grow pt-10">
      <h1 className="text-4xl font-normal">MicroLink</h1>
      <p className="text-xl font-normal">
        Create short, easy to remember links.
      </p>
      <div className="flex flex-row">
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="Enter your long link"
            type="text"
            className="input px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={link}
            onChange={e => setLink(e.target.value)}
          ></input>
          <button className="btn btn-primary btn-lg w-full bg-blue-500 text-white py-4 rounded-lg mt-4 hover:cursor-scissors">
            Shorten Link!
          </button>
        </form>
        <img src={Avatar} alt="Avatar" className="w-40 h-40" />
      </div>
    </main>
  );
}

export default Hero;
