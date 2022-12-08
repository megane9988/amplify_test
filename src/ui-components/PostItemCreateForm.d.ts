/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostItemCreateFormInputValues = {
    title?: string;
    date?: string;
    content?: string;
};
export declare type PostItemCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostItemCreateFormOverridesProps = {
    PostItemCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostItemCreateFormProps = React.PropsWithChildren<{
    overrides?: PostItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostItemCreateFormInputValues) => PostItemCreateFormInputValues;
    onSuccess?: (fields: PostItemCreateFormInputValues) => void;
    onError?: (fields: PostItemCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostItemCreateFormInputValues) => PostItemCreateFormInputValues;
    onValidate?: PostItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostItemCreateForm(props: PostItemCreateFormProps): React.ReactElement;
