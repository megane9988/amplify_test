import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPostItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly date?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostItem = LazyLoading extends LazyLoadingDisabled ? EagerPostItem : LazyPostItem

export declare const PostItem: (new (init: ModelInit<PostItem>) => PostItem) & {
  copyOf(source: PostItem, mutator: (draft: MutableModel<PostItem>) => MutableModel<PostItem> | void): PostItem;
}