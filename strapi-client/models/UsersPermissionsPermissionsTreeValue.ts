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
import type { UsersPermissionsPermissionsTreeValueControllersValueValue } from './UsersPermissionsPermissionsTreeValueControllersValueValue';
import {
    UsersPermissionsPermissionsTreeValueControllersValueValueFromJSON,
    UsersPermissionsPermissionsTreeValueControllersValueValueFromJSONTyped,
    UsersPermissionsPermissionsTreeValueControllersValueValueToJSON,
} from './UsersPermissionsPermissionsTreeValueControllersValueValue';

/**
 * every api
 * @export
 * @interface UsersPermissionsPermissionsTreeValue
 */
export interface UsersPermissionsPermissionsTreeValue {
    /**
     * every controller of the api
     * @type {{ [key: string]: { [key: string]: UsersPermissionsPermissionsTreeValueControllersValueValue; }; }}
     * @memberof UsersPermissionsPermissionsTreeValue
     */
    controllers?: { [key: string]: { [key: string]: UsersPermissionsPermissionsTreeValueControllersValueValue; }; };
}

/**
 * Check if a given object implements the UsersPermissionsPermissionsTreeValue interface.
 */
export function instanceOfUsersPermissionsPermissionsTreeValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsPermissionsTreeValueFromJSON(json: any): UsersPermissionsPermissionsTreeValue {
    return UsersPermissionsPermissionsTreeValueFromJSONTyped(json, false);
}

export function UsersPermissionsPermissionsTreeValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsPermissionsTreeValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controllers': !exists(json, 'controllers') ? undefined : json['controllers'],
    };
}

export function UsersPermissionsPermissionsTreeValueToJSON(value?: UsersPermissionsPermissionsTreeValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controllers': value.controllers,
    };
}
