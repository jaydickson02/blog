import Image from 'next/image';
import Link from 'next/link';

export default function Posts(props) {

    //Filter Posts
    const allPosts = props.posts;
    let posts = []

    

    if(props.filter == 'all' || !props.filter){
        posts = allPosts;

    } else {
        for(let i = 0; i < allPosts.length; i++){
            if(allPosts[i].frontmatter.category == props.filter){
                posts.push(allPosts[i]);
            }
        }
    }

    if(props.search && props.search != ''){
        let postSet = posts;
        posts = []
        let re = new RegExp(props.search,'i')

        for(let i = 0; i < postSet.length; i++){
            
            if(postSet[i].frontmatter.title.search(re) != '-1'){
                posts.push(postSet[i]);
            }
        }

    }

    if(posts.length == 0){
        return(
            <div>
            <h1>No Results Found</h1>
            
            <button>
                <Link href="/">
                    Home
                </Link>
            </button>
            </div>
        )
    }
    

    return (
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.heroImage}`}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
