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
import type { ErrorData } from './ErrorData';
import {
    ErrorDataFromJSON,
    ErrorDataFromJSONTyped,
    ErrorDataToJSON,
} from './ErrorData';
import type { ErrorError } from './ErrorError';
import {
    ErrorErrorFromJSON,
    ErrorErrorFromJSONTyped,
    ErrorErrorToJSON,
} from './ErrorError';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {ErrorData}
     * @memberof ModelError
     */
    data?: ErrorData | null;
    /**
     * 
     * @type {ErrorError}
     * @memberof ModelError
     */
    error: ErrorError;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ErrorDataFromJSON(json['data']),
        'error': ErrorErrorFromJSON(json['error']),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ErrorDataToJSON(value.data),
        'error': ErrorErrorToJSON(value.error),
    };
}

