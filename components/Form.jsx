import Link from 'next/link'

const Form = ({ type, post, setPost, submitting,
handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start
    flex-col'>
      <h1 className='head_text text_left'>
        <span className=' blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and  Dive into a diverse range of AI-generated prompts that cater to various interests and objectives. From creative writing to problem-solving challenges, find the perfect prompt to spark your imagination.
      </p>

      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7
        glassmorphism' // this is to give glassy look
      >
        <label>
          <span className='font-satoshi font-semibold text-base
          text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            // post is a prop with "Dictionary" containing prompt and tag
            value={post.prompt}
            onChange={(e)=> setPost({...post, // spread post object
            prompt: e.target.value})} // set prompt prop to value of textarea
            placeholder='Enter your prompt here...'
            required
            className='form_textarea'
          >

          </textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base
          text-gray-700'>
            Tag&nbsp;
            <span className='font-normal'>
            (#tech, #idea, #development)</span>
          </span>

          <input
            // post is a prop with "Dictionary" containing prompt and tag
            value={post.tag}
            onChange={(e)=> setPost({...post, // spread post state
            tag: e.target.value})} // set prompt prop to value of textarea
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            // if we are submitting, we disable the button
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange
            rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form