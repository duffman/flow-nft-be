"use strict";
/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinataDownload = void 0;
const axios_1 = __importDefault(require("axios"));
const global_1 = require("../../../global");
class PinataDownload {
    testAuthentication() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(global_1.Global.Pinata.TestAuth, {
                headers: {
                    pinata_api_key: global_1.Global.Pinata.KEYS.API_Key,
                    pinata_secret_api_key: global_1.Global.Pinata.KEYS.API_Secret
                }
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.PinataDownload = PinataDownload;
