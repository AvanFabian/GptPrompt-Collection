import '@styles/globals.css'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
// import { NavigationEvents } from './components/navigation-events'

const Nav = dynamic(() => import('@components/Nav'))
const Provider = dynamic(() => import('@components/Provider'))
const Template = dynamic(() => import('./template'))

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