import fs from 'fs';
import matter from 'gray-matter';
import Posts from '../components/Posts';
import Layout from '../components/layout'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from "react";

class index extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
          posts: props.posts,
          search: ''
        };

        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange(event){
        this.setState({search: event.target.value});
    }

    render() {

        return (
            <Layout active="/">

                <div className="flex justify-center md:justify-start ml-2">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex items-stretch w-full mb-4 rounded">
                    
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2" value={this.state.search} onChange={this.handleChange}></input>

                    <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />    
                    </span>
                    </div>
                </div>
                </div>
                <Posts search={this.state.search} posts={this.state.posts}/>
            </Layout>
        );
  }
}


export async function getStaticProps() {
    // Get all the posts
    const allFiles = fs.readdirSync('posts');

    let files = [];

    for(let i = 0; i < allFiles.length; i++){
        if(allFiles[i].search(".md") != '-1'){
            files.push(allFiles[i])
        }
    }

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

  export default index