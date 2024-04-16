import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CompaniesIcon, { AddAluminiIcon, AddCompanyIcon, ConfigurationIcon, EventIcon } from "@/utils/svg-icons"
import { TbUsers } from "react-icons/tb";

const menuItems = [
      {
        title: 'E Commerce Dashboard',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        children: [
          {
            title: 'Orders',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            children: [
                {
                    title: 'Order List',
                    path: '/dashboards/orders/order-list'
                }
            ]
          },
          {
            title: 'Products',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            children: [
                {
                    title: 'Product List',
                    path: '/dashboards/product/product-list'
                },
                {
                    title: 'Add Product',
                    path: '/dashboards/product/add-product'
                }
            ]
          },
          {
            title: 'Category',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            path: '/dashboards/category'
          }
        ]
      },
      {
        title: 'Website Setup',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        children: [
          {
            title: 'Success Stories',
            path: 'website-setup/success-stories'
          },
          {
            title: 'Gallery',
            path: 'website-setup/gallery'
          },
          {
            title: 'Message From VC',
            path: 'website-setup/message-from-vc'
          }
        ]
      },
      {
        title: 'Job Dashboard',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        path: 'jobs-dashboard'
      },
      {
        title: 'Companies',
        icon: <CompaniesIcon />,
        path: 'companies'
      },
      {
        title: "Alumni's",
        icon: <TbUsers fontSize="18px" />,
        path: 'alumni'
      },
      {
        title: 'Job Management',
        icon: <WorkOutlineIcon />,
        path: '/job-management'
      },
      {
        sectionTitle: 'Create & Add'
      },
      {
        title: "Add Alumni",
        icon: <AddAluminiIcon />,
        path: 'add-alumni'
      },
      {
        title: 'Add Company',
        icon: <AddCompanyIcon />,
        path: 'add-company'
      },
      {
        title: 'Events',
        path: 'events',
        icon: <EventIcon />,
      },
      {
        title: 'Configuration',
        icon: <ConfigurationIcon />,
        children: [
          {
            title: 'Country',
            path: '/configuration/country'
          },
          {
            title: 'State',
            path: '/configuration/state'
          },
          {
            title: 'Employment Type',
            path: '/configuration/employement-type'
          },
          {
            title: 'Location',
            path: '/configuration/location'
          },
          {
            title: 'Upload Resume Option',
            path: '/configuration/upload-resume'
          },
          {
            title: 'Application Deadline',
            path: '/configuration/application-deadline'
          },
        ]
      }
    ]
  
  export default menuItems