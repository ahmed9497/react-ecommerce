import React, { useContext, useState, useEffect, createContext } from 'react';

// reactstrap components




export const AppLoader = createContext();


const Loader = (props) => {



    const [open, setOpen] = React.useState(false);
    const loaderOpen = () => {
        setOpen(true);
    };
    const loaderClose = () => {
        setOpen(false);
    };



    return (



        <AppLoader.Provider value={[loaderOpen, loaderClose]}>

            {props.children}

            {open ?
                <div
                    className="loader"
                // contentClassName="bg-gradient-danger"

                // toggle={() => setOpen(false)}
                >

                    <div className="d-flex justify-content-center">
                        <div className="spinner-border  text-light" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>


                </div>
                : null
                }


        </AppLoader.Provider>


    );


}
export default Loader;