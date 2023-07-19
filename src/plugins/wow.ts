import WOW from 'wowjs';

export default {
    install(app) {
        const wow = new WOW();
        wow.init();
        app.config.globalProperties.$wow = wow;
    }
}
