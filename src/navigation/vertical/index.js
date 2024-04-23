import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CompaniesIcon, { AccessoriesIcon, AddAluminiIcon, AddCompanyIcon, AlumniStoreIcon, ApparelIcon, BooksIcon, ConfigurationIcon, EventIcon, SportsIcon, TechAccessoriesIcon } from "@/utils/svg-icons"
import { TbUsers } from "react-icons/tb";

const menuItems = [
      {
        title: 'Dashboard',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        path: 'company-dashboard'
      },
      {
        title: 'Job Listing',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        path: 'job-listing'
      },
      {
        title: "Shortlisted Alumni's",
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        path: 'shortlisted-alumni'
      },
      {
        title: 'E Commerce Dashboard',
        icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
        children: [
          {
            title: 'Dashboard',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            path: 'dashboards/ecommerce-dashboard'
          },
          {
            title: 'Orders',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            children: [
                {
                    title: 'Order List',
                    path: 'dashboards/orders'
                }
            ]
          },
          {
            title: 'Products',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            children: [
                {
                    title: 'Product List',
                    path: 'dashboards/products'
                },
                {
                    title: 'Add Product',
                    path: 'dashboards/add-products'
                }
            ]
          },
          {
            title: 'Category',
            icon: <RadioButtonUncheckedIcon sx={{fontSize: '10px'}} />,
            path: 'dashboards/category'
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
        path: 'job-management'
      },
      {
        sectionTitle: 'Create & Add'
      },
      {
        title: "Post a Job",
        icon: <AddAluminiIcon />,
        path: 'post-a-job'
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
        title: 'Alumni Store',
        icon: <AlumniStoreIcon color="#00318B" />,
        children: [
          {
            sectionTitle: "Categories"
          },
          {
            title: 'Apparel',
            icon: <ApparelIcon color="#6F6B7D" />,
            path: 'alumni-store/apparel'
          },
          {
            title: 'Accessories',
            icon: <AccessoriesIcon color="#6F6B7D" />,
            path: 'alumni-store/accessories'
          },
          {
            title: 'Books & Media',
            icon: <BooksIcon color="#6F6B7D" />,
            path: 'alumni-store/books-and-media'
          },
          {
            title: 'Technology Accessories',
            icon: <TechAccessoriesIcon color="#6F6B7D" />,
            path: 'alumni-store/technology-accessories'
          },
          {
            title: 'Sporting Goods',
            icon: <SportsIcon color="#6F6B7D" />,
            path: 'alumni-store/sporting-goods'
          }
        ]
      },
      {
        title: 'Configuration',
        icon: <ConfigurationIcon />,
        children: [
          {
            title: 'Country',
            path: 'configuration/country'
          },
          {
            title: 'State',
            path: 'configuration/state'
          },
          {
            title: 'Employment Type',
            path: 'configuration/employment-type'
          },
          {
            title: 'Location',
            path: 'configuration/location'
          },
          {
            title: 'Upload Resume Option',
            path: 'configuration/upload-resume-option'
          },
          {
            title: 'Application Deadline',
            path: 'configuration/application-deadline'
          },
        ]
      }
    ]
  
  export default menuItems