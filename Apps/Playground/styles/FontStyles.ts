//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!

import { StyleSheet } from "react-native";
import { ARViewerTheme } from "./ARViewerTheme";

const defaultFontSize: number = 18;

export const IconFontStyle = StyleSheet.create({
    icon: {
        fontFamily: ARViewerTheme.iconFontFamily,
        fontSize: defaultFontSize
    }
});

export const FontStyle = StyleSheet.create({
    normal: {
        fontFamily: ARViewerTheme.fontFamily,
        fontSize: defaultFontSize
    }
});