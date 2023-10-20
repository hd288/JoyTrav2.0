import {
  Card,
  Button,
  CardGroup,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import "./post.scss";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.posts.findAllPosts();
      setPosts(response.data);
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [modalShow, setModalShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const handleSeeMoreClick = (post) => {
    setSelectedPost(post);
    setModalShow(true);
  };
  return (
    <>
      {selectedPost && (
        <Post
          show={modalShow}
          post={selectedPost}
          onHide={() => {
            setModalShow(false);
            setSelectedPost(null); // Clear the selected post when modal is closed
          }}
        />
      )}
      <div className="container">
        <CardGroup className="vgr-cards">
          {currentPosts.map((post) => (
            <Card key={post.id}>
              <div className="card-img-body">
                <Card.Img
                  src={post.picture}
                  className="object-fit-cover"
                  alt="Card image cap"
                />
              </div>
              <Card.Body>
                <Card.Title className="pb-3">{post.title}</Card.Title>
                <Card.Text style={{ minHeight: "150px" }}>
                  {post.intro}
                </Card.Text>
                <Button
                  variant="outline-info"
                  onClick={() => handleSeeMoreClick(post)}
                >
                  see more...
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>

        <div className="pagination d-flex justify-content-center mt-5">
          <ButtonGroup className="w-50">
            <Button
              className="d-flex align-items-center justify-content-center "
              variant="outline-info"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <BsFillCaretLeftFill />
            </Button>
            {pageNumbers.map((pageNumber) => (
              <Button
                className="d-flex align-items-center justify-content-center "
                key={pageNumber}
                variant={currentPage === pageNumber ? "info" : "outline-info"}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </Button>
            ))}
            <Button
              className="d-flex align-items-center justify-content-center "
              variant="outline-info"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <BsFillCaretRightFill />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}
