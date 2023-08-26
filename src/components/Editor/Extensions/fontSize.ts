import "@tiptap/extension-text-style";

import { Extension } from "@tiptap/core";

export type FontSizeOptions = {
  types: string[];
  initialFontSize: string;
};

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    size: {
      /**
       * Set the text color
       */
      setFontSize: (size: string) => ReturnType;
      /**
       * Unset the text color
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

export const FontSize = Extension.create<FontSizeOptions>({
  name: "FontSize",

  addOptions() {
    return {
      types: ["textStyle"],
      initialFontSize: "12",
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: this.options.initialFontSize,
            parseHTML: (element) => {
              return element.style.fontSize?.replace(/['"]+/g, "");
            },
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}pt`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) => {
          return chain().setMark("textStyle", { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { fontSize: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});
