import React from 'react';
import Navbar from './components/Navbar';
import ItemsList from './components/ItemsList';
import Routes from './components/Routes';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <ItemsList />
            <Routes />
        </>
    );
};

export default App;