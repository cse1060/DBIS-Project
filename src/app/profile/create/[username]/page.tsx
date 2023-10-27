"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

export default function CreateProfile({ params }: any) {

    const router = useRouter();

    const { username } = useParams();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ username: username, firstName: "", lastName: "", phone: "" })

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    async function submitForm() {
        console.log(form);
        const data = await axios.post("/api/users/create_profile", form);
        if (data.data.success === true) {
            router.push(`/profile/${username}`);
        }
    }
    return (
        <div >
            <h1>{username}</h1>
            <label htmlFor="first name">First Name</label>
            <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            <label htmlFor="last name">Last Name</label>
            <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            <label htmlFor="phone">Phone No</label>
            <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <hr />
            <button onClick={submitForm}>Create Profile</button>
        </div>
    )
}
