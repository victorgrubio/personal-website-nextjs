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
                <h1 className="mb-3 bread">Blog Single Post</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">Home <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </span> 
                  <span className="mr-2">
                    <a href="blog.html">Blog <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </span> 
                  <span>Blog Single <i className="ion-ios-arrow-forward"></i></span>
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
              <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
              <p>
                <img src="images/image_3.jpg" alt="" className="img-fluid"/>
              </p>
              <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
              <p>
                <img src="images/image_4.jpg" alt="" className="img-fluid"/>
              </p>
              <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
              <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
              <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
              <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">Life</a>
                  <a href="#" className="tag-cloud-link">Sport</a>
                  <a href="#" className="tag-cloud-link">Tech</a>
                  <a href="#" className="tag-cloud-link">Travel</a>
                </div>
              </div>
              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4"/>
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Categories</h3>
                <ul className="categories">
                  <li><a href="#">Interior Design <span>(12)</span></a></li>
                  <li><a href="#">Exterior Design <span>(22)</span></a></li>
                  <li><a href="#">Industrial Design <span>(37)</span></a></li>
                  <li><a href="#">Landscape Design <span>(42)</span></a></li>
                </ul>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: "url(images/image_1.jpg)"}}></a>
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> March 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: "url(images/image_2.jpg)"}}></a>
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> March 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a className="blog-img mr-4" style={{backgroundImage: "url(images/image_3.jpg)"}}></a>
                  <div className="text">
                    <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                    <div className="meta">
                      <div><a href="#"><span className="icon-calendar"></span> March 12, 2019</a></div>
                      <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                      <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                    </div>
                  </div>
                </div>
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
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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