import Feed from '@components/Feed';


const Home = () => {
  return (
    // Using class below, so elements will be full below another
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Find 
        </h1>

        <h1 className="head_text text-center">
            <span className="orange_gradient text-center">
                Best AI Prompts <br /> for Your Business
            </span>
        </h1>

        <p className="desc text-center">
            PromptWorld is a platform for discovering and sharing AI prompts. 
        </p>

        <Feed />
    </section>
  )
}

export default Home