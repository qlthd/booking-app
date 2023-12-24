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
import type { AccommodationPicturesDataInnerAttributes } from './AccommodationPicturesDataInnerAttributes';
import {
    AccommodationPicturesDataInnerAttributesFromJSON,
    AccommodationPicturesDataInnerAttributesFromJSONTyped,
    AccommodationPicturesDataInnerAttributesToJSON,
} from './AccommodationPicturesDataInnerAttributes';

/**
 * 
 * @export
 * @interface AccommodationPicturesDataInner
 */
export interface AccommodationPicturesDataInner {
    /**
     * 
     * @type {number}
     * @memberof AccommodationPicturesDataInner
     */
    id?: number;
    /**
     * 
     * @type {AccommodationPicturesDataInnerAttributes}
     * @memberof AccommodationPicturesDataInner
     */
    attributes?: AccommodationPicturesDataInnerAttributes;
}

/**
 * Check if a given object implements the AccommodationPicturesDataInner interface.
 */
export function instanceOfAccommodationPicturesDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccommodationPicturesDataInnerFromJSON(json: any): AccommodationPicturesDataInner {
    return AccommodationPicturesDataInnerFromJSONTyped(json, false);
}

export function AccommodationPicturesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationPicturesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AccommodationPicturesDataInnerAttributesFromJSON(json['attributes']),
    };
}

export function AccommodationPicturesDataInnerToJSON(value?: AccommodationPicturesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'attributes': AccommodationPicturesDataInnerAttributesToJSON(value.attributes),
    };
}

