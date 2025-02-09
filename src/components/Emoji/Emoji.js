import { useState } from 'react';
import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { OutlinedButton } from 'components/button/OutlinedButton';
import { ReactComponent as EddEmojiIcon } from 'assets/icons/emoji-add-icon.svg';
import ArrowDownButton from 'components/button/ArrowDownButton';

function Emoji() {
  const [showPicker, setShowPicker] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const onAddEmojiClick = () => {
    setShowPicker(!showPicker);
    setShowEmoji(false);
  };

  const onArrowDownClick = () => {
    setShowEmoji(!showEmoji);
    setShowPicker(false);
  };
  return (
    <>
      <EmojiLayout>
        <ArrowDownButton onClick={onArrowDownClick} />
        {showEmoji && <EmojiExpandLayout />}
        <OutlinedButton
          width={88}
          height={41}
          className="light"
          onClick={onAddEmojiClick}
        >
          <EddEmojiIcon />
          추가
        </OutlinedButton>
        {showPicker && (
          <EmojiPickerLayout>
            <EmojiPicker />
          </EmojiPickerLayout>
        )}
      </EmojiLayout>
    </>
  );
}

export default Emoji;

const EmojiLayout = styled.div`
  position: relative;
  border: 1px solid gray;
  display: inline-flex;
  justify-content: center;
  gap: 0.8rem;
`;

const EmojiPickerLayout = styled.div`
  position: absolute;
  top: 5rem;
`;

const EmojiExpandLayout = styled.div`
  position: absolute;
  top: 5rem;
  right: 52%;
  width: 30rem;
  height: 13rem;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
