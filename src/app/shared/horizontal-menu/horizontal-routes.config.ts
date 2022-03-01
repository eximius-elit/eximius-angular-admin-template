import { RouteInfo } from './horizontal.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', class: 'has-arrow', icon: 'bx bx-home-circle', submenu: [
            { path: '/dashboard/default', title: 'Default', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/dashboard/alternate', title: 'Alternate', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
        ]
    },
    {
        path: '', title: 'Application', class: 'has-arrow', icon: 'bx bx-category',
        submenu: [
            { path: '/application/email-app', title: 'Email', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/application/chat-box', title: 'Chat Box', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/application/file-manager', title: 'File Manager', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/application/contatcs', title: 'Contatcs', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/application/invoice', title: 'Invoice', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/application/calendar', title: 'Calendar', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
        ]
    },
    {
        path: '', title: 'Charts', class: 'has-arrow', icon: 'bx bx-line-chart',
        submenu: [
            { path: '/charts/apex-chart', title: 'Apex Charts', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/charts/chartjs', title: 'ChartJs', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/charts/highcharts', title: 'Highcharts', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
        ]
    },
    {
        path: '', title: 'Components', class: 'has-arrow', icon: 'bx bx-bookmark-heart',
        submenu: [
            { path: '/components/alerts', title: 'Alerts', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/badge', title: 'Badge', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/buttons', title: 'Buttons', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/cards', title: 'Cards', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/carousel', title: 'Carousel', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/acordians', title: 'Accordion', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/list-groups', title: 'List Groups', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/media-objects', title: 'Media Objects', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/modals', title: 'Modals', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/navs', title: 'Navs', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/navbar', title: 'Navbar', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/pagination', title: 'Pagination', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/progress-bar', title: 'Progress Bars', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/spinners', title: 'Spinners', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/components/avtars-chips', title: 'Avatrs & Chips', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
        ]
    },
    
    {
        path: '', title: 'Authentication', class: 'has-arrow', icon: 'bx bx-lock',
        submenu: [
            
            { path: '/auth/sign-in', title: 'Sign In', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/sign-up', title: 'Sign Up', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/signin-with-header-footer', title: 'SignIn With Header Footer', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/signup-with-header-footer', title: 'SignUp With Header Footer', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/forgot-password', title: 'Forgot Password', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/reset-password', title: 'Reset Password', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/auth/lock-screen', title: 'Lock Screen', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            
        ]
    },

    {
        path: '', title: 'Form', class: 'has-arrow', icon: 'bx bx-message-square-edit',
        submenu: [
            { path: '/form/form-elements', title: 'Form Elements', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/input-groups', title: 'Input Groups', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/form-layouts', title: 'Forms Layouts', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/form-validation', title: 'Form Validation', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/form-wizard', title: 'Form Wizard', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/text-editor', title: 'Text Editor', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/file-upload', title: 'File Upload', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
            { path: '/form/select2', title: 'Select2', class: '', icon: 'bx bx-right-arrow-alt', submenu: [] },
           ]
    },
   
    { path: '/timeline', title: 'Timeline', class: '', icon: 'bx bx-video-recording', submenu: []},
    
    
];