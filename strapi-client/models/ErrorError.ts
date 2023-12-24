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
 * @interface ErrorError
 */
export interface ErrorError {
    /**
     * 
     * @type {number}
     * @memberof ErrorError
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof ErrorError
     */
    details?: object;
}

/**
 * Check if a given object implements the ErrorError interface.
 */
export function instanceOfErrorError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorErrorFromJSON(json: any): ErrorError {
    return ErrorErrorFromJSONTyped(json, false);
}

export function ErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : json['details'],
    };
}

export function ErrorErrorToJSON(value?: ErrorError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'name': value.name,
        'message': value.message,
        'details': value.details,
    };
}
