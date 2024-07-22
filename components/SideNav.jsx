"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const SideNav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='side_nav'>
     
      <Link href='/' className='flex gap-2 flex-center p-4'>
        <Image
          src='/assets/images/gmr_logo.svg'
          alt='logo'
          width={40}
          height={40}
          className='object-contain'
        />
        <p className='logo_text'>GMR Tasks</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='w-full flex flex-col'>

            <Link href='/profile' className="flex flex-row m-5">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
                <span className="ml-4 font-satoshi font-bold flex justify-center items-center text-center text-2xl">{session?.user.name}</span>
            </Link>
             

            <Link href='/meeting-plans' className="button">
              <Image
                src={session?.user.image}
                width={20}
                height={20}
                className='rounded-full'
                alt='profile'/>
                <span className="ml-4 font-bold flex justify-center items-center text-center text-1xl">Meeting Plans</span>
            </Link>

           
            <Link href='/profile' className="button">
              <Image
                src={session?.user.image}
                width={20}
                height={20}
                className='rounded-full'
                alt='profile'/>
                <span className="ml-4 font-bold flex justify-center items-center text-center text-1xl">CAD/Manufacturing</span>
            </Link>


            <Link href='/profile' className="button">
              <Image
                src={session?.user.image}
                width={20}
                height={20}
                className='rounded-full'
                alt='profile'/>
                <span className="ml-4 font-bold flex justify-center items-center text-center text-1xl">Software/Electrical</span>
            </Link>

           
            <Link href='/profile' className="button">
              <Image
                src={session?.user.image}
                width={20}
                height={20}
                className='rounded-full'
                alt='profile'/>
                <span className="ml-4 font-bold flex justify-center items-center text-center text-1xl">Buisness/Outreach</span>
            </Link>


            <Link href='/create-prompt' className='black_btn mt-5 ml-5 mr-5'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn mt-5 ml-5 mr-5'>
              Sign Out
            </button>

           
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>)}
      </div>
    </nav>
  );
};

export default SideNav;
