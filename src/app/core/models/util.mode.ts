export class UtilHelper {
    static mapToObject<T>(object: T): T {
        return object;
    }

    static mapToObjectList<T>(objectList: T[]): T[] {
        if (!objectList || !objectList.length) {
            return [];
        }

        return objectList.map((object: T) => this.mapToObject<T>(object));
    }
}
