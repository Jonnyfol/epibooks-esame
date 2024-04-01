import "./CommentArea.css";
import CommentList from "./CommentList.jsx";
import AddComment from "./AddComment.jsx";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import MySpinner from "./MySpinner.jsx";

export default function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const hideAlerts = () => {
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
    setDeleteSuccess(false);
  };

  useEffect(() => {
    const timeout = setTimeout(hideAlerts, 2000);
    return () => clearTimeout(timeout);
  }, [showSuccessAlert, showErrorAlert, deleteSuccess]);

  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0N2NkNTljNDM3MDAwMTkzYzM1ODUiLCJpYXQiOjE3MTE1Njk0MDIsImV4cCI6MTcxMjc3OTAwMn0.9Zx0zJl5P8pMv6knkTcWL1Ijace_4y3zC7SQixMzx9o";

  const ENDPOINT_get = `https://striveschool-api.herokuapp.com/api/comments/${asin}`;

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(ENDPOINT_get, {
          headers: {
            Authorization: key,
          },
        });
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setLoading(false);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (asin) {
      getComments();
    }
  }, [asin]);

  const ENDPOINT_post = "https://striveschool-api.herokuapp.com/api/comments";

  const postComments = async (newComment) => {
    try {
      const response = await fetch(ENDPOINT_post, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-type": "application/json",
          Authorization: key,
        },
      });
      if (response.ok) {
        setShowSuccessAlert(true);
        setComments((prevComments) => [...prevComments, newComment]);
      } else {
        setShowErrorAlert(true);
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        setDeleteSuccess(true);
        setComments(comments.filter((comment) => comment._id !== commentId));
      } else {
        setShowErrorAlert(true);
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="my-3 px-5">
        <Row className="g-3">
          {loading ? (
            <Col
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <MySpinner />
            </Col>
          ) : (
            <>
              <Col sm={12} md={6} lg={6} className="add-comment-box">
                <AddComment asin={asin} postComments={postComments} />
                {showSuccessAlert && (
                  <Alert variant="success">Hai aggiunto il commento</Alert>
                )}
                {showErrorAlert && (
                  <Alert variant="danger">
                    Qualcosa è andato storto, tanto per cambiare
                  </Alert>
                )}
                {deleteSuccess && (
                  <Alert variant="success">Hai eliminato il commento</Alert>
                )}
              </Col>
              <Col sm={12} md={6} lg={6} className="d-flex justify-content-end">
                <CommentList
                  commentToShow={comments}
                  onDeleteComment={deleteComment}
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
