import Link from "next/link";

const PopupForm = ({ type, post, setPost, submitting, handleSubmit }) => {

  return (
    <section className='flex items-center justify-center w-full max-w-full flex-start flex-col text-left'>
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
          <span className='font-satoshi font-semibold text-sm text-gray-400'>
            Description
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your description here'
            className='form_textarea '
          />
        </label>

        <label className="mt-3">
        <span className='font-satoshi font-semibold text-sm text-gray-400 p-2'>
            Tags
          </span>

          <select
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            className='form_input_bottom'
          >
            <option value="None">None</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Outreach">Outreach</option>
            <option value="Programming">Programming</option>
            <option value="Business">Business</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <div className='flex-end mx-3 mb-5 p-2'>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-green-700 rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PopupForm;
