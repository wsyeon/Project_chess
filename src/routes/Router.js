import React, { Component } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ChessBoard from '../chessboard/ChessBoard';
import Community from '../community/Community';
import Login from '../signup/login/Login';
import SignUp from '../signup/login/SignUp';

const Router = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Router path='/login' element={<Login />} />
                <Router path='/signup' element={<SignUp />} />
                <Router path='/community' element={<Community />} />
                <Router path='/chessboard' element={<ChessBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;