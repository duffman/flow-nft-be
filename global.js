"use strict";
/**
 * Copyright (c) 2021 Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
// https://developer.okta.com/blog/2019/02/14/modern-token-authentication-in-node-with-express
var Global;
(function (Global) {
    let Pinata;
    (function (Pinata) {
        Pinata.BaseURL = "https://api.pinata.cloud";
        Pinata.TestAuth = "https://api.pinata.cloud/data/testAuthentication";
        Pinata.KEYS = {
            API_Key: "d079b0f4b610d1eb8e9d",
            API_Secret: "51fafbb3d07d740a30e7d0c4c3dd00f368687291462f7e17f4e020b0b8ef0a65",
            JWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlMGU4Y2MzNi1jODVjLTQ0ZDAtYjUzYi0yYmI0YWM1NGJiMjciLCJlbWFpbCI6InBhdHJpa0Bjb2xkbWluZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDA3OWIwZjRiNjEwZDFlYjhlOWQiLCJzY29wZWRLZXlTZWNyZXQiOiI1MWZhZmJiM2QwN2Q3NDBhMzBlN2QwYzRjM2RkMDBmMzY4Njg3MjkxNDYyZjdlMTdmNGUwMjBiMGI4ZWYwYTY1IiwiaWF0IjoxNjIwODUwNzk0fQ.4UW0kGBCYSXcz96z_hDmk_a2z7OSytohOYqBs837TMw"
        };
        Pinata.PINATA_BI_KEY = "d079b0f4b610d1eb8e9d";
        Pinata.API_Key = "d079b0f4b610d1eb8e9d";
        Pinata.API_Secret = "51fafbb3d07d740a30e7d0c4c3dd00f368687291462f7e17f4e020b0b8ef0a65";
        Pinata.JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlMGU4Y2MzNi1jODVjLTQ0ZDAtYjUzYi0yYmI0YWM1NGJiMjciLCJlbWFpbCI6InBhdHJpa0Bjb2xkbWluZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDA3OWIwZjRiNjEwZDFlYjhlOWQiLCJzY29wZWRLZXlTZWNyZXQiOiI1MWZhZmJiM2QwN2Q3NDBhMzBlN2QwYzRjM2RkMDBmMzY4Njg3MjkxNDYyZjdlMTdmNGUwMjBiMGI4ZWYwYTY1IiwiaWF0IjoxNjIwODUwNzk0fQ.4UW0kGBCYSXcz96z_hDmk_a2z7OSytohOYqBs837TMw";
    })(Pinata = Global.Pinata || (Global.Pinata = {}));
})(Global = exports.Global || (exports.Global = {}));
