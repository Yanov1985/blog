import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services'





const Home = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard key={post.title} post={post.node} />)}
        </main>
        <sidebar className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </sidebar>
      </div>
    </div>
  );
};


export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
export default Home;
