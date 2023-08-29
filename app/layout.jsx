import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'PromptWorld',
    description: 'Find the best prompts for your AI',
}

const RootLayout = ({ children }) => {
  return (
   <html lang='en'>
    <body>
        <Provider>
            <div className='main'>
                {/* Below is changing bg-color with self-closing div */}
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
        </Provider>
    </body>
   </html>
  )
}

export default RootLayout