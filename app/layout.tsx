import Nav from '../components/Nav';
import '../styles/globals.css'
import React from 'react'; 
import Provider from '../components/Provider';

export const metadata = {
    title: "SkyTutors",
    description: "SkyTutors is a platform that connects students with tutors."
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
          <Provider session={null}>
            <Nav />

            <div className="w-full h-full">
                {children}
            </div>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout;