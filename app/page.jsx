import Feed from '@components/Feed';

const Home = () => {  
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Share your quotes
          <br className="max-md:hidden"/>
          <span className="blue_gradient text-center">with your friends</span>
        </h1>

        <p className="desc">
          Add quotes from your friends, then share then 
        </p>

        <Feed/>
    </section>
  )
}

export default Home