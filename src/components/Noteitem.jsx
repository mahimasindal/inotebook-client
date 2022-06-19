import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext"
import {Link} from "react-router-dom";

const Noteitem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote} = context;

  const onDelete = async(e,noteid)=>{
    e.preventDefault();
    //console.log("note id in deleteeee===",noteid)
    const resCode = await deleteNote(note._id)
    //console.log("resCode=",resCode)
    if(resCode===200){
      props.showAlert("Note deleted successfully","success")
    }
    else{
      props.showAlert("Some error ocurred while deleting note", "danger");

    }
    
  }
  const { note } = props;
  return (
    <div className="note-item">
      <Link to={`/note/${note._id}`}>
     <div className="note-item-inner">
          <h4>{note.title.slice(0,30)}</h4>
          <p className="card-text">{note.description.slice(0,80)}</p>
          <i className="fa-solid fa-trash-can little-icons" onClick={(e) => onDelete(e,note._id)}></i>
          {/*<i className="fa-solid fa-pen-to-square little-icons" style={{"left":"40px"}}></i>*/}
      </div>
      
      </Link>
    </div>

    
  );
};

export default Noteitem;
