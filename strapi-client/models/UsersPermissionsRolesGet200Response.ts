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
import type { UsersPermissionsRolesGet200ResponseRolesInner } from './UsersPermissionsRolesGet200ResponseRolesInner';
import {
    UsersPermissionsRolesGet200ResponseRolesInnerFromJSON,
    UsersPermissionsRolesGet200ResponseRolesInnerFromJSONTyped,
    UsersPermissionsRolesGet200ResponseRolesInnerToJSON,
} from './UsersPermissionsRolesGet200ResponseRolesInner';

/**
 * 
 * @export
 * @interface UsersPermissionsRolesGet200Response
 */
export interface UsersPermissionsRolesGet200Response {
    /**
     * 
     * @type {Array<UsersPermissionsRolesGet200ResponseRolesInner>}
     * @memberof UsersPermissionsRolesGet200Response
     */
    roles?: Array<UsersPermissionsRolesGet200ResponseRolesInner>;
}

/**
 * Check if a given object implements the UsersPermissionsRolesGet200Response interface.
 */
export function instanceOfUsersPermissionsRolesGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsRolesGet200ResponseFromJSON(json: any): UsersPermissionsRolesGet200Response {
    return UsersPermissionsRolesGet200ResponseFromJSONTyped(json, false);
}

export function UsersPermissionsRolesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsRolesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(UsersPermissionsRolesGet200ResponseRolesInnerFromJSON)),
    };
}

export function UsersPermissionsRolesGet200ResponseToJSON(value?: UsersPermissionsRolesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(UsersPermissionsRolesGet200ResponseRolesInnerToJSON)),
    };
}

