/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Postitem(props) {
  const { postItem, overrides, ...rest } = props;
  return (
    <View
      width="424px"
      height="189px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Postitem")}
    >
      <Icon
        width="119px"
        height="119px"
        viewBox={{ minX: 0, minY: 0, width: 119, height: 119 }}
        paths={[
          {
            d: "M119 59.5C119 92.3609 92.3609 119 59.5 119C26.6391 119 0 92.3609 0 59.5C0 26.6391 26.6391 0 59.5 0C92.3609 0 119 26.6391 119 59.5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="35px"
        left="25px"
        src="megane.png"
        {...getOverrideProps(overrides, "avator")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="243px"
        height="132px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40px"
        left="162px"
        {...getOverrideProps(overrides, "text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="243px"
          height="74px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="58px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={postItem?.content}
          {...getOverrideProps(overrides, "content")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.94318199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="38px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={postItem?.date}
          {...getOverrideProps(overrides, "2022-12-09")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={postItem?.title}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
