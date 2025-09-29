function Footer({ iconSrc = "/rewind-flower.png" }) {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img src={iconSrc} alt="Rewind logo" className="h-7 w-7 object-contain" />
              </div>
              <span className="text-lg font-semibold">REWIND</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              A gentle companion to Reflect, Revisit and Relive the moments that matter.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/70">
              <a href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20" aria-label="X/Twitter">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.3 3H21l-7.7 8.8L22 21h-7l-5.4-6.5L3.7 21H1l8.7-9.9L2 3h7l5 6.1L17.3 3z"/></svg>
              </a>
              <a href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM19 6.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
              </a>
              <a href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M23 7.5s-.2-1.6-.8-2.4c-.8-.8-1.7-.8-2.1-.9C17.7 3.9 12 3.9 12 3.9S6.3 3.9 3.9 4.2c-.4.1-1.3.1-2.1.9C1.2 5.9 1 7.5 1 7.5s-.2 1.9-.2 3.8v1.3c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.4c.8.8 1.9.8 2.3.9 2.4.3 8.1.3 8.1.3s5.7 0 8.1-.3c.4-.1 1.3-.1 2.1-.9.6-.8.8-2.4.8-2.4s.2-1.9.2-3.7v-1.3c0-1.9-.2-3.8-.2-3.8ZM9.8 14.5V7.9l6.1 3.3-6.1 3.3Z"/></svg>
              </a>
            </div>
          </div>
          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
              <li><a href="#journal" className="hover:text-white">Smart Search</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="#cta" className="hover:text-white">Start now</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/60 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} REWIND · All rights reserved.</p>
          <p>Powered by Anix Inventive pvt Limited</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;