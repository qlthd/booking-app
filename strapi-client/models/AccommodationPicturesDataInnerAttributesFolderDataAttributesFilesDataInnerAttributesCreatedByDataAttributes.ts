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
import type { AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles } from './AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles';
import {
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSON,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSONTyped,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesToJSON,
} from './AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles';
import type { AccommodationPicturesDataInnerAttributesFolderDataAttributesParent } from './AccommodationPicturesDataInnerAttributesFolderDataAttributesParent';
import {
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSONTyped,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON,
} from './AccommodationPicturesDataInnerAttributesFolderDataAttributesParent';

/**
 * 
 * @export
 * @interface AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
 */
export interface AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    registrationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    isActive?: boolean;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    roles?: AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRoles;
    /**
     * 
     * @type {boolean}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    preferedLanguage?: string;
    /**
     * 
     * @type {Date}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesParent}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    createdBy?: AccommodationPicturesDataInnerAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesParent}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes
     */
    updatedBy?: AccommodationPicturesDataInnerAttributesFolderDataAttributesParent;
}

/**
 * Check if a given object implements the AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes interface.
 */
export function instanceOfAccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSON(json: any): AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
    return AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSONTyped(json, false);
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'resetPasswordToken': !exists(json, 'resetPasswordToken') ? undefined : json['resetPasswordToken'],
        'registrationToken': !exists(json, 'registrationToken') ? undefined : json['registrationToken'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'roles': !exists(json, 'roles') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesFromJSON(json['roles']),
        'blocked': !exists(json, 'blocked') ? undefined : json['blocked'],
        'preferedLanguage': !exists(json, 'preferedLanguage') ? undefined : json['preferedLanguage'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON(json['createdBy']),
        'updatedBy': !exists(json, 'updatedBy') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON(json['updatedBy']),
    };
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesToJSON(value?: AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstname': value.firstname,
        'lastname': value.lastname,
        'username': value.username,
        'email': value.email,
        'resetPasswordToken': value.resetPasswordToken,
        'registrationToken': value.registrationToken,
        'isActive': value.isActive,
        'roles': AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesDataInnerAttributesCreatedByDataAttributesRolesToJSON(value.roles),
        'blocked': value.blocked,
        'preferedLanguage': value.preferedLanguage,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'createdBy': AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON(value.createdBy),
        'updatedBy': AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON(value.updatedBy),
    };
}

