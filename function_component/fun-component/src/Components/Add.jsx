import React , { useState } from "react";
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom' ;
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Add() {
    const [title, setTitle] = useState('');
    const [discripton, setdiscripton] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks/', { title, discripton }).then(()=>{
            
        }
        )
    }

}
