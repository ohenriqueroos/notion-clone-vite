import {
  useEditor,
  EditorContent,
  FloatingMenu,
  JSONContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import html from "highlight.js/lib/languages/xml";
import ts from "highlight.js/lib/languages/typescript";

import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

import "highlight.js/styles/tokyo-night-dark.css";
import EditorActions from "./EditorActions";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "./Extensions/fontSize";
import { Color } from "@tiptap/extension-color";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FloatingActions from "./FloatingActions";
import SaveStatus from "./SaveStatus";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("ts", ts);

const Editor = () => {
  const [content, setContent] = useState<JSONContent>();
  const themeSelected = useSelector(
    (state: { theme: ITheme }) => state.theme.themeMode
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Table.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        placeholder: "'/' para abrir o Menu...",
      }),
      TextStyle,
      Color,
      FontSize.configure({
        initialFontSize: "12",
        types: ["textStyle"],
      }),
    ],
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    onBlur({ editor }) {
      setTimeout(() => {
        setContent(editor.getJSON());
      }, 500);
    },
  });

  const onSetColorHandler = (color: string) => {
    editor?.commands.setColor(color);
  };

  useEffect(() => {
    if (themeSelected) onSetColorHandler("#fff");
    if (!themeSelected) onSetColorHandler("#000");
  }, [onSetColorHandler, themeSelected]);

  const onSaveHandler = useCallback(() => {
    console.log(content);
  }, [content]);

  useEffect(() => {
    setTimeout(() => {
      onSaveHandler();
    }, 1000);
  }, [onSaveHandler]);

  return (
    <>
      {editor && <EditorActions editor={editor} />}
      <SaveStatus />
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <FloatingActions editor={editor} />
        </FloatingMenu>
      )}
    </>
  );
};

export default Editor;
