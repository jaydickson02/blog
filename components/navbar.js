/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {

    const navigation = [
        { name: 'Dev', href: '/category/dev', current: false },
        { name: 'One Day', href: '/category/someday', current: false },
        { name: 'Engineering', href: '/category/engineering', current: false },
        { name: 'Mathematics', href: '/category/math', current: false },
        { name: 'Message Board', href: '/messageboard', current: false },
        
      ]

      for(let i = 0; i < navigation.length; i++){
          if(navigation[i].name == props.active){
              navigation[i].current = true;
          }
      }

  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                    <a className="hover:bg-gray-700 hover:text-white hover:rounded-md text-md px-3 py-1.5">
                        <FontAwesomeIcon icon={faRocket} />
                        <span className='px-2'>Jay Dickson</span>
                    </a>
                </Link>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-8 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                    
                    <Disclosure.Button
                    key={item.name}
                    as="button"
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}>
                        <Link href={item.href}>
                            <div className="relative flex">
                                <span className="w-96 text-left">{item.name}</span>
                            </div>
                        </Link>
                    
                    </Disclosure.Button>
                    
                
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


