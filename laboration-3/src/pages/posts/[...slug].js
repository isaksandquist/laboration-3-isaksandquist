import React from 'react'
import client from '../../../apolloClient';
import { gql } from '@apollo/client';
import Link from 'next/link'

export default function PostPage({post, posts}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.coverImage.url} alt="" width="400px;" />
            <div dangerouslySetInnerHTML={{__html:post.description.html}}/>
            <br/><Link href={`/`}>Home page</Link>
        </div>
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