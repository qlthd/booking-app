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
import type { UsersPermissionsUser } from './UsersPermissionsUser';
import {
    UsersPermissionsUserFromJSON,
    UsersPermissionsUserFromJSONTyped,
    UsersPermissionsUserToJSON,
} from './UsersPermissionsUser';

/**
 * 
 * @export
 * @interface UsersPermissionsUserRegistration
 */
export interface UsersPermissionsUserRegistration {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserRegistration
     */
    jwt?: string;
    /**
     * 
     * @type {UsersPermissionsUser}
     * @memberof UsersPermissionsUserRegistration
     */
    user?: UsersPermissionsUser;
}

/**
 * Check if a given object implements the UsersPermissionsUserRegistration interface.
 */
export function instanceOfUsersPermissionsUserRegistration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsUserRegistrationFromJSON(json: any): UsersPermissionsUserRegistration {
    return UsersPermissionsUserRegistrationFromJSONTyped(json, false);
}

export function UsersPermissionsUserRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsUserRegistration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'user': !exists(json, 'user') ? undefined : UsersPermissionsUserFromJSON(json['user']),
    };
}

export function UsersPermissionsUserRegistrationToJSON(value?: UsersPermissionsUserRegistration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jwt': value.jwt,
        'user': UsersPermissionsUserToJSON(value.user),
    };
}

