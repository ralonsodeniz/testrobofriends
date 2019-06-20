// this is the file where we store the constants with their respective string inside for the type of the redux actions
export const CHANGE_SEARCHFIELD = "CHANGE_SEARCHFIELD";
// we need 3 consts for the request robots since it is a promise, and we have the pending status, while the promise is being processed, the success status, when is done and everything is ok and lastly, the failed when something goes wrong
export const REQUEST_ROBOTS_PENDING = "REQUEST_ROBOTS_PENDING";
export const REQUEST_ROBOTS_SUCCESS = "REQUEST_ROBOTS_SUCCESS";
export const REQUEST_ROBOTS_FAILED = "REQUEST_ROBOTS_FAILED";
// this is more o like standar with all synchronous actions like AJAX calls
