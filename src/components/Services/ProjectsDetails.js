import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Details from '../Details/Details';

const ProjectsDetails = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    return (
        <div className='mt-5 pt-5'>
            <h2>Welcome to detail: {serviceId}</h2>
            <div className='text-center'>
                <h1>Ontor’s Manufacturer House</h1>

                <p>Technologies:React JS,Node JS,Tailwind CSS,Daisy UI.</p>
                Multi-authentication system.
                Payment Method added.
                Create Admin.
                Use Nested Route.
                Admin Can Add or Delete a   Product from the inventory.
                If normal user confirm to buy any product,it will take the user to the payment page.
                Normal user can not see the admin’s work.
                Google popup login system.
                Login,Registration,Email verification,Reset password system added.
                <a href="https://assignment-12-26a9a.web.app/">Ontors manufacturer </a>
                <a href="https://github.com/Ariful-Srity/assignment12"> <h5>GitHub Client</h5></a>
                <a href="https://github.com/Ariful-Srity/assignment12-server"> <h5>GitHub Server</h5></a>


                <h1>Ontor’s Bike Haven:</h1>
                Technologies: React JS,Node JS, Express JS,Mongo DB,Firebase,React BootStrap,React Router Hooks.
                Login,Register,Email verification,Reset password system added.
                User can see user name , Log out,Manage Items,My Items,Add Items routes, after login.
                Review system implemented.
                Use Nested Route.
                After login User will see some extra pages.
                Google popup login system.
                Deploy in firebase
                <a href="https://assignment10-2b76d.web.app/">Ontors Bike Haven </a>
                <a href="https://github.com/Ariful-Srity/warehouse"> <h5>GitHub Client</h5></a>
                <a href="https://github.com/Ariful-Srity/warehouse-server"> <h5>GitHub Server</h5></a>

                <h1> Dr.MST Sumaiya Akter Alo:</h1>
                Technologies:React js,CSS,React BootStrap,React Router,Firebase.
                This is a Personal Website For a Doctor.
                Login,Register,Email verification,Reset password system added.
                Google popup login system.
                Use Firebase Authentication.
                After Login User will see Logout Button At the  navbar.
                Use Require Auth.
                Use A Dynamic Banner.
                Deploy in Firebase.
                <a href="https://personal-website-9f18b.web.app/">Doctors Personal Website </a>
                <a href="https://github.com/Ariful-Srity/independent-service"> <h5>GitHub Client</h5></a>
            </div>



        </div>
    );
};

export default ProjectsDetails;