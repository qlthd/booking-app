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
import type { AccommodationPicturesDataInnerAttributesFolderDataAttributesFiles } from './AccommodationPicturesDataInnerAttributesFolderDataAttributesFiles';
import {
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesFromJSON,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesFromJSONTyped,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesToJSON,
} from './AccommodationPicturesDataInnerAttributesFolderDataAttributesFiles';
import type { AccommodationPicturesDataInnerAttributesFolderDataAttributesParent } from './AccommodationPicturesDataInnerAttributesFolderDataAttributesParent';
import {
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSONTyped,
    AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON,
} from './AccommodationPicturesDataInnerAttributesFolderDataAttributesParent';
import type { AccommodationPicturesDataInnerAttributesRelated } from './AccommodationPicturesDataInnerAttributesRelated';
import {
    AccommodationPicturesDataInnerAttributesRelatedFromJSON,
    AccommodationPicturesDataInnerAttributesRelatedFromJSONTyped,
    AccommodationPicturesDataInnerAttributesRelatedToJSON,
} from './AccommodationPicturesDataInnerAttributesRelated';

/**
 * 
 * @export
 * @interface AccommodationPicturesDataInnerAttributesFolderDataAttributes
 */
export interface AccommodationPicturesDataInnerAttributesFolderDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    pathId?: number;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesParent}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    parent?: AccommodationPicturesDataInnerAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesRelated}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    children?: AccommodationPicturesDataInnerAttributesRelated;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesFiles}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    files?: AccommodationPicturesDataInnerAttributesFolderDataAttributesFiles;
    /**
     * 
     * @type {string}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    path?: string;
    /**
     * 
     * @type {Date}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesParent}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    createdBy?: AccommodationPicturesDataInnerAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributesFolderDataAttributesParent}
     * @memberof AccommodationPicturesDataInnerAttributesFolderDataAttributes
     */
    updatedBy?: AccommodationPicturesDataInnerAttributesFolderDataAttributesParent;
}

/**
 * Check if a given object implements the AccommodationPicturesDataInnerAttributesFolderDataAttributes interface.
 */
export function instanceOfAccommodationPicturesDataInnerAttributesFolderDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesFromJSON(json: any): AccommodationPicturesDataInnerAttributesFolderDataAttributes {
    return AccommodationPicturesDataInnerAttributesFolderDataAttributesFromJSONTyped(json, false);
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationPicturesDataInnerAttributesFolderDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pathId': !exists(json, 'pathId') ? undefined : json['pathId'],
        'parent': !exists(json, 'parent') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON(json['parent']),
        'children': !exists(json, 'children') ? undefined : AccommodationPicturesDataInnerAttributesRelatedFromJSON(json['children']),
        'files': !exists(json, 'files') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesFromJSON(json['files']),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON(json['createdBy']),
        'updatedBy': !exists(json, 'updatedBy') ? undefined : AccommodationPicturesDataInnerAttributesFolderDataAttributesParentFromJSON(json['updatedBy']),
    };
}

export function AccommodationPicturesDataInnerAttributesFolderDataAttributesToJSON(value?: AccommodationPicturesDataInnerAttributesFolderDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'pathId': value.pathId,
        'parent': AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON(value.parent),
        'children': AccommodationPicturesDataInnerAttributesRelatedToJSON(value.children),
        'files': AccommodationPicturesDataInnerAttributesFolderDataAttributesFilesToJSON(value.files),
        'path': value.path,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'createdBy': AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON(value.createdBy),
        'updatedBy': AccommodationPicturesDataInnerAttributesFolderDataAttributesParentToJSON(value.updatedBy),
    };
}

