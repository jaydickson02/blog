import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../components/layout'
import MarkdownRender from '../../components/markdownRender';


export default function PostPage({ frontmatter, content }) {


    return (
    <Layout>
      <div className='prose mx-auto'>
        <img
        src={`/${frontmatter.heroImage}`}
        >
        </img>
        <h1>{frontmatter.title}</h1>
        <div>
            <MarkdownRender>{content}</MarkdownRender>
        </div>
      </div>
    </Layout>
    );
  }

export async function getStaticPaths() {
    // Retrieve all our slugs

    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
  }

  export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }