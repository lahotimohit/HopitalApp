import React from "react";
import CardComment from "./CommentCard";

const comments = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Lahoti",
    disease: "Overthinking",
    comment: "First Class Doctor of Overthinking Problems",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Lahoti",
    disease: "Appendix",
    comment:
      "I am really appreciate your work Hopital Team.Nice Doctor Facility.I am really appreciate your work Hopital Team.Nice Doctor Facility",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Sankhla",
    disease: "HeadAche",
    comment: "Nice Doctor Facility",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Sankhla",
    disease: "Appendix",
    comment: "I am really appreciate your work Hopital Team",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Sankhla",
    disease: "HeadAche",
    comment: "Nice Doctor Facility",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1641943083592-8de0047e5678?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mohit Sankhla",
    disease: "Appendix",
    comment: "First Class Doctor of Appendix Problems",
  },
];

function PatientComment() {
  return (
    <div className="mt-2 grid-cols-3 gap-3 md:grid">
      {comments.map((comment) => {
        return (
          <CardComment
            key={comment.id}
            image={comment.image}
            name={comment.name}
            disease={comment.disease}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}
export default PatientComment;
