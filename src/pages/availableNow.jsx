/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card-Styles.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function AvailableNow() {

    const [coffee, setCoffee] = useState([])

    const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setCoffee(resp.data)
            })
    }, [setCoffee])

    return (
        <div className='encabezado'>
            <h1>Available</h1>

            <div className='tittle-content'>
                <h1 >Our Collection</h1>
                <h4 className='text-content'>Introducing our Coffee Collection, a selection of unique coffees <br />
                    from different roast types and origins expertly roasted in small <br />
                    batches and shipped fresh weekly.
                </h4>
                <NavLink to="/">
                    <Button className='style-button'> All Products </Button>
                </NavLink>

                <NavLink to="/availableNow">
                    <Button className='style-button'> Available Now </Button>
                </NavLink>
            </div>
            <div className='principal-coffee'>
                {coffee.map((coffees) =>
                    <div key={coffees.id}>
                        <Card sx={{ maxWidth: 345 }} className='coffee-cards'>
                            <div className='controller-popular-div'>
                                <div>
                                    <CardMedia
                                        className='img-content'
                                        image={coffees.image}
                                        title={coffees.name}
                                    />
                                </div>
                                <div>
                                    {coffees.popular && (
                                        <div className='controller-popular'> Popular </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <CardContent>
                                    <Typography gutterBottom className='controller-content'>
                                        <div className='controller-name-coffee'> {coffees.name} </div>
                                        <div className='controller-price'> {coffees.price} </div>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='controller-star' width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
                                        <div className='controller-rating'>
                                            <div> {coffees.rating} </div>
                                            <div className='controller-votes'> ({coffees.votes} votes) </div>

                                            <div className='controller-available'>
                                                {coffees.available === false && (
                                                    <div> Sold out </div>
                                                )}
                                            </div>
                                        </div>

                                        {coffees.available === false ? "class-hidden" : "class-visible" }
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AvailableNow; */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card-Styles.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import bgcafe from '../assets/Images/bg-cafe.jpg'
import star from '../assets/Icons/Star.svg'
import star_fill from '../assets/Icons/Star_fill.svg'
import vector from '../assets/Icons/Vector.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import review from '../assets/Icons/preReview.svg'

const style = {
    position: 'absolute',
    top: '50%',
    color: '#111315',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 5,
    p: 4,
};

function AvailableNow() {
    const [open, setOpen] = useState(false);
    const [coffee, setCoffee] = useState([]);
    const [selectedCoffees, setSelectedCoffees] = useState(null);

    const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setCoffee(resp.data);
            });
    }, [setCoffee]);

    const handleOpen = (coffees) => {
        setSelectedCoffees(coffees);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCoffees(null);
    };


    return (
        <div>
            <header>
                <img src={bgcafe} alt="cafe" className='principal-image' height={350} />
            </header>

            <div className='encabezado'>

                <div>
                    <img src={vector} alt="Vector" className='vector' />
                </div>
                <div className='tittle-content'>
                    <h1>Our Collection</h1>
                    <h4 className='text-content'>
                        Introducing our Coffee Collection, a selection of unique coffees <br />
                        from different roast types and origins expertly roasted in small
                        batches and shipped fresh weekly.
                    </h4>
                    <NavLink to="/">
                        <Button className='style-button'>All Products</Button>
                    </NavLink>

                    <NavLink to="/availableNow">
                        <Button className='style-button'>Available Now</Button>
                    </NavLink>
                </div>
                <div className='principal-coffee'>
                    {coffee.map((coffees) =>
                        coffees.available ? (  // Este es el operador condicional que revisa si "available" es true
                            <div key={coffees.id}>
                                <Card sx={{ maxWidth: 345 }} className='coffee-cards'>
                                    <div className='controller-popular-div'>
                                        <CardMedia
                                            className='img-content'
                                            image={coffees.image}
                                            title={coffees.name}
                                        />
                                        {coffees.popular && (
                                            <div className='controller-popular'>Popular</div>
                                        )}
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom className='controller-content'>
                                            <div className='controller-name-coffee'>{coffees.name}</div>
                                            <div className='controller-price'>{coffees.price}</div>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {coffees.rating ? <img src={star_fill} alt="Star_fill" className='controller-star' /> : <img src={star} alt="Star" className='controller-star' />}

                                            <div className='controller-rating'>
                                                <div style={{ color: coffees?.rating ? '#FEF7EE' : '#6F757C' }}>
                                                    {coffees?.rating ? coffees.rating : 'No rating'}
                                                </div>
                                                <div className='controller-votes'>{coffees?.votes ? <div>({coffees.votes} votes)</div> : null}</div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <div>
                                            <Button size="small" onClick={() => handleOpen(coffees)} className='bottom-modal'> <img src={review} alt="PreReview" height={30} width={30} /> </Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </div>
                        ) : null // Si "available" es false, no se renderiza nada (null)
                    )}
                </div>
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style} className='modal-open'>
                                {selectedCoffees && (
                                    <>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            <div className='modal-controller'>
                                                <img className='img-modal' src={selectedCoffees.image} alt={coffee.name} />
                                                <br />
                                                <b> Name: </b> {selectedCoffees.name}
                                                <br />
                                                <b> Rating: </b> {selectedCoffees?.rating ? selectedCoffees.rating : 'No rating'}
                                                <br />
                                                <b> Price: </b> {selectedCoffees.price}
                                            </div>
                                        </Typography>
                                    </>
                                )}
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AvailableNow;
