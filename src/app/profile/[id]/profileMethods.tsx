'use client'

import { useEffect, useState } from 'react';
import profileMethods from './page';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";



interface ProfileMethodsProps {
  verifySubscription: () => Promise<any>;
  askPermission: (address: string) => Promise<any>;
}

export default function Profile(props: ProfileMethodsProps) {
  const [loading, setLoading] = useState(false);

  const verifySubscription = props.verifySubscription;
  const askPermission = props.askPermission;

  const vapidControl = process.env.NEXT_PUBLIC_VAPIDPUBLICKEYS;
  const url = "http://localhost:3005/";

   

  useEffect(() => {

  }, []);


  return (
    <div>
      <button onClick={() => { askPermission('0xreyeu') }}>Request Notifis Permission</button>
      <ToastContainer/>
    </div>

  );
}
