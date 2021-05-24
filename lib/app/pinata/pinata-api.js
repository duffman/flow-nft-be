"use strict";
/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinataAPI = void 0;
const global_1 = require("../../../global");
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(global_1.Global.Pinata.KEYS.API_Key, global_1.Global.Pinata.API_Secret);
class PinataAPI {
    performTestAuth() {
        return new Promise((resolve, reject) => {
            pinata.testAuthentication().then((result) => {
                console.log(result);
                resolve(result);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    }
}
exports.PinataAPI = PinataAPI;
const api = new PinataAPI();
api.performTestAuth();
