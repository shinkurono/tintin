import contact from './components/contact/contact.vue';
import donate from './components/donate/donate.vue';
import story from './components/story/story.vue';
import paynow from './components/donate/paynow.vue';
import grabpay from './components/donate/grabpay.vue';
import favepay from './components/donate/favepay.vue';

export const routes = [
    { path: '/contact', component: contact },
    { path: '/donate', component: donate },
    { path: '/story', component: story },
    { path:'/paynow', component: paynow },
    { path:'/grabpay', component: grabpay },
    { path:'/favepay', component: favepay },
];