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
 * @interface UsersPermissionsUser
 */
export interface UsersPermissionsUser {
    /**
     * 
     * @type {number}
     * @memberof UsersPermissionsUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUser
     */
    provider?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUser
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUser
     */
    blocked?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUser
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUser
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UsersPermissionsUser interface.
 */
export function instanceOfUsersPermissionsUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersPermissionsUserFromJSON(json: any): UsersPermissionsUser {
    return UsersPermissionsUserFromJSONTyped(json, false);
}

export function UsersPermissionsUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPermissionsUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'confirmed': !exists(json, 'confirmed') ? undefined : json['confirmed'],
        'blocked': !exists(json, 'blocked') ? undefined : json['blocked'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function UsersPermissionsUserToJSON(value?: UsersPermissionsUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'email': value.email,
        'provider': value.provider,
        'confirmed': value.confirmed,
        'blocked': value.blocked,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

