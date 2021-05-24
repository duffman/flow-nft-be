"use strict";
/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinataTestAuth = void 0;
const pinata_download_1 = require("../tmp/pinata-download");
class PinataTestAuth {
    constructor() {
        new pinata_download_1.PinataDownload().testAuthentication().then(res => {
            console.log("PinataDownload().testAuthentication() ::", res);
        }).catch(err => {
            console.error("PinataDownload().testAuthentication() ::", err);
        });
    }
}
exports.PinataTestAuth = PinataTestAuth;
new PinataTestAuth();
