import microLinkLogo from '../assets/microLink-logo.svg';

function Navbar() {
  return (
    <nav className="w-full px-8 py-4">
      <div className="list-none flex flex-row justify-between items-center align-middle">
        <div
          className="flex flex-row items-center gap-x-2 hover:cursor-pointer"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <img src={microLinkLogo} alt="MicroLink Logo" />
          <h1 className="text-2xl font-bold">MicroLink</h1>
        </div>
        <div>
          <a className="text-lg" href="/features">
            Features
          </a>
        </div>
        <div>
          <a className="text-lg" href="/pricing">
            Pricing
          </a>
        </div>
        <div>
          <button
            onClick={() => {
              window.location.href = '/login';
            }}
            className="btn btn-primary btn-lg bg-blue-500 text-white py-2 rounded-lg px-8 hover:cursor-pointer self-center;"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
