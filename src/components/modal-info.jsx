import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import review from '../assets/Icons/Reviews.svg'
import axios from 'axios';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    color: '#1B1D1F',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalInfo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [coffee, setCoffee] = useState([])

    const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

    axios.get(url)
        .then((resp) => {
            setCoffee(resp.data)
        })

    return (
        <div>
        </div>
    );
}

export default ModalInfo;