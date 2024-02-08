
import React from 'react'
import prisma from '@/utils/db'
import { Grid } from '@radix-ui/themes'
import { Card } from '@radix-ui/themes'
import { Flex } from '@radix-ui/themes'
import { Text } from '@radix-ui/themes'
import { Box } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import { TextField } from '@radix-ui/themes'
import AddUserForm from './AddUserForm'
import { deleteUser } from '@/utils/actions'
import DeleteForm from './DeleteForm'

const UsersPage = async() => {
    const users = await prisma.users.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })

    // console.log("users--->", users)
  return (
    <div className='my-10 mx-20 w-full'>

<AddUserForm/>

        <Grid columns="3" gap="3" width="auto">
            {
                users?.map((item)=>{
                    return (
<Card size="2" style={{ maxWidth: 240 }}>
    <Box>
        <Text as='div' size='10'>
            {item?.name}
            </Text>      
    </Box>
  <Text as="p" size="3">
   {item?.email}
  </Text>
  <Box className='mt-4'>
 <DeleteForm id={item?.id}/>
  </Box>
</Card>
                    )
                })
            }
</Grid>
         
    </div>
  )
}

export default UsersPage