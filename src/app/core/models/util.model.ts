export class UtilHelper {
    static mapToObject<T>(object: T): T {
        return object;
    }

    static mapToObjectList<T>(objectList: T[]): T[] {
        if (!objectList?.length) {
            return new Array<T>();
        }

        return objectList.map((object: T) => this.mapToObject<T>(object));
    }
}
