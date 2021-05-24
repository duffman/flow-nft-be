/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { PinataDownload } from "../tmp/pinata-download";

export class PinataTestAuth {
	constructor() {
		new PinataDownload().testAuthentication().then(res => {
			console.log("PinataDownload().testAuthentication() ::", res);
		}).catch(err => {
			console.error("PinataDownload().testAuthentication() ::", err);
		})
	}
}

new PinataTestAuth();
