export default (data) => {
  const links = [
    { url: "/", name: "Home" },
    { url: "/smart-paci", name: "Smart Paci" },
  ];
  return (
    <>
      <nav class="absolute top-0 left-0 right-0 py-5" id="mainNav">
        <div class="container flex text-white items-center">
          <a href="/">
            <img
              src="/img/logo.webp"
              alt="Curious Toys Logo"
              class="h-12 drop-shadow object-contain"
            />
          </a>
          <div class="ml-auto font-comforta text-lg gap-x-6 hidden md:flex">
            {links.map((link) => (
              <a
                href={link.url}
                class="hover:opacity-80 active:underline active:underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div class="ml-auto md:hidden text-3xl toggleNavOpen">
            <img src="/img/icon/hamburger-menu.svg" class="h-6" />
          </div>
        </div>

        <div class="sidebar fixed top-0 right-0 h-screen bg-slate-800 w-80 drop-shadow-lg translate-x-full transition-transform z-30 px-6 py-4 md:hidden">
          <div class="flex w-full mb-2 items-center">
            <a href="/">
              <img
                src="/img/logo.webp"
                alt="Curious Toys Logo"
                class="h-12 drop-shadow object-contain"
              />
            </a>
            <div class="toggleNavClosed ml-auto bg-slate-700 h-10 w-10 flex items-center justify-center rounded-lg opacity-70 hover:opacity-100">
              <img src="/img/icon/cross.svg" class="h-4 opacity-80 -mr-[1px]" />
            </div>
          </div>
          <div className="py-4 overflow-y-auto">
            <ul class="space-y-3 text-xl text-white">
              {links.map((link) => (
                <li>
                  <a href={link.url} class="w-full">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
