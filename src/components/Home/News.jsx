import React from "react";
import { Link } from "react-router-dom";

export function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2  font-normal text-4xl">
              The most innovative articles choose GeekyAnts
            </h2>
          </div>

          {/* Categories */}
          <div className="mb-12 md:mb-16">
            <ul className="list-none flex flex-wrap justify-center text-sm font-medium -m-2">
              <li className="m-2">
                <a
                  className="inline-flex text-center text-gray-100 py-2 px-4 rounded-full bg-indigo-400 hover:bg-indigo-700 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Developers
                </a>
              </li>
              <li className="m-2">
                <a
                  className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                  href="#0"
                >
                  SaaS
                </a>
              </li>
              <li className="m-2">
                <a
                  className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                  href="#0"
                >
                  Web Agencies
                </a>
              </li>
              <li className="m-2">
                <a
                  className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                  href="#0"
                >
                  E-Commerce
                </a>
              </li>
              <li className="m-2">
                <a
                  className="inline-flex text-center text-gray-800 py-2 px-4 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                  href="#0"
                >
                  Startups
                </a>
              </li>
            </ul>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">
              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <Link to="/blog-post" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                        src={"/img/home/news-01.jpg"}
                        width="352"
                        height="198"
                        alt="News 01"
                      />
                    </figure>
                  </Link>
                  <div className="mb-3">
                    <ul className="list-none flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-400 hover:bg-indigo-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Case studies
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Hubspot
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-lg leading-snug tracking-tight font-normal">
                    <Link to="/blog-post" className="text-black">
                      “How HubSpot saved 25% on developing costs by switching to
                      Simple.”
                    </Link>
                  </h3>
                </header>
                {/* <footer className='text-sm flex items-center mt-4'>
									<div className='flex flex-shrink-0 mr-3'>
										<a className='relative' href='#0'>
											<span
												className='absolute inset-0 -m-px'
												aria-hidden='true'
											>
												<span className='absolute inset-0 -m-px bg-white rounded-full'></span>
											</span>
											<img
												className='relative rounded-full'
												src={'/img/home/news-author-01.jpg'}
												width='32'
												height='32'
												alt='Author 01'
											/>
										</a>
									</div>
									<div>
										<span className='text-gray-600'>By </span>
										<a className='font-medium hover:underline' href='#0'>
											Lisa Allison
										</a>
									</div>
								</footer> */}
              </article>

              {/* 2nd article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <header>
                  <Link to="/blog-post" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out"
                        src={"/img/home/news-02.jpg"}
                        width="352"
                        height="198"
                        alt="News 02"
                      />
                    </figure>
                  </Link>
                  <div className="mb-3">
                    <ul className="list-none flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-400 hover:bg-indigo-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Case studies
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-lg leading-snug tracking-tight font-normal">
                    <Link to="/blog-post" className="text-black">
                      “How Facebook brought 13% cost savings to their bottom
                      line with Simple’s products.”
                    </Link>
                  </h3>
                </header>
                {/* <footer className='text-sm flex items-center mt-4'>
									<div className='flex flex-shrink-0 mr-3'>
										<a className='relative -ml-2' href='#0'>
											<span
												className='absolute inset-0 -m-px'
												aria-hidden='true'
											>
												<span className='absolute inset-0 -m-px bg-white rounded-full'></span>
											</span>
											<img
												className='relative rounded-full'
												src={'/img/home/news-author-02.jpg'}
												width='32'
												height='32'
												alt='Author 03'
											/>
										</a>
									</div>
									<div>
										<span className='text-gray-600'>By </span>
										<a className='font-medium hover:underline' href='#0'>
											Knut Mayer
										</a>
									</div>
								</footer> */}
              </article>

              {/* 3rd article */}
              <article
                className="flex flex-col h-full"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <header>
                  <Link to="/blog-post" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out"
                        src={"/img/home/news-03.jpg"}
                        width="352"
                        height="198"
                        alt="News 03"
                      />
                    </figure>
                  </Link>
                  <div className="mb-3">
                    <ul className="list-none flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-400 hover:bg-indigo-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Case studies
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Tinder
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-lg leading-snug tracking-tight font-normal">
                    <Link to="/blog-post" className="text-black">
                      “How Tinder grew 115% and saved 120 Hours each week by
                      outsourcing to Simple.”
                    </Link>
                  </h3>
                </header>
                {/* <footer className='text-sm flex items-center mt-4'>
									<div className='flex flex-shrink-0 mr-3'>
										<a className='relative' href='#0'>
											<span
												className='absolute inset-0 -m-px'
												aria-hidden='true'
											>
												<span className='absolute inset-0 -m-px bg-white rounded-full'></span>
											</span>
											<img
												className='relative rounded-full'
												src={'/img/home/news-author-01.jpg'}
												width='32'
												height='32'
												alt='Author 01'
											/>
										</a>
									</div>
									<div>
										<span className='text-gray-600'>By </span>
										<a className='font-medium hover:underline' href='#0'>
											Lisa Allison
										</a>
									</div>
								</footer> */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
