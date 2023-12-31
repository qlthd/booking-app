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
import type { UsersPermissionsPermissionsTreeValue } from './UsersPermissionsPermissionsTreeValue';
import {
    UsersPermissionsPermissionsTreeValueFromJSON,
    UsersPermissionsPermissionsTreeValueFromJSONTyped,
    UsersPermissionsPermissionsTreeValueToJSON,
} from './UsersPermissionsPermissionsTreeValue';

/**
 * 
 * @export
 * @interface UsersPermissionsPermissionsGet200Response
 */
export interface UsersPermissionsPermissionsGet200Response {
    /**
     * 
     * @type {{ [key: string]: UsersPermissionsPermissionsTreeValue; }}
     * @memberof UsersPermissionsPermissionsGet200Response
     */
    permissions?: { [key: string]: UsersPermissionsPermissionsTreeValue; };
}

/**
 * Check if a given object implements the UsersPermissionsPermissionsGet200Response interface.
 */
export function instanceOfUsersPermissionsPermissionsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsPermissionsGet200ResponseFromJSON(json: any): UsersPermissionsPermissionsGet200Response {
    return UsersPermissionsPermissionsGet200ResponseFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissions': !exists(json, 'permissions') ? undefined : (mapValues(json['permissions'], UsersPermissionsPermissionsTreeValueFromJSON)),
    };
}

export function UsersPermissionsPermissionsGet200ResponseToJSON(value?: UsersPermissionsPermissionsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissions': value.permissions === undefined ? undefined : (mapValues(value.permissions, UsersPermissionsPermissionsTreeValueToJSON)),
    };
}

