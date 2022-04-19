import { useRouter } from 'next/router'
import Posts from '../../components/Posts'
import Layout from '../../components/layout'
import matter from 'gray-matter';
import fs from 'fs';

let categories = require("../../info/categories.json")

export default function category(props){

    const router = useRouter()
    const { cat } =  router.query;

    return(
        <Layout>
            <Posts posts={props.posts} filter={cat}/>
        </Layout>
    )
}

export async function getStaticProps() {
    // Get all the posts
    const files = fs.readdirSync('posts');

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        
        return {
          slug,
          frontmatter,
        };
    });

    return {
        props: {
          posts,
        },
    };
  }

  export async function getStaticPaths() {

    const paths = categories.category.map((category) => ({
        params: {
          cat: category,
        },
    }));

    console.log(paths)
    
    return {
      paths,
      fallback: false
    }
  }


  