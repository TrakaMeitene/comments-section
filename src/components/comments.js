import "./comments.css"
import Modal from "../components/modal.js"

import { useEffect, useState, useCallback } from "react"
import CommentCase from "./commentCase"
const axios = require('axios').default;

export default function Comments() {

    const [user, setUser] = useState("");
    const [comments, setComments] = useState();
    const [newcomment, setNewcomment] = useState();
    const [deletemode, setDelete] = useState(false);
    const [commentid, setCommentid] = useState();

    useEffect(() => {
        getAllData();
        getUser();
    }, [])

    //get all comments from db
    const getAllData = () => {
        axios.get('https://nodeprojectreact.herokuapp.com/')
            .then(response => setComments(response.data))
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    //get current user from db
    const getUser = () => {

        axios.get('https://nodeprojectreact.herokuapp.com/user', { params: { name: "juliusomo" } })
            .then(response => setUser(response.data))
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    //add new comment to db
    const postcomment = (e) => {
        const content = e.target[0].value;
        e.preventDefault();
        const arrayofid = []
        // eslint-disable-next-line
       const lastitem = comments.map(comment => { arrayofid.push(comment.id)})
const sortedid = arrayofid.sort((a, b) => a - b)

        const newcomment = {
            id: sortedid[sortedid.length -1] + 1,
            content: content,
            createdAt: new Date(),
            score: 0,
            user: user[0],
            replyTo: "0"
        }

        axios.post("/addcomment", { newcomment })
            .catch((error) => {
               alert('Error:', error);
            })
            .then(function () {
                setNewcomment("")
                getAllData()
            })
    }

    const textchange = (e) => {
        setNewcomment(e.target.value);
        e.preventDefault();
    }

    const deletemodal = useCallback((state) => {
        setDelete(state)
    }, []);


    const deletefromdb = useCallback((id) => {
        setCommentid(id)
    }, []);

    if (comments === undefined || comments === null || user[0] === undefined || user[0] === null) {
        return ""
    }


    return (
        <>
            {comments.map((comment => ((comment.replyTo === "0") ?
                (<div key={comment.id} ><CommentCase comment={comment} key={comment.id} id={comment._id} getAllData={getAllData} currentuser={user} comments={comments} deletemodal={deletemodal} deletefromdb={deletefromdb} /></div>)
                : "")))}

            {/* input comment field */}
            <div className="comment-window">
                <div className="avatar">
                    <img alt="avatar" src={user[0].image.png} />
                </div>
                <form onSubmit={postcomment}>
                    <textarea rows="3" cols="10" wrap="hard" placeholder="Add a comment..." onChange={textchange} value={newcomment} />
                    <input type="submit" value="SEND" />
                </form>

            </div>

            {deletemode ? <Modal deletemodal={deletemodal} commentid={commentid} getalldata={getAllData}/> : ""}
        </>
    )
}