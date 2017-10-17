/** ====================================================================================================================
 // Polyfills - Angular polyfills for older browsers
 // ================================================================================================================= */

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone'; // it is important to load Zone.js early, immediately after the other ES6 and metadata shims

if (process.env.ENV === 'production') {
    // Production
}
else {
    // Development
    Error.stackTraceLimit = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}