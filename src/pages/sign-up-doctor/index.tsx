"use client"

import React, { useEffect, useState } from 'react';
import { api } from '~/utils/api';

const index = () => {
    const { mutate } = api.doctor.createDoctor.useMutation({});

    return <button onClick={() => mutate({
        name: "test", 
        address: "test", 
        email: "mohitsankhlatest@gmail.com",
        specialites: ["lauda lassan"],
        studyDetails: "sldkjfd"
    })}>click me</button>
}

export default index;