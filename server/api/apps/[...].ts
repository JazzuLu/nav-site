import { createRouter, defineEventHandler, useBase } from 'h3';
import data from "./data.json";

const router = createRouter();
router.get('/getAppsData', defineEventHandler(event => data));

export default useBase('/api/apps', router.handler);