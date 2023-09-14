import '@styles/globals.css'

import { usePathname } from 'next/navigation'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
// import { NavigationEvents } from './components/navigation-events'
import Template from './template'

export const metadata = {
    title: 'PromptWorld',
    description: 'GPT AI Best Prompt',
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
                        <Template>{children}</Template>
                        {/* <Template key={pathName}>{children}</Template> */}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout