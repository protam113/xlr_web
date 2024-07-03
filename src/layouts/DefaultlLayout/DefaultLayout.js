import React from 'react';
import Footer from '../../components/footer';
import Nav from '../../components/nav';

const DefaultLayout = ({ children }) => {
  return (
    <>
        <div>
            <div>
                <Nav/>
                    {children}
                
            </div>
        </div>
        <Footer />
    </>
  );
};

export default DefaultLayout;
