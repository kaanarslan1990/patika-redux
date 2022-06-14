import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { contactSelectors } from '../../redux/contactSlice';
import EditForm from './EditForm';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const {id} = useParams();
  const navigate = useNavigate();


  const contact = useSelector((state) => contactSelectors.selectById(state, id));

  if (!contact) {
    return navigate("/")
  }

  
  return (
    <div>
    <h1>Edit</h1>
    <EditForm contact= {contact}/>

    </div>
  )
}

export default Edit