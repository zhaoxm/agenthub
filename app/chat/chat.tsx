import { $getRoot, $getSelection, type EditorState, type InitialEditorStateType } from 'lexical';
import { useEffect, useState } from 'react';

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer, type InitialConfigType } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const theme: InitialConfigType['theme'] = {
  // Theme styling goes here
  //...
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

function MyOnChangePlugin({ onChange }: { onChange: (editorState: EditorState) => void }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
      console.log(editorState);
    });
  }, [editor, onChange]);

  return null;
}

export function Editor() {
  const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    theme,
    onError,
  };

  const [editorState, setEditorState] = useState<EditorState | null>(null);

  function onChange(editorState: EditorState) {
    setEditorState(editorState);
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={'Enter some text...'}
            placeholder={<div>Enter some text...</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <MyOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}