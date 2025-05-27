export type UUID = string & { __brand: 'uuid' };

export function generateUUID(): UUID {
    return crypto.randomUUID() as UUID;
}