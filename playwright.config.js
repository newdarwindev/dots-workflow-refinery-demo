import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',workers:1,retries:0,use:{baseURL:'http://127.0.0.1:4173',screenshot:'only-on-failure',video:'off'},webServer:{command:'npm run dev -- --host 127.0.0.1 --port 4173',url:'http://127.0.0.1:4173',reuseExistingServer:false,timeout:30000}});
