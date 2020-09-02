import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
    
export default function Post({ postData }) {
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="hero-wrap js-fullheight">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
            <div className="col-lg-10 ftco-animate d-flex align-items-center">
              <div className="text text-center">
                <h1 className="mb-3 bread">{postData.title}</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">Home<i className="ion-ios-arrow-forward"></i>
                    </a>
                  </span> 
                  <span className="mr-2">
                    <a href="blog.html">Blog<i className="ion-ios-arrow-forward"></i>
                    </a>
                  </span> 
                  <span>{postData.url}<i className="ion-ios-arrow-forward"></i></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
                <div className="resume-wrap">
                  <h1>{postData.title}</h1>
                  <span className="date">{postData.date}</span>
                  <article>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
                  </article>
                </div>
            </div>
            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Search not working" />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Categories</h3>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Recent Blog</h3>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">house</a>
                  <a href="#" className="tag-cloud-link">office</a>
                  <a href="#" className="tag-cloud-link">building</a>
                  <a href="#" className="tag-cloud-link">land</a>
                  <a href="#" className="tag-cloud-link">table</a>
                  <a href="#" className="tag-cloud-link">interior</a>
                  <a href="#" className="tag-cloud-link">exterior</a>
                  <a href="#" className="tag-cloud-link">industrial</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5 mt-5">
      <div id="hyvor-talk-view"></div>
        <script dangerouslySetInnerHTML={{
          __html: `
              var HYVOR_TALK_WEBSITE = 1854; // DO NOT CHANGE THIS
              var HYVOR_TALK_CONFIG = {
                  url: false,
                  id: false
              };`,
          }}
        />
        <script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"></script>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}