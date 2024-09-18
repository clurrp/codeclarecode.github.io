const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2 w-full mx-auto px-4">
        <h1>
          <a href="/" className="logo">
            codewithclare <img src="/images/cat.svg" width={40} height={40} alt="Clare Beany" />
          </a>
        </h1>

        <div className="">
          <button className="" onClick={() => {}}>
            <span className="material-symbols-rounded">Menu</span>
          </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
