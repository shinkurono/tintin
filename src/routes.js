import contact from './components/contact/contact.vue';
import donate from './components/donate/donate.vue';
import story from './components/story/story.vue';
import en from './components/story/enLang.vue';
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
    {
        // Reference: https://www.thetopsites.net/article/52214973.shtml
        path: '/en', component: en,
        // eslint-disable-next-line no-unused-vars
        beforeEnter: (to, from, next) => {
            localStorage.setItem("language", "en");
            window.location.replace("/story");
        }
    },
];
