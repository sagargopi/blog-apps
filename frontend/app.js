const { useState, useEffect } = React;
const API_URL = config.API_URL;

function App() {
    const [blogs, setBlogs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('blogs');
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/blogs/`);
            setBlogs(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setError('Failed to load blogs');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await axios.post(`${API_URL}/api-auth/login/`, {
                username: formData.get('username'),
                password: formData.get('password')
            }, {
                withCredentials: true
            });
            setIsLoggedIn(true);
            setCurrentPage('blogs');
            setError('');
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please check your credentials.');
        }
    };

    const handleCreateBlog = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/blogs/`, formData, {
                withCredentials: true
            });
            fetchBlogs();
            setCurrentPage('blogs');
            setFormData({ title: '', content: '' });
            setError('');
        } catch (error) {
            console.error('Error creating blog:', error);
            setError('Failed to create blog. Please try again.');
        }
    };

    const Navigation = () => (
        <nav className="nav">
            <div className="nav-content">
                <h1>Blog App</h1>
                <div>
                    {isLoggedIn ? (
                        <>
                            <button 
                                className="button" 
                                onClick={() => setCurrentPage('create')}
                                style={{ marginRight: '10px' }}
                            >
                                Create Blog
                            </button>
                            <button 
                                className="button" 
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button 
                            className="button" 
                            onClick={() => setCurrentPage('login')}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );

    const BlogList = () => (
        <div className="container">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-card">
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-content">{blog.content}</p>
                </div>
            ))}
        </div>
    );

    const LoginForm = () => (
        <div className="container">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit" className="button">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );

    const CreateBlogForm = () => (
        <div className="container">
            <form onSubmit={handleCreateBlog}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea 
                        value={formData.content}
                        onChange={e => setFormData({...formData, content: e.target.value})}
                        required 
                        rows="5"
                    />
                </div>
                <button type="submit" className="button">Create Blog</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );

    return (
        <>
            <Navigation />
            {currentPage === 'blogs' && <BlogList />}
            {currentPage === 'login' && <LoginForm />}
            {currentPage === 'create' && <CreateBlogForm />}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
