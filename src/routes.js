import contact from './components/contact/contact.vue';
import donate from './components/donate/donate.vue';
import story from './components/story/story.vue';
import paynow from './components/donate/paynow.vue';
import favepay from './components/donate/favepay.vue';
import ezlink from './components/donate/ezlink.vue';
import wechat from './components/donate/wechat.vue';

export const routes = [
    { path: "/", redirect: "/story" },
    { path: '/contact', component: contact },
    { path: '/donate', component: donate },
    { path: '/story', component: story },
    { path: '/paynow', component: paynow },
    { path: '/favepay', component: favepay },
    { path: '/ezlink', component: ezlink },
    { path: '/wechat', component: wechat },
];