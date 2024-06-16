import { Footer } from 'flowbite-react';
import React from 'react';
import {Link} from 'react-router-dom'; 
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs'

export default function FooterComp() {
  return (
   <Footer container className="border border-t-8 border-blue-500">
    {/* <Footer container className="bg-hcorp1 border border-t-8 border-blue-500"> */}
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link
                       to="/"
                       className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
                    >
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                           Congo
                        </span>
                       Projects 
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About' /> 
                        <Footer.LinkGroup col>
                           <Footer.Link 
                              href="https://www.100jsprojects.100"
                              target='_blank'
                              rel='noopener noreferrer'
                              >
                                 100 JS projects 
                              </Footer.Link>
                           <Footer.Link 
                              href="/about"
                              target='_blank'
                              rel='noopener noreferrer'
                              >
                                About the Congo Projects 
                              </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow us' /> 
                        <Footer.LinkGroup col>
                           <Footer.Link 
                              href="https://www.github.com"
                              target='_blank'
                              rel='noopener norehferrer'
                              >
                                 Gitub 
                              </Footer.Link>
                           <Footer.Link 
                              href="#"
                              >
                                Discord  
                              </Footer.Link>

                        </Footer.LinkGroup>
                        <Footer.Title title='Legal' /> 
                        <Footer.LinkGroup col>
                           <Footer.Link 
                              href="#"
                               
                              >
                                 Privacy Policy 
                              </Footer.Link>
                           <Footer.Link 
                              href="#"
                              >
                               Terms &amp; Conditions 
                              </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/> 
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" 
                 by="Sofware Engineering Facility" 
                 year={new Date().getFullYear()}
                 />
                 <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                    <Footer.Icon href="https://www.github.com" icon={BsGithub}/>
                    <Footer.Icon href="#" icon={BsDribbble}/>
                    

                 </div>
            </div>
        </div>

    </Footer>
  )
}
