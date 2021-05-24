/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { AxiosResponse } from "axios"
import { Global } from "../../../global";

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(Global.Pinata.KEYS.API_Key, Global.Pinata.API_Secret);

export class PinataAPI {
	public performTestAuth(): Promise<any> {
		return new Promise((resolve, reject) => {
			pinata.testAuthentication().then((result: AxiosResponse<any>) => {
				console.log(result);
				resolve(result);
			}).catch((err: any) => {
				console.log(err);
				reject(err);
			});
		});
	}
}

const api = new PinataAPI();
api.performTestAuth();
