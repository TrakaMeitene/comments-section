import React from "react";
const axios = require('axios').default;

export default function Modal({deletemodal, commentid, getalldata}) {

    const cancel =()=>{
deletemodal(false)
    }

    const deletfrom = ()=>{
        // eslint-disable-next-line 
        axios.delete("https://nodeprojectreact.herokuapp.com/delete/${commentid}", {
              data: {
                  id: commentid}
              })
        .then(response => console.log(response.data))
        .catch((error) => {
            console.error('Error:', error);
        })
        .then(function () {
            deletemodal(false)
            getalldata()
        })
    }
    return (
        <div className="mask">
            <div className="modal">
                <h3>Delete comment</h3>
                <p>Are you sure you want to delete this
                    comment? This will remove the comment
                    and can't be undone</p>

                    <span><button className="cancel" onClick={cancel}>NO,CANCEL</button><button className="accept" onClick={deletfrom}>YES, DELETE</button></span>
            </div>
        </div>
    )
}