export function Navbar (){
    return <><div><header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-blue-600 text-sm py-3">
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center justify-between">
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-blue-600 text-white shadow-2xs align-middle hover:bg-white/10 focus:outline-hidden focus:bg-white/10 text-sm" id="hs-navbar-primary-collapse" aria-expanded="false" aria-controls="hs-navbar-primary" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-primary">
            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="hs-navbar-primary" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-primary-collapse">
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a className="font-medium text-white focus:outline-hidden" href="#" aria-current="page">Landing</a>
          <a className="font-medium text-gray-300 hover:text-white focus:outline-hidden focus:text-white" href="#">Account</a>
          <a className="font-medium text-gray-300 hover:text-white focus:outline-hidden focus:text-white" href="#">Work</a>
          <a className="font-medium text-gray-300 hover:text-white focus:outline-hidden focus:text-white" href="#">Blog</a>
        </div>
      </div>
    </nav>
  </header>
  </div>
 
    
<div id="hs-sidebar-content-push-to-mini-sidebar" className=" hs-overlay [--auto-close:lg] hs-overlay-minified:w-13 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
h-full
hidden
overflow-x-hidden
fixed top-0 start-0 bottom-0 z-60 
bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabindex-1="true" aria-label="Sidebar" >
  <div className="relative flex flex-col h-full max-h-full ">
      <header className="py-4 px-2  flex justify-between items-center gap-x-2">
        <a className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white hs-overlay-minified:hidden" href="#" aria-label="Brand">Tiket Pesawat </a>
        <div className="lg:hidden">
          <button type="button" className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-sidebar-content-push-to-mini-sidebar">
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span className="sr-only">Close</span>
          </button>     
        </div>
        <div className="hidden lg:block">
          <button type="button" className="flex justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-sidebar-content-push-to-mini-sidebar" aria-label="Minify navigation" data-hs-overlay-minifier="#hs-sidebar-content-push-to-mini-sidebar">
            <svg className="hidden hs-overlay-minified:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
            <svg className="hs-overlay-minified:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/></svg>
            <span className="sr-only">Navigation Toggle</span>
          </button>
        </div>
      </header>
      <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className=" pb-0 px-2  w-full flex flex-col flex-wrap" >
          <ul className="space-y-1">
            <li>
              <a className="min-h-[36px] flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white" href="/">
                <span className="hs-overlay-minified:hidden">Beranda</span>
              </a>
            </li>
              <li>
              <a className="min-h-[36px] w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" href="/pesan_tiket">
                <span className="hs-overlay-minified:hidden">Pesan Tiket</span>
              </a>
            </li>
             <li>
              <a className="min-h-[36px] w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" href="/jadwal_penerbangan">
                <span className="hs-overlay-minified:hidden">Jadwal Penerbangan</span>
              </a>
            </li>
              <li>
              <a className="min-h-[36px] w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" href="/pembayaran">
               <span className="hs-overlay-minified:hidden">Pembayaran</span>
              </a>
            </li>
              <li>
              <a className="min-h-[36px] w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" href="/riwayat_transaksi">
                <span className="hs-overlay-minified:hidden">Riwayat Transaksi</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</div></> 

}


