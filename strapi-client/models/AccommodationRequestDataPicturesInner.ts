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

/**
 * @type AccommodationRequestDataPicturesInner
 * 
 * @export
 */
export type AccommodationRequestDataPicturesInner = number | string;

export function AccommodationRequestDataPicturesInnerFromJSON(json: any): AccommodationRequestDataPicturesInner {
    return AccommodationRequestDataPicturesInnerFromJSONTyped(json, false);
}

export function AccommodationRequestDataPicturesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationRequestDataPicturesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...numberFromJSONTyped(json, true), ...stringFromJSONTyped(json, true) };
}

export function AccommodationRequestDataPicturesInnerToJSON(value?: AccommodationRequestDataPicturesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
