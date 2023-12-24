/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UsersPostRequest
 */
export interface UsersPostRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersPostRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPostRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPostRequest
     */
    password: string;
}

/**
 * Check if a given object implements the UsersPostRequest interface.
 */
export function instanceOfUsersPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function UsersPostRequestFromJSON(json: any): UsersPostRequest {
    return UsersPostRequestFromJSONTyped(json, false);
}

export function UsersPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'username': json['username'],
        'password': json['password'],
    };
}

export function UsersPostRequestToJSON(value?: UsersPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'username': value.username,
        'password': value.password,
    };
}
