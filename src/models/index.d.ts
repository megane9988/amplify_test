import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PostItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPostItem = {
  readonly id: string;
  readonly title?: string | null;
  readonly date?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostItem = {
  readonly id: string;
  readonly title?: string | null;
  readonly date?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostItem = LazyLoading extends LazyLoadingDisabled ? EagerPostItem : LazyPostItem

export declare const PostItem: (new (init: ModelInit<PostItem, PostItemMetaData>) => PostItem) & {
  copyOf(source: PostItem, mutator: (draft: MutableModel<PostItem, PostItemMetaData>) => MutableModel<PostItem, PostItemMetaData> | void): PostItem;
}