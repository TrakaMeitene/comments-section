import React, { useEffect, useState } from "react";
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"
const axios = require('axios').default;

export default function CommentCase({ comment, id, getAllData, currentuser, comments, deletemodal, deletefromdb }) {

    const [replymode, setReply] = useState(false);
    const [replyvalue, setReplyvalue] = useState();
    const [editmode, setEditmode] = useState(false)
    const [editedvalue, setEditedvalue] = useState();

    let replies = []

    useEffect(() => {
        if (comment === undefined || comment === null) {
            return ""
        };

    }, [comment])

    for(let i = 0; i < comments.length; i++){
        if(comments[i].replyTo !== "0"){
            replies.push(comments[i])
        }
    }

    var date = new Date();

    var commentDate = new Date(comment.createdAt);

    const years = date.getFullYear() - commentDate.getFullYear();
    const months = date.getMonth() - commentDate.getMonth();
    const days = Math.abs((new Date(comment.createdAt).getDate()) - (new Date().getDate()))
    let hours = Math.abs((new Date(comment.createdAt).getHours()) - (new Date().getHours()))
    let minutes = date.getMinutes() - commentDate.getMinutes();
    const seconds = date.getSeconds() - commentDate.getSeconds()

    let created = "";
    let week = 7

    if (years > 0 && years < 2) {
        created += years + "year ago"
    } else if (years >= 2) {
        created = years + " years ago"
    } else if (months > 0 && months > 1) {
        created = months + " months ago"
    } else if (months === 1) {
        created = months + " month ago"
    } else if (days > 0 && days > 1 && Math.floor(days) < 7) {
        created = Math.floor(days) + " days ago"
    } else if (Math.floor(days) === 1) {
        created = days + " day ago"
    } else if (Math.floor(days / week) === 1) {
        created = "1 week ago"
    } else if (Math.floor(days / week) > 1) {
        created = Math.floor(days / week) + " weeks ago"
    } else if (minutes > 0 && hours === 1) {
        created = "1 hour ago"
    } else if (hours > 1 && hours < 12) {
        created = hours + " hours ago"
    } else if (hours === 1 && minutes < 0) {
        minutes = (date.getMinutes() + 60) - commentDate.getMinutes()
        created = minutes + " minutes ago"
    } else if (minutes > 0 && minutes > 1) {
        created = minutes + " minutes ago"
    } else if (minutes === 1) {
        created = minutes + " minute ago"
    } else if (seconds > 0 && seconds > 1) {
        created = seconds + " seconds ago"
    } else if (seconds === 1) {
        created = seconds + " second ago"
    } else if (seconds === 0) {
        created = "just now"
    }

    const vote = (e) => {
        const type = e.target.getAttribute('value')
console.log(comment)
        axios.put('https://nodeprojectreact.herokuapp.com/score', {
            id: id,
            comment: comment,
            type: type
        })
            .catch(function (error) {
                alert(error);
            })
            .then(function () {
                getAllData();
            });
    }

    const replycomment = (e) => {
        setReply(true)
    }

    const onreplychange = (e) => {
        setReplyvalue(e.target.value)
        e.preventDefault()
    }

    //add new reply
    const replytocomment = (e) => {
        e.preventDefault();
        const arrayofid = []
        // eslint-disable-next-line
        const lastitem = comments.map(comment => { arrayofid.push(comment.id) })
        const sortedid = arrayofid.sort((a, b) => a - b)

        const newcomment = {
            id: sortedid[sortedid.length - 1] + 1,
            content: replyvalue,
            createdAt: new Date(),
            score: 0,
            user: currentuser[0],
            replyTo: comment._id,
            type: "reply"
        }

        axios.post("https://nodeprojectreact.herokuapp.com/addcomment", { newcomment })
            .catch((error) => {
                alert('Error:', error);
            })
            .then(function () {
                setReply(false)
                setReplyvalue("")
                getAllData()
            })
    }

    const editcomment = () => {
        setEditmode(true)
    }

    const changecomment = (e) => {
        e.preventDefault();
        setEditedvalue(e.target.value)
    }
//edit comment
    const putcomment = (e) => {
        e.preventDefault();

        const params = {
            _id: id,
            id: comment.id,
            content: editedvalue,
            createdAt: comment.createdAt,
            score: comment.score,
            user: comment.user,
            replyTo: comment.replyTo
        }

        axios.put('https://nodeprojectreact.herokuapp.com/edit', { params })
            .catch(function (error) {
                alert(error);
            })
            .then(function () {
                getAllData();
                setEditmode(false)
            });
    }


    const todelete = () => {
        deletemodal(true);
        deletefromdb(id);
    }

    const image = comment.user.image.png;
    const current = currentuser[0].username
   // const currentuserimage = currentuser[0].image.png

    var edit = (<div className="comment-window">
        <div className="avatar">
            <img alt="avatar" src={`${process.env.PUBLIC_URL}/assets/${currentuser[0].image.png}`} />
        </div>
        <form onSubmit={replytocomment}>
            <textarea rows="3" cols="12" wrap="hard" defaultValue={"@" + comment.user.username + " "} onChange={onreplychange} />
            <input type="submit" value="REPLY" />
        </form>

    </div>
    )
    const string = comment.content
    const namereply = string.split(" ")

    const content = ((string.split('')[0] === "@") ? <p><b>{namereply[0] + " "}</b>{string.substring(string.indexOf(' ') + 1)}</p> : <p>{comment.content}</p>) // bold the assignment of comment author
    
    let reprep = [] //replies of relply comments
    for (let i = 0; i < replies.length; i++) {
        for(let x= i+1; x<comments.length; x++){
            if(replies[i]._id === comments[x].replyTo){
            reprep.push(comments[x])
            }
        }
    }

    return (
        <>
            <div className="comment-window">
                <div className="vote-count">
                  <img alt='plus' src={plus}  value={"plus"} />
                    <p>{comment.score}</p>
                    <img alt="minus" src={minus} onClick={vote} value={"minus"} />
                </div>
                <div className="comment-column">
                    <div className="comment-header">
                        <img alt="avatar" src={image} />
                        <p>{comment.user.username}</p><span className={comment.user.username === current ? "you" : "nodisplay"}>you</span>
                        <p className="cooment-date">{created}</p>
                        {comment.user.username === current ? <div className="delete"><p onClick={todelete}>Delete</p><p onClick={editcomment} >Edit</p></div> : <p className="reply" onClick={replycomment}> Reply</p>}
                    </div>
                    <div className="content">
                        {editmode ? <form className="update" onSubmit={putcomment}><textarea className="editable" rows="2" cols="10" wrap="hard" onChange={changecomment} defaultValue={comment.content} /><input type="submit" value="UPDATE" /></form> : content}
                    </div>
                </div>

            </div>
            {replymode ? edit : ""}

            {replies.map((commentreply => (comment._id === commentreply.replyTo)?
                (<div key={commentreply.id} className={reprep.includes(commentreply) ? "jauna" : "repliedTo"}><CommentCase comment={commentreply} key={commentreply.id} id={commentreply._id} getAllData={getAllData} currentuser={currentuser} comments={comments} deletemodal={deletemodal} deletefromdb={deletefromdb}/></div>)
                : ""))} 
        </>
    )
}