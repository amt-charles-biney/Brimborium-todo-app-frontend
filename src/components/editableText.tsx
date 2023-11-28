import { useState, useRef, useEffect } from "react";

type EditableTextProps = {
  initialText: string;
  rows: number;
  callBack: (arg: string) => void;
};
const EditableText = ({ initialText, rows, callBack }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text == initialText) return;
    callBack(text);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing, initialText]);

  return (
    <div className="w-full" onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <textarea
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={inputRef}
          rows={rows}
          className="glass rounded-none w-full outline-none resize-none"
        ></textarea>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableText;
