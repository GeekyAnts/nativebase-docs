"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = void 0;
function isPromise(obj) {
    return !!obj && (typeof obj === "object" || typeof obj === "function")
        && typeof obj.then === "function";
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map