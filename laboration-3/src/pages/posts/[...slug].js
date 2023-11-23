import React from 'react'
import client from '../../../apolloClient';
import { gql } from '@apollo/client';
import Footer from '../footer.js';
import styles from '@/styles/Home.module.css';

export default function PostPage({post, posts}) {
    return (
        <main className={`${styles.main}`}>
            <img src={post.coverImage.url} alt="" width="400px;" />
            <h2 className={styles.title2}>{post.title}</h2>
            <div className={styles.description}>
                <div dangerouslySetInnerHTML={{__html:post.description.html}}/>
            </div>
            <Footer/>
        </main>
    )
}

export async function getStaticPaths() {
    const {data} = await client.query({
        query: gql`
        query MyQuery {
            posts {
            slug
            }
        }`
    })
    const {posts} = data;
    const paths = posts.map( post => ({
        params: {slug: [post.slug]}
    }))
    console.log(posts);
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const slug = params.slug[0];
    const {data} = await client.query({
        query: gql`
        query PostBySlug($slug: String!){
          posts (where: {slug : $slug}) {
            id
            guestName
            slug
            title
            postDate
            publishedAt
            description {
              raw
              html
            }
            coverImage {
              url
            }
          }
        }`,
        variables: {slug}
    })
    const {posts} = data;
    const post = posts[0];
    return { props: {post}};
}