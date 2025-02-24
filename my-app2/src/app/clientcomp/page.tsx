'use client'
 
import { useActionState } from 'react'
import { createUser } from '@/app/actions'
 
const initialState = {
  message: '',
}

export default function Page() {
    const [state, formAction] = useActionState(createUser, initialState)
 
    console.log("state?.message : " + state?.message);
    return (
      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        {/* ... */}
        <p aria-live="polite">{state?.message}</p>
        <button>Sign up</button>
      </form>
    )
  }