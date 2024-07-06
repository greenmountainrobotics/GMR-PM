import '@styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: "Quote Board", 
    description: "Share your quotes"
}

const RootLayout = ( {children}) => {
  return (
    <html Lang="en">
        <body>
            <div class="main">
                <div class="gradient" />
            </div>

            <main classname="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout