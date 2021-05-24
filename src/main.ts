/**
 * Copyright (c) 2020 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import "reflect-metadata";
import { injectable } from "tsyringe";
import { container }  from "tsyringe";
import { singleton }  from "tsyringe";

@singleton()
class Main {
	constructor() {}
}

container.resolve(Main);
