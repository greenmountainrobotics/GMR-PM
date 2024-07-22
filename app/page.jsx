import Feed from "@components/Feed";
import SideNav from "@components/SideNav";

const Home = () => (
  <section className='w-full h-screen flex-center flex-col'>
    {/*<h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>*/}
          <div className="flex w-full h-full">
            <SideNav className="flex"/>
,            <Feed className="flex"/>
          </div >

          
   
  </section>
);

export default Home;
