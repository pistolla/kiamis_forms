// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
import {getPathParam} from '../utils/serializeUtil';

export const fetchEntity = (entityName: any) => {
    return fetch(entityName.toLowerCase());
};

export const fetchEntityById = (entityName: any, dataId: any) => {
    return fetch(getPathParam(entityName.toLowerCase(), dataId));
};

export const storeEntity = (entityName: any, data: any) => {
    return store(entityName.toLowerCase(), data);
};

export const updateEntity = (entityName: any, data: any, dataId: any) => {
    return update(getPathParam(entityName.toLowerCase(), dataId), data);
};

export const destroyEntity = (entityName: any, dataId: any) => {
    return destroy(getPathParam(entityName.toLowerCase(), dataId));
};