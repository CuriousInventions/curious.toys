export default (data) => {
  const links = [
    { url: "/", name: "Home" },
    { url: "/smart-paci", name: "Smart Paci" },
  ];
  return (
    <>
      <footer class="bg-slate-800 text-white">
        <div class="container py-16 flex flex-col md:flex-row gap-y-6">
          <ul class="text-center md:text-left space-y-2 md:space-y-1">
            {links.map((link) => (
              <li>
                <a href={link.url} class="opacity-80 hover:opacity-100">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div class="md:ms-auto md:text-right flex justify-center flex-col">
            <a href="/" class="mb-3 md:mb-2 mx-auto">
              <img
                src="/img/logo.webp"
                alt="Curious Toys Logo"
                class="h-12 drop-shadow"
              />
            </a>
            <div class="mx-auto md:ml-auto md:mr-0">
              <a
                href="https://www.patreon.com/CuriousInventions"
                target="_blank"
                rel="noopener"
                title="Curious Invention Patreon"
              >
                <img
                  src="/img/icon/patreon.svg"
                  alt="Patreon Logo"
                  class="h-6 mr-2 inline-block opacity-50 hover:opacity-90 transition-opacity"
                />
              </a>
              <a
                href="https://discord.gg/tnSEc5KFSF"
                target="_blank"
                rel="noopener"
                title="Curious Invention Patreon"
              >
                <img
                  src="/img/icon/discord.svg"
                  alt="Discord Logo"
                  class="h-6 mr-2 inline-block opacity-50 hover:opacity-90 transition-opacity"
                />
              </a>
              <a
                href="https://t.me/CuriousInventions"
                target="_blank"
                rel="noopener"
                title="Curious Invention Telegram"
              >
                <img
                  src="/img/icon/telegram.svg"
                  alt="Patreon Logo"
                  class="h-6 inline-block opacity-50 hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
