import React from 'react';
import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>페이지를 찾을수 없습니다.</p>
        </div>
    );
};

export default ErrorPage;