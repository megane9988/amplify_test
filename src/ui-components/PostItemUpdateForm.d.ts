/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PostItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostItemUpdateFormInputValues = {
    title?: string;
    date?: string;
    content?: string;
};
export declare type PostItemUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostItemUpdateFormOverridesProps = {
    PostItemUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postItem?: PostItem;
    onSubmit?: (fields: PostItemUpdateFormInputValues) => PostItemUpdateFormInputValues;
    onSuccess?: (fields: PostItemUpdateFormInputValues) => void;
    onError?: (fields: PostItemUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostItemUpdateFormInputValues) => PostItemUpdateFormInputValues;
    onValidate?: PostItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostItemUpdateForm(props: PostItemUpdateFormProps): React.ReactElement;
