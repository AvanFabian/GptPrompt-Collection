import '@styles/globals.css'

export const metadata = {
    title: 'Prompt World',
    description: 'Find the best prompts for your AI',
}

const RootLayout = ({ children }) => {
  return (
   <html lang='en'>
    <body>
        <div className='main'>
            {/* Below is changing bg-color with self-closing div */}
            <div className='gradient' />
        </div>

        <main className='app'>
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout