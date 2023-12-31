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
import type { AccommodationRequestDataPicturesInner } from './AccommodationRequestDataPicturesInner';
import {
    AccommodationRequestDataPicturesInnerFromJSON,
    AccommodationRequestDataPicturesInnerFromJSONTyped,
    AccommodationRequestDataPicturesInnerToJSON,
} from './AccommodationRequestDataPicturesInner';

/**
 * 
 * @export
 * @interface AccommodationRequestData
 */
export interface AccommodationRequestData {
    /**
     * 
     * @type {string}
     * @memberof AccommodationRequestData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AccommodationRequestData
     */
    location?: string;
    /**
     * 
     * @type {number}
     * @memberof AccommodationRequestData
     */
    reviewScore?: number;
    /**
     * 
     * @type {Array<AccommodationRequestDataPicturesInner>}
     * @memberof AccommodationRequestData
     */
    pictures?: Array<AccommodationRequestDataPicturesInner>;
    /**
     * 
     * @type {string}
     * @memberof AccommodationRequestData
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof AccommodationRequestData
     */
    reviewsCount?: number;
}

/**
 * Check if a given object implements the AccommodationRequestData interface.
 */
export function instanceOfAccommodationRequestData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccommodationRequestDataFromJSON(json: any): AccommodationRequestData {
    return AccommodationRequestDataFromJSONTyped(json, false);
}

export function AccommodationRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'location': !exists(json, 'Location') ? undefined : json['Location'],
        'reviewScore': !exists(json, 'ReviewScore') ? undefined : json['ReviewScore'],
        'pictures': !exists(json, 'Pictures') ? undefined : ((json['Pictures'] as Array<any>).map(AccommodationRequestDataPicturesInnerFromJSON)),
        'address': !exists(json, 'Address') ? undefined : json['Address'],
        'reviewsCount': !exists(json, 'ReviewsCount') ? undefined : json['ReviewsCount'],
    };
}

export function AccommodationRequestDataToJSON(value?: AccommodationRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Location': value.location,
        'ReviewScore': value.reviewScore,
        'Pictures': value.pictures === undefined ? undefined : ((value.pictures as Array<any>).map(AccommodationRequestDataPicturesInnerToJSON)),
        'Address': value.address,
        'ReviewsCount': value.reviewsCount,
    };
}

