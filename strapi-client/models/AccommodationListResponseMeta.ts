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
import type { AccommodationListResponseMetaPagination } from './AccommodationListResponseMetaPagination';
import {
    AccommodationListResponseMetaPaginationFromJSON,
    AccommodationListResponseMetaPaginationFromJSONTyped,
    AccommodationListResponseMetaPaginationToJSON,
} from './AccommodationListResponseMetaPagination';

/**
 * 
 * @export
 * @interface AccommodationListResponseMeta
 */
export interface AccommodationListResponseMeta {
    /**
     * 
     * @type {AccommodationListResponseMetaPagination}
     * @memberof AccommodationListResponseMeta
     */
    pagination?: AccommodationListResponseMetaPagination;
}

/**
 * Check if a given object implements the AccommodationListResponseMeta interface.
 */
export function instanceOfAccommodationListResponseMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccommodationListResponseMetaFromJSON(json: any): AccommodationListResponseMeta {
    return AccommodationListResponseMetaFromJSONTyped(json, false);
}

export function AccommodationListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : AccommodationListResponseMetaPaginationFromJSON(json['pagination']),
    };
}

export function AccommodationListResponseMetaToJSON(value?: AccommodationListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': AccommodationListResponseMetaPaginationToJSON(value.pagination),
    };
}

