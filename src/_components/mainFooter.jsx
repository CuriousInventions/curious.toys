export default (data) => {
  const products = [{ url: "/smart-paci", name: "Smart Paci" }];
  return (
    <>
      <footer class="bg-slate-800 text-white">
        <div class="container py-16">
          <div className="flex flex-col md:flex-row gap-4">
            <div class="mx-auto md:mx-0">
              <a href="/" class="mb-3 md:mb-2">
                <img
                  src="/img/logo.webp"
                  alt="Curious Toys Logo"
                  class="h-12 drop-shadow"
                />
              </a>
            </div>
            <div class="mx-auto md:ml-auto md:mr-0 md:w-2/12 text-center md:text-left">
              <h6 class="mb-1">Products</h6>
              <ul class="md:text-sm md:text-left space-y-2 md:space-y-1">
                {products.map((link) => (
                  <li>
                    <a href={link.url} class="opacity-80 hover:opacity-100">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr class="rounded-full mt-6 mb-4 h-[2px] bg-slate-900 border-0 opacity-50" />
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p class="opacity-60 text-sm font-light">
              &copy; Curious Inventions. All rights reserved.
            </p>
            <div>
              <a
                href="https://www.patreon.com/CuriousInventions"
                target="_blank"
                rel="noopener"
                title="Curious Invention Patreon"
              >
                <img
                  src="/img/icon/patreon.svg"
                  alt="Patreon Logo"
                  class="h-6 mr-4 inline-block opacity-50 hover:opacity-90 transition-opacity"
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
                  class="h-6 mr-4 inline-block opacity-50 hover:opacity-90 transition-opacity"
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
