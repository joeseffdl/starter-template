/**
 * Type guards
 */

// Type guard for string
export const isString = (value: unknown): value is string =>
    typeof value === "string";

// Type guard for number
export const isNumber = (value: unknown): value is number =>
    typeof value === "number";

// Type guard for boolean
export const isBoolean = (value: unknown): value is boolean =>
    typeof value === "boolean";

// Type guard for array
export const isArray = <T>(value: unknown): value is T[] =>
    Array.isArray(value);

// Type guard for array of a specific type
export const isArrayOfType = <T>(
    value: unknown,
    checker: (val: any) => val is T,
): value is T[] => Array.isArray(value) && value.every(checker);

// Type guard for object (excluding arrays and null)
export const isObject = <T extends Record<string, unknown>>(
    value: unknown,
): value is T =>
    typeof value === "object" && !Array.isArray(value) && value !== null;

// Type guard for function
export const isFunction = (value: unknown): value is Function =>
    typeof value === "function";
