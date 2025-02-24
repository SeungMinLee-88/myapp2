'use server'
 
import { redirect } from 'next/navigation'
 
export async function createUser(prevState: any, formData: FormData) {
  console.log("call createUser");
  /* const res = await fetch('https://...')
  const json = await res.json() */
 
  const res = {"ok":"false"};
  
  console.log("res.ok : " + res.ok);
  /* if (!res.ok) { */
  if (res.ok == "false") {
    return { message: 'Please enter a valid email' }
  }
  else if(res.ok) {
    return { message: 'Email chk ok' }
  }
  //redirect('/dashboard')
}