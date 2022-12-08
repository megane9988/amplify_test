/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PostItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PostitemProps = React.PropsWithChildren<Partial<FlexProps> & {
    postItem?: PostItem;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Postitem(props: PostitemProps): React.ReactElement;
