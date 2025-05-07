import { useEffect } from "react";
import { useState } from "react"

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts'));
        if (storedPosts) {
            setPosts(storedPosts);
        }
    }, []);

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title: title,
            content: content,
            author: author,
            date: new Date().toLocaleDateString(),
        }
        setPosts([...posts, newPost]);
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
        setTitle('');
        setContent('');
        setAuthor('');
    }

    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-center font-bold mb-4">Blog</h1>
            <form onSubmit={addPost} className="mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border border-gray-300 rounded p-2 mb-2 w-full"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="border border-gray-300 rounded p-2 mb-2 w-full"
                ></textarea>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    className="border border-gray-300 rounded p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2">Add Post</button>
            </form>

            {posts.length !== 0 ? (
                <h2 className="text-xl text-center font-semibold mb-2">Posts</h2>
            ) : (
                <p className="text-sm text-gray-600 text-center font-semibold mb-2">No Posts Available</p>
            )}
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="border border-gray-300 rounded p-4 mb-2">
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        <p>{post.content}</p>
                        <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
                        <button onClick={() => deletePost(post.id)} className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 mt-2">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog