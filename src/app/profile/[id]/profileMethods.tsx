'use client'

import { useEffect, useState } from 'react';
import profileMethods from './page';

interface ProfileMethodsProps {
  verifySubscription: () => Promise<any>;
  subscribe: () => Promise<any>;
  askPermission: () => Promise<any>;
}

export default function Profile(props: ProfileMethodsProps) {

  const verifySubscription = props.verifySubscription;
  const subscribe = props.subscribe;
  const askPermission = props.askPermission;



  useEffect(() => {

  }, []);


  return (
    <div>
      <button onClick={askPermission}>Request Notifis Permission</button>
      {/* <button onClick={subscribe}>Subscribe</button> */}
    </div>
  );
}
