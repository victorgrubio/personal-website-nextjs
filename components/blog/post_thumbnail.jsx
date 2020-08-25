const PostThumbnail = () => (
    <div className="col-md-6 d-flex ftco-animate">
        <div className="blog-entry justify-content-end">
            <a href="#" className="block-20"
                style={{backgroundImage: "url('/static/assets/images/blog/image_1.jpg')"}}>
            </a>
            <div className="text mt-3 float-right d-block">
            <h3 className="heading"><a href="#">Change Detection using Drone Images and Convolutional Neural Networks</a></h3>
            <div className="d-flex align-items-center mb-3 meta">
                <p className="mb-0">
                <span className="mr-2">Sept. 12, 2019</span>
                <a href="#" className="mr-2">Víctor García Rubio</a>
                </p>
            </div>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.
                </p>
            </div>
        </div>
    </div>
)

export default PostThumbnail;
