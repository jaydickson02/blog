import Navbar from './navbar';
import Footer from './footer'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function layout(props){

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar active={props.active}/>
            <main className='container mx-auto flex-1'>
                {props.children}
            </main>
            <Footer/>
        </div>
      );

}