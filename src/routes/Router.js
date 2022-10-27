import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChessBoard from '../chessboard/ChessBoard';
import Community from '../community/Community';
import Login from '../signup/login/Login';
import SignUp from '../signup/login/SignUp';

const Router = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/community' element={<Community />} />
                <Route path='/chessboard' element={<ChessBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;