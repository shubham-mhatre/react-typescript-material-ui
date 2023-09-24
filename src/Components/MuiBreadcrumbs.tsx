import { Breadcrumbs,Link,Typography,Box } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>

      <p>Separator props as - hypen</p>
      <Breadcrumbs separator='-'>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>

      <p>Separator props as icon</p>
      <Breadcrumbs separator={<NavigateNextIcon />}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>

      <p>Specify maxitem as 2</p>
      <Breadcrumbs separator={<NavigateNextIcon />} maxItems={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>


      <p>item after collaps after elipces</p>
      <Breadcrumbs separator={<NavigateNextIcon />} maxItems={2} itemsAfterCollapse={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>

      <p>item before collaps after elipces</p>
      <Breadcrumbs separator={<NavigateNextIcon />} maxItems={2} itemsBeforeCollapse={2}>
        <Link href="#" underline='hover'>Home</Link>
        <Link href="#" underline='hover'>Catelog</Link>
        <Link href="#" underline='hover'>Accessories</Link>
        <Typography color='secondary'>Shoe</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
