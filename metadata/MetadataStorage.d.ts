import { TypeMetadata } from "./TypeMetadata";
import { ExposeMetadata } from "./ExposeMetadata";
import { ExcludeMetadata } from "./ExcludeMetadata";
import { TransformationType } from "../TransformOperationExecutor";
import { TransformMetadata } from "./TransformMetadata";
/**
 * Storage all library metadata.
 */
export declare class MetadataStorage {
    private _typeMetadatas;
    private _transformMetadatas;
    private _exposeMetadatas;
    private _excludeMetadatas;
    addTypeMetadata(metadata: TypeMetadata): void;
    addTransformMetadata(metadata: TransformMetadata): void;
    addExposeMetadata(metadata: ExposeMetadata): void;
    addExcludeMetadata(metadata: ExcludeMetadata): void;
    findTransformMetadatas(target: Function, propertyName: string, transformationType: TransformationType): TransformMetadata[];
    findExcludeMetadata(target: Function, propertyName: string): ExcludeMetadata;
    findExposeMetadata(target: Function, propertyName: string): ExposeMetadata;
    findExposeMetadataByCustomName(target: Function, name: string): ExposeMetadata;
    findTypeMetadata(target: Function, propertyName: string): TypeMetadata;
    getStrategy(target: Function): "excludeAll" | "exposeAll" | "none";
    getExposedMetadatas(target: Function): ExposeMetadata[];
    getExcludedMetadatas(target: Function): ExcludeMetadata[];
    getExposedProperties(target: Function, transformationType: TransformationType): string[];
    getExcludedProperties(target: Function, transformationType: TransformationType): string[];
    clear(): void;
    private getMetadata<T>(metadatas, target);
    private findMetadata<T>(metadatas, target, propertyName);
    private findMetadatas<T>(metadatas, target, propertyName);
}
