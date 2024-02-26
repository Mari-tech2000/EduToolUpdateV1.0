import React, { useState, useEffect, useRef } from "react";
import { Button, Container } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter";
import Blogs from 'data/Blogs';
import blog from "U:/website/edutool/src/pages/blogs/24.jpg";

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blogDetails, setBlogDetails] = useState(null);
    const mainRef = useRef(null);
    useEffect(() => {
        const selectedBlog = Blogs.find((blog) => blog.id === parseInt(blogId, 10));
        setBlogDetails(selectedBlog);
    }, [blogId]);
    if (!blogDetails) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <MainNavbar />
            <main ref={mainRef}>
                <Container style={{ marginBottom: "20px" }} className="">
                    <div className="row m-2">
                        <div className="col-md-8 mb-4 shadow p-4">
                            // {blogDetails.blogImg} // paste this in src attribute of below image
                            <img src="" alt="" className="img-fluid d-inline mr-2 w-100" style={{ height: "300px" }} />
                            <section className="mb-3 mt-3">{blogDetails.title}</section>
                            <section>
                                <div>{blogDetails.content}</div>
                                <span className="fw-bold">Share this on <li className="fa fa-share pr-1"> </li></span>
                                <Button
                                    outline
                                    color="primary"
                                    style={{ textTransform: "capitalize" }}
                                > <li className="fa fa-linkedin"></li> Linkedin</Button>
                                <Button
                                    outline
                                    color="primary"
                                ><li className="fa fa-instagram"></li> Instagram</Button>
                                <Button
                                    outline
                                    color="primary"
                                ><li className="fa fa-twitter"></li> Twitter</Button>
                            </section>
                        </div>
                        <div className="col-md-4 mb-4 ">
                            <section className="sticky-top shadow p-4" style={{ position: "sticky", top: "80px" }} >
                                <section className=" mb-4">
                                    <div>
                                        <Link to={`/blog-details/${blogDetails.id}`}>
                                            // {blog} // paste this in src attribute of below image
                                            <img src="" alt="" className="img-fluid d-inline mr-2" style={{ width: "50px" }} />
                                        </Link>
                                        <Link to={`/blog-details/${blogDetails.id}`}>
                                            <h6 className="card-title mb-0 pb-0 d-inline">{blogDetails.title}</h6>
                                        </Link>
                                        <hr />
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </Container>
            </main>
            <MainFooter />
        </>
    );
};

export default BlogDetails;