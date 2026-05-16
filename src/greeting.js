import { mount } from 'svelte';
import GreetingApp from './GreetingApp.svelte';

const app = mount(GreetingApp, {
    target: document.getElementById('app'),
});

export default app;
