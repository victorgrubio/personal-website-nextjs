import Link from 'next/link'

const BlogSection = props => (
  <section className="ftco-section" id="blog-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h1 className="big big-2">Blog</h1>
          <h2 className="mb-4">My Blog</h2>
          <p>Here I will post my articles about different topics, commonly related to Artificial Intelligence, Computer Vision or Software Development.
          </p>
        </div>
      </div>
      <div style={{ display: 'none' }} className="row d-flex">
      </div>
      <ul>
        {props.posts.map(({ id, date, title }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default BlogSection;


