const Header = (props) => {
    const title = props.myTitle
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">{title}</a>
                </div>
            </nav>
        </header>
    )
}

const PostItem = (props) => {
    // const singlePost = props.myPost
    const { title, body } = props.myPost;
    return (
        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

const PostList = (props) => {
    const postList = props.myPosts
    return (
        <div className="container">
            <div className="row">
                {postList.map((post) => {
                    return <PostItem key={post.id} myPost={post} />
                })}
            </div>
        </div>
    )
}

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright BIT
                </div>
            </div>
        </footer>
    )
}

const App = (props) => {
    const posts = props.myData
    return (
        <React.Fragment>
            <Header myTitle={'BIT Posts'} />
            <PostList myPosts={posts} />
            <Footer />
        </React.Fragment>
    )
}

const rootElement = document.querySelector('.root')
ReactDOM.render(<App myData={data} />, rootElement)