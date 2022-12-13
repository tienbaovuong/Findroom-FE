import { Snackbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../views/Footer'
import { NavBar } from '../views/NavBar'
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux'
import { hiddenMessage } from '../slices/message'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Layout = () => {
    const open = useSelector((state) => state.message.isShow);
    const message = useSelector((state) => state.message.message);
    const severity = useSelector((state) => state.message.severity);
    const dispatch = useDispatch();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(hiddenMessage(false));
    };

    return (
        <React.Fragment>
            <NavBar />
            <div className="container mt-3 pl-5 pr-5">
                <Outlet />
            </div>
            <Footer />
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    )
}
export default Layout