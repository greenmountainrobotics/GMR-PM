import Link from "next/link";

const PopupForm = ({ type, post, setPost, submitting, handleSubmit }) => {

  return (
    <section className='flex items-center justify-center w-full max-w-full flex-start flex-col'>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full flex flex-col'
      >

        <label>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type='text'
            placeholder='Write your title here'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 p-2'>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PopupForm;
