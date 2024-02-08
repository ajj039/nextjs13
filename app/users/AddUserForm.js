"use client";

import React,{useEffect} from 'react'
import { Flex } from '@radix-ui/themes'
import { TextField } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/utils/actions';
import toast from 'react-hot-toast';

// import { useFormStatus, useFormState } from 'react-dom';

const Btn = ()=>{
  const {pending} = useFormStatus()
  return (
    <>
    <Button variant="classic" disabled={pending} type='submit'>Add User</Button>
    </>
  )
}

const initialState = {
    message: null,
  };
const AddUserForm = () => {
    const [state, formAction] = useFormState(createUser, initialState);


    useEffect(() => {
      if(state.message === null){
        return 
      }
        toast.success(state?.message)
        // if (state.message === 'error') {
        //   toast.error('there was an error');
        //   return;
        // }
        // if (state.message) {
        //   toast.success('task created');
        // }

        console.log("state message", state.message)
      }, [state]);
// console.log("state message", state.message)
  return (
   <>
   <div className='mb-28'>
<form action={formAction}>
<Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
  <TextField.Input size="3" placeholder="Enter user name" name='name' />
  <TextField.Input size="3" placeholder="Enter user email"  name='email'/>
  <TextField.Input size="3" placeholder="Enter user country" name='country' />
  <Btn/>
  
</Flex>
</form>
</div>
   </>
  )
}

export default AddUserForm