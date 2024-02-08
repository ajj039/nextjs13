"use client"
import React from 'react'
import {useFormStatus } from "react-dom";
import { Button } from '@radix-ui/themes';
import { deleteUser } from '@/utils/actions';
import { Flex } from '@radix-ui/themes';

const DeleteForm = ({id}) => {
    const {pending} = useFormStatus();
  return (
   <>

  <Flex gap="3" justify="start" width="100%">
  <form action={deleteUser}>
    <input name='id' type='hidden' value={id}/>
  <Button disabled={pending} size="1" variant="soft" type='submit'>
   delete
  </Button>
  </form>
</Flex>
   </>
  )
}

export default DeleteForm