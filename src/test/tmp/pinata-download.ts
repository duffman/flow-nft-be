/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import axios             from "axios";
import { AxiosResponse } from "axios"
import { Global }        from "../../../global";

export class PinataDownload {
	public testAuthentication(): Promise<AxiosResponse<any>> {
		return new Promise((resolve, reject) => {
			axios.get(Global.Pinata.TestAuth, {
					headers: {
						pinata_api_key:        Global.Pinata.KEYS.API_Key,
						pinata_secret_api_key: Global.Pinata.KEYS.API_Secret
					}
				}).then((response: AxiosResponse<any>) => {
					resolve(response);
				}).catch((error: Error) => {
					reject(error)
				});
		});
	}
}
